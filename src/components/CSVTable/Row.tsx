import { Component, ComponentProps, Index } from 'solid-js';
import { dataLength } from '~/store';
import { pixelCalculator, pixelCalculatorInCh } from '~/utils';
import styles from './style.module.scss';

interface RowProps extends ComponentProps<any> {
  // add props here
}

const totalPixelCalculator = (data: any[] = []) => {
  let lengthNew = data.reduce((partialSum, a) => partialSum + (a + 8), 0);

  if (lengthNew < 3) {
    lengthNew = 3;
  }

  return `${lengthNew}ch`;
};

const Row: Component<RowProps> = (props: RowProps) => {
  return (
    <div
      // Required for items to switch places.
      style={{ ...props.style, 'min-width': `${totalPixelCalculator(dataLength())}` }}
      // Used for keyboard navigation and accessibility.
      tabIndex={props.tabIndex}
      role="listitem"
      class={styles.Row}
    >
      <Index each={props.item}>
        {(item, i) => {
          return (
            <div
              class={styles.Td}
              style={{
                width: dataLength()[i]
                  ? `${pixelCalculatorInCh(dataLength()[i], {
                      extraPad: 8,
                    })}ch`
                  : '3ch',
              }}
            >
              {item}
            </div>
          );
        }}
      </Index>
    </div>
  );
};

export default Row;
