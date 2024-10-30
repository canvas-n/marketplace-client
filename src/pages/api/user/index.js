import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleGetUser(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  const { jwt } = req.cookies;

  if (!jwt) {
    return res
      .status(401)
      .json({ err: "Unauthorized", msg: "로그인 후 이용해 주세요." });
  }

  try {
    const { data } = await axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

/*
// 로그인
async function handlePostUser(req, res) {
  const { email, password, idCheck } = req.body;

  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
      idCheck,
    });

    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", data?.data?.token, {
          httpOnly: true,
          path: "/api",


        })
      )
      .json(data);
  } catch (err) {
    res.status(401).end();
  }
}
*/

async function handleUser(req, res) {
  // http method 확인해서 분기
  switch (req.method) {
    case "GET":
      return handleGetUser(req, res);

    default:
      res.status(405).end();
  }
}

export default handleUser;
