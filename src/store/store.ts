import { atom, Getter, SetStateAction, Setter } from 'jotai';
import { Atomize, atomLoader, atomWithCallback } from '@/hooks/atomsX';
import { debounce } from '@/utils/debounce';
import { allColorsWoAlternatives, ColorItem, groupColors, SortBy, sortColorItemsFn } from '@/utils/colors';
import { ColorGroups } from '@/components/UI/TailwindColorsBridge';

export enum SectionName {
    hue,
    list,
    tailwind,
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
            hue: 298,
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

//#endregion By Hue

//#region Sorted colors list

type ViewListOptions = {
    sortBy: SortBy;
};

const _colorListSortByAtom = atomWithCallback(Storage.initialData.viewListOptions.sortBy, Storage.save);

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

//#endregion Sorted colors list

//#region Tailwind

/*1*/
export type CurrentTwColor = {
    group: string;  // group: stale, ..
    key: string;    // 50, 100, ..
    value: string;  // hex color value
}

export const currentTwColorAtom = atom<CurrentTwColor | null>(null);
/**/

/*3* /
export type CurrentTwGrIdx = {
    key: string;    // 50, 100, ..
    value: string;  // hex color value
};

export type CurrentTwColor =
    & {
        group: string;  // group: stale, ..
    }
    & CurrentTwGrIdx;

export const currentTwColorAtom = atom<CurrentTwColor | null>(null);

export const setTwGrIdxAtom = atom(
    null,
    (get, set, value: CurrentTwGrIdx) => {
        const twColor = get(currentTwColorAtom);
        if (twColor) {
            set(currentTwColorAtom, { group: twColor.group, ...value });
        }
    }
);

/**/

/*2* /
export type CurrentTwGrIdx = {
    key: string;    // 50, 100, ..
    value: string;  // hex color value
};

export type CurrentTwColor = {
    group: string;  // group: stale, ..
} & CurrentTwGrIdx;

export const currentTwGroupAtom = atom<string | null>(null);
export const currentTwGrIdxAtom = atom<CurrentTwGrIdx | null>(null);

export const currentTwColorAtom = atom(
    (get) => {
        const group = get(currentTwGroupAtom);
        const grIdx = get(currentTwGrIdxAtom);
        return group && grIdx ? { group, ...grIdx } : null;
    },
    (get, set, value: SetStateAction<CurrentTwColor | null>) => {
        const v = typeof value === 'function'? value(get(currentTwColorAtom)) : value;
        if (!v) {
            set(currentTwGroupAtom, null);
            set(currentTwGrIdxAtom, null);
        } else {
            set(currentTwGroupAtom, v.group);
            set(currentTwGrIdxAtom, { key: v.key, value: v.value });
        }
    }
);
/**/

export const allColorsAtom = atom<ColorGroups>({});

//#endregion Tailwind

//#region App options

type AppOptions = {
    currentSection: SectionName;
};

export const AppAtoms: Atomize<AppOptions> = {
    currentSectionAtom: atomWithCallback(Storage.initialData.appOptions.currentSection, Storage.save),
};

export const dataLoadAtom = atomLoader((get: Getter, set: Setter) => {
    setColorList(get(_hueAtom), get(_monoAtom), set);
    set(viewListAtoms.sortByAtom, get(_colorListSortByAtom));
});

//#endregion App options
