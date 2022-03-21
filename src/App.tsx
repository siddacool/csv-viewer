import { Component, onCleanup, onMount, Show } from 'solid-js';
import { csvData } from './store';
import { pasteDetector } from './utils';
import CsvView from './views/CsvView';
import OpenView from './views/OpenView';

const body = document.querySelector('body');

const App: Component = () => {
  onMount(() => {
    body?.addEventListener('keydown', pasteDetector);
  });

  onCleanup(() => {
    body?.removeEventListener('keydown', pasteDetector);
  });

  return (
    <Show when={csvData.data.length} fallback={<OpenView />}>
      <CsvView />
    </Show>
  );
};

export default App;
