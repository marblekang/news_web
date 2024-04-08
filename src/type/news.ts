export interface onClickSearchButtonProps {
  keyword: string;
  setGlobalKeyword: (payload: string) => void;
}
export interface ArticleType {
  description: string;
  link: string;
  originalLink: string;
  pubDate: string;
  title: string;
}

export interface ArticleTypeWithBookmark extends ArticleType {
  marked: boolean;
}
