import { atom, Getter, SetStateAction } from 'jotai';
import { Atomize, atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';
import { allColorsWoAlternatives, ColorItem, groupColors, SortBy, sortColorItemsFn } from '../utils/colors';

//#region LocalStorage

namespace Storage {
    const KEY = 'react-name-colors22-01';

    type Store = {
        viewHueOptions: ViewHueOptions;
        viewListOptions: ViewListOptions;
    };

    export let initialData: Store = {
        viewHueOptions: {
            color: null,
            hue: 0,
        },
        viewListOptions : {
            sort: SortBy.hsl,
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
            viewHueOptions: {
                color: get(viewHueAtoms.colorAtom),
                hue: get(_hueAtom),
            },
            viewListOptions:{
                sort: get(viewListAtoms.sortAtom),
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
};

export const viewHueAtoms: Atomize<ViewHueOptions & {
    colorGroups: ColorItem[][];
    tolerance: number;
}> = {
    colorAtom: atomWithCallback(Storage.initialData.viewHueOptions.color, Storage.save),
    hueAtom: atom(
        (get) => get(_hueAtom),
        (get, set, hue: SetStateAction<number>) => {
            const v = typeof hue === 'function' ? hue(get(_hueAtom)) : hue;
            const groups = groupColors({
                colorList: allColorsWoAlternatives,
                hue: v,
                startTolerance: 5,
                mono: false,
            });
    
            set(viewHueAtoms.colorGroupsAtom, groups.list);
            set(viewHueAtoms.toleranceAtom, groups.tolerance);
            set(viewHueAtoms.colorAtom, groups?.list?.[0]?.[0] || null);
            set(_hueAtom, hue);
        }
    ),
    colorGroupsAtom: atom<ColorItem[][]>([]),
    toleranceAtom: atom(0),
};
viewHueAtoms.hueAtom.onMount = (set) => set(Storage.initialData.viewHueOptions.hue);

const _hueAtom = atomWithCallback(Storage.initialData.viewHueOptions.hue, Storage.save);

//#endregion By Hue

//#region Sorted colors list

type ViewListOptions = {
    sort: SortBy;
};

export const viewListAtoms: Atomize<ViewListOptions & {
    colorList: ColorItem[];
}> = {
    sortAtom: atom(
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
viewListAtoms.sortAtom.onMount = (set) => set(Storage.initialData.viewListOptions.sort);

export const _colorListSortByAtom = atomWithCallback(Storage.initialData.viewListOptions.sort, Storage.save);

//#endregion Sorted colors list

export enum SectionName {
    hue,
    list,
}

export const currentSectionAtom = atom<SectionName>(SectionName.hue);
