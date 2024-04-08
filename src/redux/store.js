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
  initialState: { isDark: true },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDark = action.payload;
    },
  },
});
const selectedMailBoxSlice = createSlice({
  name: "selectedMailData",
  initialState: {
    id: 0,
    fromName: "",
    fromEmail: "",
    toName: "",
    toEmail: "",
    cc: null,
    bcc: null,
    threadId: 1,
    messageId: "",
    inReplyTo: "",
    references: "",
    subject: "",
    body: "",
    isRead: true,
    folder: "",
    uid: 0,
    sentAt: "",
    archivedAt: null,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
  },
  reducers: {
    setSelectedMailData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const rootReducer = {
  tabSlice: activeTabSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
  selectedMailBoxSlice: selectedMailBoxSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setTab } = activeTabSlice.actions;
export const { setDarkMode } = darkModeSlice.actions;
export const { setSelectedMailData } = selectedMailBoxSlice.actions;
export default store;
