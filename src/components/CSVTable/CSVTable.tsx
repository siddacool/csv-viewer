import { Component, For } from 'solid-js';
import { csvData } from '~/store';
import styles from './style.module.scss';

const CSVTable: Component = () => {
  return (
    <div class={styles.CSVTable}>
      <table>
        <tbody>
          <For each={csvData.data}>
            {(csv) => (
              <tr>
                <For each={csv}>
                  {(csv2) => {
                    return <td>{csv2}</td>;
                  }}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default CSVTable;
