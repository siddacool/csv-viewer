import { Component } from 'solid-js';
import PasteBtn from './PasteBtn';
import styles from './style.module.scss';

const CopyData: Component = () => {
  return (
    <h2 class={styles.CopyData}>
      <span class={styles.CopyMsg}>Ctrl + v (paste data)</span>
      <PasteBtn />
    </h2>
  );
};

export default CopyData;
