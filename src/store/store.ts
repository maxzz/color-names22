import { atom, Getter } from 'jotai';
import { atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';
import { clearList, ColorItem, groupColors } from '../utils/colors';

//#region LocalStorage

namespace Storage {
    const KEY = 'react-name-colors22-01';

    type Store = {
        color: string;
        hue: number;
    };

    export let initialData: Store = {
        color: 'green',
        hue: 0,
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
            color: get(colorAtom),
            hue: get(_hueAtom),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);
}

//#endregion LocalStorage

export const colorAtom = atomWithCallback(Storage.initialData.color, ({ get }) => Storage.save(get));
export const colorsGroupsAtom = atom<ColorItem[][]>([]);
export const toleranceAtom = atom(0);

const _hueAtom = atomWithCallback(Storage.initialData.hue, ({get}) => Storage.save(get));

export const hueAtom = atom(
    (get) => get(_hueAtom),
    (get, set, hue: number) => {
        const groups = groupColors({
            colorList: clearList,
            hue,
            tolerance: { min: 5 },
            mono: false,
        });

        set(colorsGroupsAtom, groups.list);
        set(toleranceAtom, groups.tolerance);
        set(colorAtom, '');
        set(_hueAtom, hue);
    }
);
