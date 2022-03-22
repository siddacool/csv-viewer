import { Component, createSignal } from 'solid-js';
import { darkTheme, darkThemeToggle, clearCsvData } from '~/store';
import { Menu, MenuItem } from '../Menu';
import styles from './style.module.scss';

const HamburgerSettings: Component = () => {
  const [showMenu, setShowMenu] = createSignal(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div class={styles.HamburgerSettings}>
      <button class={styles.HamburgerButton} onClick={handleShowMenu}>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <Menu show={showMenu()} class={styles.HamburgerMenu} onClose={handleCloseMenu}>
        <MenuItem onClick={clearCsvData}>
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
          Open
        </MenuItem>
        <MenuItem>
          <input
            type="checkbox"
            id="dark-theme-mob"
            onChange={darkThemeToggle}
            checked={darkTheme.active}
          />
          <label htmlFor="dark-theme-mob">Dark Theme</label>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HamburgerSettings;
