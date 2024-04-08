import useNewsStore from "../../../store/useNewsStore";
import useCustomQueryClient from "../../useCustomQueryClient";
import { ReactQueryKey } from "../../../type/queryKey";
interface Props {
  keyword: string;
}
const useSearchButton = ({ keyword }: Props) => {
  const { globalKeyword, setGlobalKeyword } = useNewsStore();
  const { invalidateQuery } = useCustomQueryClient();
  const validateKeyword = () => {
    if (globalKeyword === keyword) {
      invalidateQuery({ queries: [ReactQueryKey.News] });
    }
  };
  const onClickSearchButton = () => {
    validateKeyword();
    setGlobalKeyword(keyword);
  };
  return { onClickSearchButton };
};

export default useSearchButton;
