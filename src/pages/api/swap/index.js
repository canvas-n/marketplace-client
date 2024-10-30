import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleGETSwap(req, res) {
  const { jwt } = req.cookies;

  if (!jwt) {
    return res
      .status(401)
      .json({ err: "Unauthorized", msg: "로그인 후 이용해 주세요." });
  }

  try {
    const { data } = await axios.get(`${BASE_URL}/swap`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    res.status(200).json(data);
  } catch (err) {
    console.error("err", err);
    return res.status(500).json({ ...err.response?.data });
  }
}

async function handlePostSwap(req, res) {
  const { jwt } = req.cookies;

  if (!jwt) {
    return res
      .status(401)
      .json({ err: "Unauthorized", msg: "로그인 후 이용해 주세요." });
  }

  const { txid, symbol, amount } = req.body;

  try {
    const { data } = await axios.post(
      `${BASE_URL}/swap`,
      {
        txid,
        symbol,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("err", err);
    return res.status(500).json({ ...err.response?.data });
  }
}

async function handleSwap(req, res) {
  // http method 확인해서 분기
  switch (req.method) {
    case "GET":
      return handleGETSwap(req, res);
    case "POST":
      return handlePostSwap(req, res);

    default:
      res.status(405).end();
  }
}

export default handleSwap;
