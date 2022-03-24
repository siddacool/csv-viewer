import { Component, ComponentProps, Index } from 'solid-js';
import { dataLength } from '~/store';
import styles from './style.module.scss';

interface RowProps extends ComponentProps<any> {
  // add props here
}

const pixelCalculator = (length = 0) => {
  let lengthNew = 10 * length + 5;

  if (lengthNew < 50) {
    lengthNew = 50;
  }

  return lengthNew;
};

const Row: Component<RowProps> = (props: RowProps) => {
  return (
    <div
      // Required for items to switch places.
      style={props.style}
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
              style={{ width: dataLength()[i] ? `${pixelCalculator(dataLength()[i])}px` : '50px' }}
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
