import { Component } from 'solid-js';
import { addCsvData } from '~/store';
import styles from './style.module.scss';

const PasteBtn: Component = () => {
  const onClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const text = await navigator.clipboard.readText();

      addCsvData(text);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <a href="#" class={styles.PasteBtn} onClick={onClick}>
      Click here to paste data
    </a>
  );
};

export default PasteBtn;
