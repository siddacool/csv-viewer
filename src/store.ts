import { createStore } from 'solid-js/store';
import { setDefaultStorageName, createStore as createSathaStore } from '@satha/core';
import { CSVToArray } from './utils';

setDefaultStorageName('csv-viewer-1');
const darkThemeLocalStorage = createSathaStore('dark-theme', false);

const [csvDataMain, setStore] = createStore({ data: [] });

export const csvData = csvDataMain;

export const addCsvData = (data = '') => {
  const toArrayData = CSVToArray(data);

  setStore('data', () => toArrayData);
};

export const clearCsvData = () => {
  setStore('data', () => []);
};

const [darkThemeMain, setDarkTheme] = createStore({ active: darkThemeLocalStorage.get() });

const body = document.querySelector('body');

export const darkTheme = darkThemeMain;

export const darkThemeToggle = () => {
  const newCondition = !darkThemeMain.active;
  darkThemeLocalStorage.set(() => newCondition);

  setDarkTheme('active', () => newCondition);

  if (newCondition) {
    body?.classList.add('dark');
  } else {
    body?.classList.remove('dark');
  }
};

export const darkThemeSet = () => {
  if (darkThemeMain.active) {
    body?.classList.add('dark');
  }
};
