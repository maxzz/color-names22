import { atom, Getter, SetStateAction, Setter } from 'jotai';
import { Atomize, atomLoader, atomWithCallback } from '@/hooks/atomsX';
import { debounce } from '@/utils/debounce';
import { allColorsWoAlternatives, ColorItem, groupColors, SortBy, sortColorItemsFn } from '@/utils-color';
import { ColorGroups } from '@/components/UI/TailwindColorsBridge';
import { initialData, Store } from './store-initial-data';

export * from './store-initial-data';
export * from './store0_app';
export * from './store1_hue';
export * from './store2_sorted-colors';
export * from './store3_tailwind';
