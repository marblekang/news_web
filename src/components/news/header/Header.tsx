import Btn from "../../module/Btn";
import Input from "../../module/Input";
import { FlexContainer } from "../../commonStyle";
import useSearchKeyword from "./useSearchKeyword";
import useSearchButton from "./useSearchButton";

const Header = () => {
  const { searchKeyword, setSearchKeyword } = useSearchKeyword();
  const { onClickSearchButton } = useSearchButton({ keyword: searchKeyword });

  return (
    <FlexContainer maxWidth="20rem">
      <Input setValue={setSearchKeyword} value={searchKeyword} />
      <Btn onClick={onClickSearchButton}>검색</Btn>
    </FlexContainer>
  );
};

export default Header;
