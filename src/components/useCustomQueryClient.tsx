import { useQueryClient } from "@tanstack/react-query";
import { ReactQueryKey } from "../type/queryKey";

const useCustomQueryClient = () => {
  const queryClient = useQueryClient();
  interface InvalidateQueryParams {
    queries: ReactQueryKey[];
  }
  const invalidateQuery = ({ queries }: InvalidateQueryParams) => {
    queryClient.invalidateQueries({ queryKey: [...queries] });
  };
  return { invalidateQuery };
};

export default useCustomQueryClient;
