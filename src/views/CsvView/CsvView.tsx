import { Component } from 'solid-js';
import CSVTable from '~/components/CSVTable';
import styles from './style.module.scss';

const CsvView: Component = () => {
  return (
    <div class={styles.CsvView}>
      <CSVTable />
    </div>
  );
};

export default CsvView;
