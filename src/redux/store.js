import { configureStore, createSlice } from "@reduxjs/toolkit";

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: { tab: "oneBox" },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { isDark: false },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

const rootReducer = {
  tabSlice: activeTabSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setTab } = activeTabSlice.actions;
export const { setDarkMode } = darkModeSlice.actions;

export default store;
