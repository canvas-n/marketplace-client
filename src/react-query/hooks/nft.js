import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import {
  buyNft,
  cancelSellNft,
  getNft,
  getNftDetail,
  getNfts,
  getRecommNft,
  sellNft,
} from "@/api/nft";
import { phoneCheck } from "@/api/auth";

// 현재 유저 가져오기
export function useNfts({ page, address }) {
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, data, refetch } = useQuery(
    [queryKeys.nfts, page],
    () => getNfts({ address, page }),
    { enabled: !!address },
  );

  queryClient.setQueryData([queryKeys.address], address);
  //queryClient.setQueryData([queryKeys.pkey], pkey);

  return {
    nfts: data?.ownedNfts,
    totalCount: data?.totalCount,
    pageKey: data?.pageKey,
    isNftsLoading: isLoading,
    isNftsSuccess: isSuccess,
    isNftsError: isError,
  };
}

export function useNft({ contract, tokenId }) {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [queryKeys.nft, contract, tokenId],
    () => getNft({ contract, tokenId }),
    { enabled: !!tokenId },
  );

  return {
    nft: data,
    isNftLoading: isLoading,
    isNftSuccess: isSuccess,
    isNftError: isError,
  };
}
export function useSellNft() {
  const mutation = useMutation(sellNft);

  return {
    sellNftToken: async ({
      amount,
      date,
      category,
      description,
      nft,
      txid,
    }) => {
      try {
        const data = await mutation.mutateAsync({
          amount,
          date,
          category,
          description,
          nft,
          txid,
        });

        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    sellNftError: mutation.isError,
    sellNftLoading: mutation.isLoading,
  };
}

export function useBuyNft() {
  const mutation = useMutation(buyNft);

  return {
    buyNftToken: async ({ contract, tokenId }) => {
      try {
        const data = await mutation.mutateAsync({ contract, tokenId });
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    phoneCheckError: mutation.isError,
    phoneCheckLoading: mutation.isLoading,
  };
}

export function useRecommNfts() {
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, data } = useQuery(
    [queryKeys.recomm],
    getRecommNft,
  );

  return {
    recommNfts: data?.data?.recommList,
    recommNftsLoading: isLoading,
    recommNftsSuccess: isSuccess,
    recommNftsError: isError,
  };
}

export function useNftDetail({ contract, tokenId }) {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [queryKeys.nft, contract, tokenId],
    () => getNftDetail({ contract, tokenId }),
    { enabled: !!tokenId && !!contract },
  );

  return {
    nftDetail: data?.data?.nftDetail,
    nftReturn : data?.data?.ret,
    nftDetailLoading: isLoading,
    nftDetailSuccess: isSuccess,
    nftDetailError: isError,
  };
}

export function useCancelSellNft() {
  const mutation = useMutation(cancelSellNft);

  return {
    cancelSellNft: async ({ contract, tokenId }) => {
      try {
        const data = await mutation.mutateAsync({ contract, tokenId });
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    cancelSellError: mutation.isError,
    cancelSellLoading: mutation.isLoading,
  };
}
