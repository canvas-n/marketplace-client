import axios from "axios";

// 유저디테일 정보 불러오기
export async function getUser() {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/user`);

  return data;
}

// 유저nft 정보 불러오기
export async function getUserNft() {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/user/nft`);

  return data;
}

export async function getHistoryList({
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
  const { data } = await axios.get(
    `/api/user/history?search=${search}&category=${category}&sale=${sale}&pageParam=${pageParam}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&offset=${offset}`,
  );

  return data;
}

export async function getLikeList({
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
  const { data } = await axios.get(
    `/api/user/like?search=${search}&category=${category}&sale=${sale}&pageParam=${pageParam}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&offset=${offset}`,
  );

  return data;
}
