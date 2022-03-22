import { Component } from 'solid-js';
import CSVTable from '~/components/CSVTable';
import ToolbarDesktop from '~/components/ToolbarDesktop';
import styles from './style.module.scss';

const CsvView: Component = () => {
  return (
    <div class={styles.CsvView}>
      <ToolbarDesktop />
      <CSVTable />
    </div>
  );
};

export default CsvView;
