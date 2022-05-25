import { atom, Getter, SetStateAction, Setter } from 'jotai';
import { Atomize, atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';
import { allColorsWoAlternatives, ColorItem, groupColors, SortBy, sortColorItemsFn } from '../utils/colors';

export enum SectionName {
    hue,
    list,
}

//#region LocalStorage

namespace Storage {
    const KEY = 'react-name-colors22-01';

    type Store = {
        appOptions: AppOptions;
        viewHueOptions: ViewHueOptions;
        viewListOptions: ViewListOptions;
    };

    export let initialData: Store = {
        appOptions: {
            currentSection: SectionName.hue,
        },
        viewHueOptions: {
            color: null,
            hue: 0,
            mono: false,
        },
        viewListOptions: {
            sortBy: SortBy.hsl,
        },
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                initialData = { ...initialData, ...obj };
            } catch (error) {
            }
        }
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            appOptions: {
                currentSection: get(AppAtoms.currentSectionAtom),
            },
            viewHueOptions: {
                color: get(viewHueAtoms.colorAtom),
                hue: get(_hueAtom),
                mono: get(_monoAtom),
            },
            viewListOptions: {
                sortBy: get(viewListAtoms.sortByAtom),
            },
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion LocalStorage

//#region By Hue

type ViewHueOptions = {
    color: ColorItem | null;
    hue: number;
    mono: boolean; // monochrome vs. color
};

const _hueAtom = atomWithCallback(Storage.initialData.viewHueOptions.hue, Storage.save);
const _monoAtom = atomWithCallback(Storage.initialData.viewHueOptions.mono, Storage.save);

export const viewHueAtoms: Atomize<ViewHueOptions & {
    colorGroups: ColorItem[][];
    tolerance: number;
}> = {
    colorAtom: atomWithCallback(Storage.initialData.viewHueOptions.color, Storage.save),
    hueAtom: atom(
        (get) => get(_hueAtom),
        (get, set, hue: SetStateAction<number>) => {
            const v = typeof hue === 'function' ? hue(get(_hueAtom)) : hue;
            setColorList(v, get(_monoAtom), set);
            set(_hueAtom, v);
        }
    ),
    monoAtom: atom(
        (get) => get(_monoAtom),
        (get, set, mono: SetStateAction<boolean>) => {
            const v = typeof mono === 'function' ? mono(get(_monoAtom)) : mono;
            setColorList(get(_hueAtom), v, set);
            set(_monoAtom, v);
        }
    ),
    colorGroupsAtom: atom<ColorItem[][]>([]),
    toleranceAtom: atom(0),
};

function setColorList(hue: number, mono: boolean, set: Setter) {
    const groups = groupColors({ colorList: allColorsWoAlternatives, hue, startTolerance: 5, mono, });
    set(viewHueAtoms.colorGroupsAtom, groups.list);
    set(viewHueAtoms.toleranceAtom, groups.tolerance);
    set(viewHueAtoms.colorAtom, groups?.list?.[0]?.[0] || null);
}

function dataLoader(get: Getter, set: Setter) {
    setColorList(get(_hueAtom), get(_monoAtom), set);
}

const _dataLoadOnceAtom = atom<boolean>(false); // to get around <React.StrictMode> during development.
export const dataLoadAtom = atom(
    null, (get, set) => { !get(_dataLoadOnceAtom) && (dataLoader(get, set), set(_dataLoadOnceAtom, true)); }
);
dataLoadAtom.onMount = (run) => run();

//#endregion By Hue

//#region Sorted colors list

type ViewListOptions = {
    sortBy: SortBy;
};

export const viewListAtoms: Atomize<ViewListOptions & {
    colorList: ColorItem[];
}> = {
    sortByAtom: atom(
        (get) => get(_colorListSortByAtom),
        (get, set, value: SetStateAction<SortBy>) => {
            const v = typeof value === 'function' ? value(get(_colorListSortByAtom)) : value;
            const fn = sortColorItemsFn(v);
            const list = fn ? [...allColorsWoAlternatives].sort(fn) : allColorsWoAlternatives;
            set(viewListAtoms.colorListAtom, list);
            set(_colorListSortByAtom, v);
        }
    ),
    colorListAtom: atom<ColorItem[]>([]),

};
viewListAtoms.sortByAtom.onMount = (set) => set(Storage.initialData.viewListOptions.sortBy);

const _colorListSortByAtom = atomWithCallback(Storage.initialData.viewListOptions.sortBy, Storage.save);

//#endregion Sorted colors list

//#region App options

type AppOptions = {
    currentSection: SectionName;
};

export const AppAtoms: Atomize<AppOptions> = {
    currentSectionAtom: atomWithCallback(Storage.initialData.appOptions.currentSection, Storage.save),
};

//#endregion App options
