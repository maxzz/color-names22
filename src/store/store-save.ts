import { debounce } from "@/utils/debounce";
import { Getter } from "jotai";
import { Store } from "./store-initial-data";
import { STORAGE_KEY } from "./store-load";
import { AppAtoms } from "./store0_app";
import { viewHueAtoms, _hueAtom, _monoAtom } from "./store1_hue";
import { viewListAtoms } from "./store2_sorted-colors";

const saveDebounced = debounce(function _save(get: Getter) {
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
    console.log('save', newStore);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore));
}, 1000);

export function saveStore({ get }: { get: Getter; }) {
    return saveDebounced(get);
}
