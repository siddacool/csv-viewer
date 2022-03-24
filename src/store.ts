import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';
import { setDefaultStorageName, createStore as createSathaStore } from '@satha/core';
import { CSVToArray } from './utils';

setDefaultStorageName('csv-viewer-1');
const darkThemeLocalStorage = createSathaStore('dark-theme', false);
const themeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

const [csvDataMain, setStore] = createStore({ data: [] });

export const csvData = csvDataMain;

export const addCsvData = (data = '') => {
  const toArrayData = CSVToArray(data);

  setStore('data', () => toArrayData);
};

export const clearCsvData = () => {
  setStore('data', () => []);
};

export const dataLength = createMemo(() => {
  if (!csvData.data.length) {
    return [];
  }

  const toReturn: any[] = [];

  csvData.data.forEach((d: any[]) => {
    d.forEach((d1 = '', i: number) => {
      if (!toReturn[i]) {
        toReturn[i] = d1.length;
      } else {
        if (d1.length > toReturn[i]) {
          toReturn[i] = d1.length;
        }
      }
    });
  });

  return toReturn;
});

const [darkThemeMain, setDarkTheme] = createStore({ active: darkThemeLocalStorage.get() });

const body = document.querySelector('body');

export const darkTheme = darkThemeMain;

export const darkThemeToggle = () => {
  const newCondition = !darkThemeMain.active;
  darkThemeLocalStorage.set(() => newCondition);

  setDarkTheme('active', () => newCondition);

  if (newCondition) {
    body?.classList.add('dark');
    themeColor.content = '#2a2a2a';
  } else {
    body?.classList.remove('dark');
    themeColor.content = '#e5e5e5';
  }
};

export const darkThemeSet = () => {
  if (darkThemeMain.active) {
    body?.classList.add('dark');
    themeColor.content = '#2a2a2a';
  }
};
