import axios from "axios";
const BASE_URL = process.env.BASE_URL;
// 유저 디테일
async function handleGetUserId(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(401).json({ err: "err", msg: "입력값을 확인해 주세요." });
  }

  try {
    // dummy data
    // const { data } = await axios.get(`${BASE_URL}/user/${id}`);
    const data = {
      success: true,
      data: {
        uid: "",
        uname: "",
        phone_country: "",
        uphone: "",
        ubirthday: "",
        usex: "",
        uzip: "",
        uaddr1: "",
        uaddr2: "",
        ulevel: "",
        upoint: "",
        bank_name: "",
        bank_num: "",
        bank_account: "",
        sanctions_enddttm: "",
        curr_state: "",
      },
      msg: "",
    };

    res.status(200).json(data);
  } catch (err) {
    res.status(401).end();
  }
}

//아이디 중복체크
async function handlePostUserId(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(401).json({ err: "err", msg: "입력값을 확인해 주세요." });
  }
  try {
    // const { data } = await axios.post(`${BASE_URL}/user`);
    const data = {
      success: true,
      data: {
        cnt: 0,
      },
      msg: null,
    };

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

async function handleUserId(req, res) {
  // http method 확인해서 분기
  switch (req.method) {
    case "GET":
      return handleGetUserId(req, res);
    case "POST":
      return handlePostUserId(req, res);
    default:
      res.status(405).end();
  }
}

export default handleUserId;
