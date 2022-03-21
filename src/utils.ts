import { addCsvData } from './store';

export const CSVToArray = (data = '', delimiter = ',', omitFirstRow = false): any[] =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map((v) => v.split(delimiter));

export const pasteDetector = async (event: { ctrlKey: any; metaKey: any; keyCode: number }) => {
  if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
    try {
      const text = await navigator.clipboard.readText();

      addCsvData(text);
    } catch (e) {
      console.log(e);
    }
  }
};
