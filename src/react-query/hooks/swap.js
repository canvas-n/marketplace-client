import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { getMarketNftList } from "@/api/market";
import { getSwapInfo, getSwapHistoryList, swapCETH } from "@/api/swap";

export function useSwapInfo() {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [queryKeys.swap],
    getSwapInfo,
  );

  return {
    swapInfo: data?.data?.change_rate,
    swapInfoLoading: isLoading,
    swapInfoSuccess: isSuccess,
    swapInfoError: isError,
  };
}

export function useSwapHistoryList({ limit, pageParam, offset, tab }) {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [queryKeys.swap, pageParam, tab],
    () =>
      getSwapHistoryList({
        limit,
        pageParam,
        offset,
      }),
  );

  return {
    swapHistoryList: data?.data?.rlist,
    swapHistoryListCnt: data?.data?.cnt,
    swapListLoading: isLoading,
    swapListSuccess: isSuccess,
    swapListError: isError,
  };
}

export function useSwapCETH() {
  const mutation = useMutation(swapCETH);

  return {
    swapCETH: async ({ txid, symbol, amount }) => {
      try {
        const data = await mutation.mutateAsync({ txid, symbol, amount });
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    swapCETHError: mutation.isError,
    swapCETHLoading: mutation.isLoading,
  };
}
