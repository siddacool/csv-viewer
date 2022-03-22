import { Component } from 'solid-js';
import UploadScreen from '~/components/UploadScreen';
import styles from './style.module.scss';

const OpenView: Component = () => {
  return (
    <div class={styles.view}>
      <UploadScreen />
    </div>
  );
};

export default OpenView;
