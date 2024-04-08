import { setLocalStorage } from "../../util/localStorage";
import { LocalStorageKey } from "../../type/localStorageKey";
import { useEffect } from "react";
import useNewsStore from "../../store/useNewsStore";
import { ArticleTypeWithBookmark } from "../../type/news";

const useBookMark = () => {
  const { bookmarkList, setBookmarkList } = useNewsStore();
  const onChangeBookmarkList = ({
    article,
    type,
  }: {
    article: ArticleTypeWithBookmark;
    type: "add" | "remove";
  }) => {
    if (type === "add") {
      const set = new Set([...bookmarkList, { ...article, marked: true }]);
      setBookmarkList(Array.from(set));
    } else {
      const filteredList = bookmarkList.filter(
        (item: ArticleTypeWithBookmark) => {
          return item.link !== article.link;
        }
      );
      setBookmarkList(filteredList);
    }
  };

  useEffect(() => {
    if (bookmarkList && bookmarkList.length) {
      setLocalStorage({ key: LocalStorageKey.Bookmark, data: bookmarkList });
    }
  }, [bookmarkList]);

  return { onChangeBookmarkList };
};

export default useBookMark;
