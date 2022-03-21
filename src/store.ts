import { createStore } from 'solid-js/store';
import { CSVToArray } from './utils';

const [csvDataMain, setStore] = createStore({ data: [] });

export const csvData = csvDataMain;

export const addCsvData = (data = '') => {
  const toArrayData = CSVToArray(data);

  setStore('data', () => toArrayData);
};

export const clearCsvData = () => {
  setStore('data', () => []);
};
