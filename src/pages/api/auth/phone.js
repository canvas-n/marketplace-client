// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const cookie = require("cookie");
const BASE_URL = process.env.API_URL;

export default async function handlePhoneCheck(req, res) {
  const { name, phone } = req.body;

  if (!name) {
    return res.status(401).json({ err: "err", msg: "이름을 확인해 주세요." });
  }

  if (!phone) {
    return res
      .status(401)
      .json({ err: "err", msg: "휴대폰 번호를 확인해 주세요." });
  }

  try {
    const { data } = await axios.post(`${BASE_URL}/auth/checkPhone`, {
      name,
      phone,
    });
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}
