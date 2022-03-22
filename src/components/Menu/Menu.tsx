import { Component, ComponentProps, Show } from 'solid-js';
import styles from './style.module.scss';

interface ItemProps extends ComponentProps<any> {
  class?: string;
  show?: boolean;
  onClose?: () => void;
}

const Menu: Component<ItemProps> = (props: ItemProps) => {
  return (
    <Show when={props.show}>
      <div class={`${styles.MenuHolder} ${props.class}`}>
        <div class={styles.screen} onClick={props.onClose ? props.onClose : () => {}} />
        <ul class={styles.Menu}>{props.children}</ul>
      </div>
    </Show>
  );
};

export default Menu;
