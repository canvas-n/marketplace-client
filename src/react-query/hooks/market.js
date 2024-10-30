import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { getMarketNftList, setMarketplaceLike } from "@/api/market";
import { buyNft } from "@/api/nft";

// 현재 유저 가져오기

export function useMarketNfts({
  search,
  category,
  sale,
  priceStart,
  priceEnd,
  sort,
  limit,
  pageParam,
  sell_status,
  user_seq,
  except_mk_seq,
  router,
}) {
  const { isLoading, isSuccess, isError, data, refetch } = useQuery(
    [
      queryKeys.market,
      search,
      pageParam,
      priceStart,
      priceEnd,
      category,
      sort,
      sell_status,
      user_seq,
      except_mk_seq,
      router,
    ],
    () =>
      getMarketNftList({
        search,
        category,
        sale,
        priceStart,
        priceEnd,
        sort,
        limit,
        pageParam,
        sell_status,
        user_seq,
        except_mk_seq,
      }),
  );

  return {
    marketNfts: data?.data?.marketList,
    marketNftsCnt: data?.data?.cnt,
    cnt_N: data?.data?.cnt_N,
    cnt_S: data?.data?.cnt_S,
    marketNftsLoading: isLoading,
    marketNftsSuccess: isSuccess,
    marketNftsError: isError,
    refetch,
  };
}

export function useNftLike() {
  const mutation = useMutation(setMarketplaceLike);

  return {
    nftLike: async ({ mk_seq }) => {
      try {
        const data = await mutation.mutateAsync({ mk_seq });
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    phoneCheckError: mutation.isError,
    phoneCheckLoading: mutation.isLoading,
  };
}
