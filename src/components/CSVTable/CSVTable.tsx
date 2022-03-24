import { Component } from 'solid-js';
import { csvData } from '~/store';
import styles from './style.module.scss';
import { VirtualContainer } from '@minht11/solid-virtual-container';
import Row from './Row';

const CSVTable: Component = () => {
  let scrollTargetElement!: HTMLDivElement;

  return (
    <div
      style={{ overflow: 'auto' }}
      ref={scrollTargetElement}
      class={styles.VirtualContainerHolder}
    >
      <VirtualContainer
        items={csvData.data}
        scrollTarget={scrollTargetElement}
        // Define size you wish your list items to take.
        itemSize={{ height: 28 }}
      >
        {Row}
      </VirtualContainer>
    </div>
  );
};

export default CSVTable;
