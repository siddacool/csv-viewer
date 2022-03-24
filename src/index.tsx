/* @refresh reload */
import { render } from 'solid-js/web';
import { registerSW } from 'virtual:pwa-register';

import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });
}

render(() => <App />, document.getElementById('root') as HTMLElement);
