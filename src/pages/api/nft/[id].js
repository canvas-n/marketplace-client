import axios from "axios";
const BASE_URL = process.env.BASE_URL;
// 유저 디테일
async function handleGetNft(req, res) {
  const { id, contract } = req.query;

  if (!id) {
    return res.status(401).json({ err: "err", msg: "입력값을 확인해 주세요." });
  }

  try {
    // dummy data
    // const { data } = await axios.get(`${BASE_URL}/user/${id}`);

    const baseURL = `https://${process.env.NETWORK}.g.alchemy.com/nft/v3/${process.env.API_KEY}/getNFTMetadata?contractAddress=${contract}&tokenId=${id}`;
    const { data } = await axios.get(baseURL, {});
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

//아이디 중복체크
async function handlePostUserId(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(401).json({ err: "err", msg: "입력값을 확인해 주세요." });
  }
  try {
    // const { data } = await axios.post(`${BASE_URL}/user`);
    const data = {
      success: true,
      data: {
        cnt: 0,
      },
      msg: null,
    };

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

async function handleUserId(req, res) {
  // http method 확인해서 분기
  switch (req.method) {
    case "GET":
      return handleGetNft(req, res);
    case "POST":
      return handlePostUserId(req, res);
    default:
      return res.status(500).json({ ...err.response?.data });
  }
}

export default handleUserId;
