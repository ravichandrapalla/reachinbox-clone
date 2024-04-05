/* eslint-disable no-unused-vars */
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../redux/store";

export function DarkModeToggle() {
  const dispatch = useDispatch();
  const isDark = useSelector((store) => store?.darkModeSlice?.isDark);
  const [isDarkMode, setIsDarkMode] = useState(isDark);
  console.log("data is ", isDark);
  return (
    <div
      className={`dark-mode-toggle ${isDark ? "dark" : "light"}`}
      onClick={() => dispatch(setDarkMode(!isDark))}
    >
      <div className="slider">
        {!isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
      </div>
    </div>
  );
}
