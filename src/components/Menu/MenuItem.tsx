import { Component, ComponentProps } from 'solid-js';
import styles from './style.module.scss';

interface ItemProps extends ComponentProps<any> {
  onClick?: () => void;
}

const MenuItem: Component<ItemProps> = (props: ItemProps) => {
  return (
    <li class={styles.MenuItem} onClick={props.onClick ? props.onClick : () => {}}>
      {props.children}
    </li>
  );
};

export default MenuItem;
