import { Component, ComponentProps, Index } from 'solid-js';
import { dataLength } from '~/store';
import { pixelCalculator } from '~/utils';
import styles from './style.module.scss';

interface RowProps extends ComponentProps<any> {
  // add props here
}

const totalPixelCalculator = (data: any[] = []) => {
  let lengthNew = 10 * data.reduce((partialSum, a) => partialSum + (a + 5), 0);

  if (lengthNew < 50) {
    lengthNew = 50;
  }

  return `${lengthNew}px`;
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
                  ? `${pixelCalculator(dataLength()[i], {
                      base: 10,
                      extraPad: 0,
                      minLength: 50,
                    })}px`
                  : '50px',
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
