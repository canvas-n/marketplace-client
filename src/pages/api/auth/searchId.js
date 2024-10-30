import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

async function handleSearchId(req, res) {
  const { name, phone } = req.body;

  try {
    const { data } = await axios.post(`${BASE_URL}/auth/findId`, {
      name,
      phone,
    });
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}
export default handleSearchId;
