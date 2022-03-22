import { Component } from 'solid-js';
import CopyData from './CopyData';
import FileUpload from './FileUpload';
import styles from './style.module.scss';

const UploadScreen: Component = () => {
  return (
    <div class={styles.UploadScreen}>
      <CopyData />
      <h3>or</h3>
      <FileUpload />
    </div>
  );
};

export default UploadScreen;
