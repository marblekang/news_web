import { create } from "zustand";
import { getLocalStorage } from "../util/localStorage";
import { LocalStorageKey } from "../type/localStorageKey";
import { ArticleTypeWithBookmark } from "../type/news";
interface NewsState {
  globalKeyword: string;
  setGlobalKeyword: (payload: string) => void;
  isSearchBtnClick: boolean;
  setIsSearchBtnClick: (payload: boolean) => void;
  bookmarkList: ArticleTypeWithBookmark[];
  setBookmarkList: (payload: ArticleTypeWithBookmark[]) => void;
}
const useNewsStore = create<NewsState>((set) => ({
  globalKeyword: "",
  setGlobalKeyword: (payload) => set({ globalKeyword: payload }),
  isSearchBtnClick: false,
  setIsSearchBtnClick: (payload) => set({ isSearchBtnClick: payload }),
  bookmarkList: getLocalStorage({
    key: LocalStorageKey.Bookmark,
    fallbackData: [],
  }),
  setBookmarkList: (payload) => set({ bookmarkList: [...payload] }),
}));

export default useNewsStore;
