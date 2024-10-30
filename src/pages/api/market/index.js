import axios from "axios";
import cookie from "cookie";
const BASE_URL = process.env.API_URL;

// 유저 정보 받아오기
async function handleMarketList(req, res) {
  // 쿠키에 저장 되어 있는 jwt 토큰 정보 가져온다
  const { jwt } = req.cookies;

  const {
    search,
    category,
    sale,
    priceStart,
    priceEnd,
    sort,
    limit,
    pageParam,
    sell_status,
    user_seq,
    except_mk_seq,
  } = req.query;

  try {
    const { data } = await axios.get(
      `${BASE_URL}/market?search=${search}&category=${category}&sale=${sale}&priceStart=${priceStart}&priceEnd=${priceEnd}&sort=${sort}&limit=${limit}&pageParam=${pageParam}&sell_status=${sell_status}&user_seq=${user_seq}&except_mk_seq=${except_mk_seq}`,
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

export default handleMarketList;
