import { atom, Getter } from 'jotai';
import { Atomize, atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';
import { allColorsWoAlternatives, ColorItem, groupColors, SortBy, sortColorItemsFn } from '../utils/colors';

//#region LocalStorage

namespace Storage {
    const KEY = 'react-name-colors22-01';

    type Store = {
        color: ColorItem | null;
        hue: number;
        sort: SortBy;
    };

    export let initialData: Store = {
        color: null,
        hue: 0,
        sort: SortBy.hsl,
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
            color: get(globalColorAtom),
            hue: get(_hueAtom),
            sort: get(colorListSortByAtom),
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
    colorAtom: atomWithCallback(Storage.initialData.color, Storage.save),
    hueAtom: atomWithCallback(Storage.initialData.hue, Storage.save),

    colorGroupsAtom: atom<ColorItem[][]>([]),
    toleranceAtom: atom(0),
};

export const globalColorAtom = atomWithCallback(Storage.initialData.color, Storage.save);
export const colorGroupsAtom = atom<ColorItem[][]>([]);
export const toleranceAtom = atom(0);

const _hueAtom = atomWithCallback(Storage.initialData.hue, Storage.save);

export const hueAtom = atom(
    (get) => get(_hueAtom),
    (get, set, hue: number) => {
        const groups = groupColors({
            colorList: allColorsWoAlternatives,
            hue,
            startTolerance: 5,
            mono: false,
        });

        set(colorGroupsAtom, groups.list);
        set(toleranceAtom, groups.tolerance);
        set(globalColorAtom, groups?.list?.[0]?.[0] || null);
        set(_hueAtom, hue);
    }
);
hueAtom.onMount = (set) => set(Storage.initialData.hue);

//#endregion By Hue

//#region Sorted colors list

type ViewListOptions = {
    sort: SortBy;
};

export const viewListAtoms: Atomize<ViewListOptions & {
    colorList: ColorItem[];
}> = {
    sortAtom: atomWithCallback(Storage.initialData.sort, Storage.save),

    colorListAtom: atom<ColorItem[]>([]),
};

export const colorListAtom = atom<ColorItem[]>([]);

export const _colorListSortByAtom = atomWithCallback(Storage.initialData.sort, Storage.save);

export const colorListSortByAtom = atom(
    (get) => get(_colorListSortByAtom),
    (get, set, value: SortBy) => {
        const fn = sortColorItemsFn(value);
        const list = fn ? [...allColorsWoAlternatives].sort(fn) : allColorsWoAlternatives;
        set(colorListAtom, list);
        set(_colorListSortByAtom, value);
    }
);
colorListSortByAtom.onMount = (set) => set(Storage.initialData.sort);

//#endregion Sorted colors list

export enum SectionName {
    hue,
    list,
}

export const currentSectionAtom = atom<SectionName>(SectionName.hue);
