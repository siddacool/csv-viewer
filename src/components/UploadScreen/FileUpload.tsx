import { Component } from 'solid-js';
import { addCsvData } from '~/store';
import styles from './style.module.scss';

const FileUpload: Component = () => {
  const onFileUpload = async (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      addCsvData(reader.result as string);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div class={styles.FileUpload}>
      <input type="file" accept=".csv, text/plain" id="csv-upload" onChange={onFileUpload} />
      <label for="csv-upload">Upload</label>
    </div>
  );
};

export default FileUpload;
