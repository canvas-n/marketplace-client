import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import {
  getHistoryList,
  getLikeList,
  getUser,
  getUserNft,
  idCheck,
  logIn,
  register,
} from "@/api/user";
import axios from "axios";

// 현재 유저 가져오기
export function useUser(address = "") {
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, data, refetch } = useQuery(
    [queryKeys.user, address],
    getUser,
    { retry: 2 },
  );

  queryClient.setQueryData([queryKeys.user], data?.user);

  return {
    user: data?.data?.user,
    isUserLoading: isLoading,
    isUserSuccess: isSuccess,
    isUserError: isError,
    isUserRefetch: refetch,
  };
}

// 유저가 보유한 NFT 리스트
export function useUserNft() {
  const { isLoading, isSuccess, isError, data, refetch } = useQuery(
    [queryKeys.nft, "nft"],
    getUserNft,
  );

  return {
    userNft: data?.data?.myNftList,
    userNftLoading: isLoading,
    userNftSuccess: isSuccess,
    userNftError: isError,
    userNftRefetch: refetch,
  };
}
// 유저가 보유한 NFT 리스트
export function useUserNftHistory({
  search,
  category,
  sale,
  priceStart,
  priceEnd,
  sort,
  limit,
  pageParam,
  offset,
}) {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [
      queryKeys.history,

      search,
      category,
      sale,
      priceStart,
      priceEnd,
      sort,
      limit,
      pageParam,
      offset,
    ],
    () =>
      getHistoryList({
        search,
        category,
        sale,
        priceStart,
        priceEnd,
        sort,
        limit,
        pageParam,
        offset,
      }),
  );

  return {
    userNftHistory: data?.data?.rlist,
    userHistoryCnt: data?.data?.cnt,
    userNftLoading: isLoading,
    userNftSuccess: isSuccess,
    userNftError: isError,
  };
}

export function useUserLikeList({
  search,
  category,
  sale,
  priceStart,
  priceEnd,
  sort,
  limit,
  pageParam,
  offset,
}) {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [
      queryKeys.like,
      search,
      category,
      sale,
      priceStart,
      priceEnd,
      sort,
      limit,
      pageParam,
      offset,
    ],
    () =>
      getLikeList({
        search,
        category,
        sale,
        priceStart,
        priceEnd,
        sort,
        limit,
        pageParam,
        offset,
      }),
  );

  return {
    userLikeList: data?.data?.rlist,
    userLikeCnt: data?.data?.cnt,
    userNftLoading: isLoading,
    userNftSuccess: isSuccess,
    userNftError: isError,
  };
}
