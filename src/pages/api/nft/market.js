import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleMarketNfts(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  /*  const { jwt } = req.cookies;

  if (!jwt) {
    return res.status(401).json({ err: 'Unauthorized', msg: '로그인 후 이용해 주세요.' });
  }*/

  const {
    search,
    category,
    sale,
    priceStart,
    priceEnd,
    sort,
    limit,
    pageParam,
  } = req.query;

  try {
    //const apiKey = "demo";
    const { data } = await axios.get(
      `${BASE_URL}/nft/market?search=${search}&category=${category}&sale=${sale}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&pageParam=${pageParam}`,
      {},
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("err", err);
    return res.status(500).json({ ...err.response?.data });
  }
}

export default handleMarketNfts;
