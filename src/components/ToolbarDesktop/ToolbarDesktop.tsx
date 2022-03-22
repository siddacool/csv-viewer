import { Component, createSignal } from 'solid-js';
import Item from './ToolbarItem';
import styles from './style.module.scss';
import { clearCsvData, darkTheme, darkThemeToggle } from '~/store';
import { Menu, MenuItem } from '../Menu';

const ToolbarDesktop: Component = () => {
  const [showSettingsMenu, setShowSettingsMenu] = createSignal(false);

  const handleShowSetiingsMenu = () => {
    setShowSettingsMenu(true);
  };

  const handleCloseSetiingsMenu = () => {
    setShowSettingsMenu(false);
  };

  return (
    <div class={styles.ToolbarDesktop}>
      <Item
        onClick={clearCsvData}
        icon={
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
        }
      >
        Open
      </Item>
      <Item
        onClick={handleShowSetiingsMenu}
        icon={
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        }
      >
        Settings
      </Item>
      <Menu class={styles.SettingsMenu} show={showSettingsMenu()} onClose={handleCloseSetiingsMenu}>
        <MenuItem>
          <input
            type="checkbox"
            id="dark-theme"
            onChange={darkThemeToggle}
            checked={darkTheme.active}
          />
          <label htmlFor="dark-theme">Dark Theme</label>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ToolbarDesktop;
