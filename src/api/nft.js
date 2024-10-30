import axios from "axios";

// 유저디테일 정보 불러오기
export async function getNfts({ address }) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/nft?address=${address}`);

  return data;
}

export async function getNft({ contract, tokenId }) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/nft/${tokenId}?contract=${contract}`);

  return data;
}

export async function sellNft(params) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/nft/sell`, params);

  return data;
}

export async function buyNft(params) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/nft/buy`, params);
  return data;
}

export async function getRecommNft() {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/nft/recomm`);

  return data;
}

export async function getNftDetail({ contract, tokenId }) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(
    `/api/nft/detail?token_id=${tokenId}&contract=${contract}`,
  );

  return data;
}

export async function cancelSellNft({ contract, tokenId }) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/nft/cancel`, { contract, tokenId });

  return data;
}
