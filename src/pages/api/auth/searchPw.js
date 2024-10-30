import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

async function handleSearchPw(req, res) {
  const { name, email } = req.body;

  try {
    const { data } = await axios.post(`${BASE_URL}/auth/findPassword`, {
      name,
      email,
    });

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}
export default handleSearchPw;
