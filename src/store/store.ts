import { atom, Getter } from 'jotai';
import { atomWithCallback } from '../hooks/atomsX';
import { debounce } from '../utils/debounce';

//#region LocalStorage

namespace Storage {
    const KEY = 'react-name-colors22-01';

    type Store = {
        color: string;
    };

    export let initialData: Store = {
        color: 'red',
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
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);
}

//#endregion LocalStorage

export const colorAtom = atomWithCallback('blue', ({get}) => Storage.save(get));
