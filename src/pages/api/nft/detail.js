import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleNftDetail(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  const { jwt } = req.cookies;
  const { token_id, contract } = req.query;

  if (jwt) {
    try {
      const baseURL = `https://${process.env.NETWORK}.g.alchemy.com/nft/v3/${process.env.API_KEY}/getOwnersForNFT?contractAddress=${contract}&tokenId=${token_id}`;
      const {
        data: { owners },
      } = await axios.get(baseURL, {});

      //const apiKey = "demo";
      const { data } = await axios.get(
        `${BASE_URL}/nft/detail?token_id=${token_id}&contract=${contract}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );

      // owners[0].toLowerCase() 현재 실소유자
      // data?.data?.nftDetail?.sell_addr.toLowerCase() DB 에 있는 판매자 주소

      console.log(' data?.data?.nftDetail?.sell_addr.toLowerCase()',  data?.data?.nftDetail?.sell_addr.toLowerCase());
      console.log('owners[0].toLowerCase()',  owners[0].toLowerCase());
      if (
        data?.data?.nftDetail?.sell_addr.toLowerCase() !==
        owners[0].toLowerCase()
      ) {

        // 우리 api 호출
        try {
          console.log('test', data?.data?.nftDetail?.seq );
          const marketCancelResponse = await axios.post(
              `${BASE_URL}/market/setMarketplaceCancel`,
              { mk_seq: data?.data?.nftDetail?.seq },
              {},
          );
          res.status(200).json(marketCancelResponse.data);
        } catch (err) {
          return res.status(500).json({ ...err.response?.data });
        }
      }
      res.status(200).json(data);
    } catch (err) {
      console.error("err", err);
      return res.status(500).json({ ...err.response?.data });
    }
  } else {
    try {
      const baseURL = `https://${process.env.NETWORK}.g.alchemy.com/nft/v3/${process.env.API_KEY}/getOwnersForNFT?contractAddress=${contract}&tokenId=${token_id}`;
      const {
        data: { owners },
      } = await axios.get(baseURL, {});

      //const apiKey = "demo";
      const { data } = await axios.get(
        `${BASE_URL}/nft/detail?token_id=${token_id}&contract=${contract}`,
        {},
      );

      if (
        data?.data?.nftDetail?.sell_addr.toLowerCase() !==
        owners[0].toLowerCase()
      ) {
        // 우리 api 호출
        const marketCancelResponse = await axios.post(
            `${BASE_URL}/market/setMarketplaceCancel`,
            { mk_seq: data?.data?.nftDetail?.seq },
            {},
        );
        res.status(200).json(marketCancelResponse.data);
      }

      res.status(200).json(data);
    } catch (err) {
      console.error("err", err);
      return res.status(500).json({ ...err.response?.data });
    }
  }
}

export default handleNftDetail;
