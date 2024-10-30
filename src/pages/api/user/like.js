import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleUserNftLike(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  const { jwt } = req.cookies;
  const {  search,
    category,
    sale,
    priceStart,
    priceEnd,
    sort,
    limit,
    pageParam,
    offset } = req.query;

  if (!jwt) {
    return res
      .status(401)
      .json({ err: "Unauthorized", msg: "로그인 후 이용해 주세요." });
  }

  try {
    const { data } = await axios.get(
      `${BASE_URL}/user/getLikeList?search=${search}&category=${category}&sale=${sale}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&pageParam=${pageParam}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

export default handleUserNftLike;
