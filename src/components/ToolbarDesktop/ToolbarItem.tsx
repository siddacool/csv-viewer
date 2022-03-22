import { Component, ComponentProps, JSX } from 'solid-js';
import styles from './style.module.scss';

interface ItemProps extends ComponentProps<any> {
  onClick: () => void;
  icon?: JSX.Element;
}

const ToolbarItem: Component<ItemProps> = (props: ItemProps) => {
  return (
    <button class={styles.ToolbarItem} onClick={props.onClick}>
      <section>
        {props.icon}
        {props.children}
      </section>
    </button>
  );
};

export default ToolbarItem;
