import { atom, Getter } from 'jotai';
import { atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';
import { allColorsWoAlternatives, ColorItem, compareHsl, compareNames, compareRgb, groupColors, SortBy, sortColorItemsFn } from '../utils/colors';

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

    export const save = debounce(function _save(get: Getter) {
        let newStore: Store = {
            color: get(globalColorAtom),
            hue: get(_hueAtom),
            sort: get(colorListSortByAtom),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);
}

//#endregion LocalStorage

//#region By Hue

export const globalColorAtom = atomWithCallback(Storage.initialData.color, ({ get }) => Storage.save(get));
export const colorGroupsAtom = atom<ColorItem[][]>([]);
export const toleranceAtom = atom(0);

const _hueAtom = atomWithCallback(Storage.initialData.hue, ({ get }) => Storage.save(get));

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

export const colorListAtom = atom<ColorItem[]>([]);

export const _colorListSortByAtom = atomWithCallback(Storage.initialData.sort, ({ get }) => Storage.save(get));

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
    groups,
    list,
}

export const currentSectionAtom = atom<SectionName>(SectionName.groups);
