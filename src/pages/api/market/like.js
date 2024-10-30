// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const cookie = require("cookie");
const BASE_URL = process.env.API_URL;

export default async function handleNftLike(req, res) {
  const { mk_seq } = req.body;

  const { jwt } = req.cookies;

  if (!jwt) {
    return res
      .status(401)
      .json({ err: "Unauthorized", msg: "로그인 후 이용해 주세요." });
  }

  try {
    const { data } = await axios.post(
      `${BASE_URL}/market/setMarketplaceLike`,
      { mk_seq },
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
