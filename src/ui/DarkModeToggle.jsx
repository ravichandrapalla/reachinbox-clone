/* eslint-disable no-unused-vars */
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { useState } from "react";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}
      onClick={() => setIsDarkMode((darkmode) => !darkmode)}
    >
      <div className="slider">
        {!isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      </div>
    </div>
  );
}
