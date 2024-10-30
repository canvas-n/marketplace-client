import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleGetNfts(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  /*  const { jwt } = req.cookies;

  if (!jwt) {
    return res.status(401).json({ err: 'Unauthorized', msg: '로그인 후 이용해 주세요.' });
  }*/

  try {
    //const apiKey = "demo";
    const baseURL = `https://${process.env.NETWORK}.g.alchemy.com/nft/v3/${process.env.API_KEY}/getNFTsForOwner/`;
    // Replace with the wallet address you want to query for NFTs:
    const ownerAddr = req.query.address;
    // const pageKey = req.query.pkey;
    //const pageSize = 12;
    const tokenType = 'ERC721';

    const { data } = await axios.get(
      `${baseURL}?owner=${ownerAddr}&tokenType=${tokenType}&orderBy=transferTime`,
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("err", err);
    return res.status(500).json({ ...err.response?.data });
  }
}

async function handleNfts(req, res) {
  // http method 확인해서 분기
  switch (req.method) {
    case "GET":
      return handleGetNfts(req, res);

    default:
      res.status(405).end();
  }
}

export default handleNfts;
