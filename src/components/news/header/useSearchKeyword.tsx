import { useState } from "react";

const useSearchKeyword = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return { searchKeyword, setSearchKeyword };
};

export default useSearchKeyword;
