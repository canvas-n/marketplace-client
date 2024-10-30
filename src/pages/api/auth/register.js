import axios from "axios";
const cookie = require("cookie");

const BASE_URL = process.env.API_URL;

// 회원가입
async function handleRegister(req, res) {
  const {
    email,
    password,
    ubirthday,
    name,
    nation,
    postcode,
    address1,
    address2,
    bank,
    account,
    accountName,
    newsletter,
    subSocial,
    subSms,
    subEmail,
    fullPhone,
    gender,
    serviceTerm,
    privacyUse,
    privacyTerm,
    privacySupply,
    userType,
  } = req.body;

  const param = {
    uid: email,
    upw: password,
    ubirthday,
    uname: name,
    phone_country: nation,
    uphone: fullPhone,
    uzip: postcode,
    uaddr1: address1,
    uaddr2: address2,
    usex: gender,
    bank_name: bank,
    bank_num: account,
    bank_account: accountName,
    news_sub: newsletter,

    service_agree: serviceTerm,
    personal1_agree: privacyUse,
    personal2_agree: privacyTerm,
    personal3_agree: privacySupply,
    sns_agree : subSocial,
    sms_agree: subSms,
    email_agree: subEmail,
    utype: userType,
  };

  try {
    const { data } = await axios.post(
      `${BASE_URL}/registeration/user_reg`,
      param
    );
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ ...err.response?.data });
  }
}

export default handleRegister;
