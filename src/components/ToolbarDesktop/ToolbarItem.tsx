import { Component, ComponentProps } from 'solid-js';
import styles from './style.module.scss';

interface ItemProps extends ComponentProps<any> {
  onClick: () => void;
}

const ToolbarItem: Component<ItemProps> = (props: ItemProps) => {
  return (
    <button class={styles.ToolbarItem} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ToolbarItem;
