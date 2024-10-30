import axios from "axios";

// 스왑 정보 불러오기
export async function getSwapInfo() {
  const { data } = await axios.get(`/api/swap`);
  return data;
}

export async function getSwapHistoryList({ limit, pageParam, offset }) {
  const { data } = await axios.get(
    `/api/swap/history?pageParam=${pageParam}&limit=${limit}&offset=${offset}`,
  );
  return data;
}

// 스왑 하기
export async function swapCETH({ txid, symbol, amount }) {
  const { data } = await axios.post(`/api/swap`, { txid, symbol, amount });
  return data;
}
