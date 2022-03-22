import { Component } from 'solid-js';
import styles from './style.module.scss';

const FileUpload: Component = () => {
  return (
    <div class={styles.FileUpload}>
      <input type="file" accept=".csv, text/plain" id="csv-upload" />
      <label for="csv-upload">Upload</label>
    </div>
  );
};

export default FileUpload;
