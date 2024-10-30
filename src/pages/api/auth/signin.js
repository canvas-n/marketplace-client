import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 로그인
async function handleSignIn(req, res) {
  let { address } = req.body;

  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, {
      address,
      password: address,
    });

    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", data?.data?.token, {
          httpOnly: true,
          path: "/api",
            sameSite: "none",
            secure:true,
            expire:0,
        }),
      )
      .json(data);
  } catch (err) {
    res
      .status(401)
      .json({ err: err?.response?.data, msg: err?.response?.data?.msg });
  }
}
export default handleSignIn;
