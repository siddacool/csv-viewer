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

interface IPixelCalculatorConfig {
  base?: number;
  minLength?: number;
  extraPad?: number;
}

export const pixelCalculator = (length = 0, config: IPixelCalculatorConfig) => {
  const { base = 10, extraPad = 0, minLength = 50 } = config || {};

  let lengthNew = base * length + extraPad;

  if (lengthNew < minLength) {
    lengthNew = minLength;
  }

  return lengthNew;
};

export const pixelCalculatorInCh = (length = 0, config: IPixelCalculatorConfig) => {
  const { extraPad = 0, minLength = 3 } = config || {};

  let lengthNew = length + extraPad;

  if (lengthNew < minLength) {
    lengthNew = minLength;
  }

  return lengthNew;
};
