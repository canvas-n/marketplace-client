// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const cookie = require("cookie");
const BASE_URL = process.env.API_URL;

export default async function handleAccountCheck(req, res) {
  const { account } = req.body;

  if (!account) {
    return res.status(401).json({ err: "err", msg: "이메일을 확인해 주세요." });
  }
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/checkAccount`, {
      account,
    });
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}
