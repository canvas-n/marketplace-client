import axios from "axios";

// 유저디테일 정보 불러오기
export async function getMarketNftList({
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
}) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(
    `/api/market?search=${search}&category=${category}&sale=${sale}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&pageParam=${pageParam}&sell_status=${sell_status}&user_seq=${user_seq}&except_mk_seq=${except_mk_seq}`,
  );

  return data;
}



export async function setMarketplaceLike({ mk_seq }) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/market/like`, { mk_seq });

  return data;
}
