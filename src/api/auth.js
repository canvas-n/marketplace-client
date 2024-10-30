import axios from "axios";

// 로그인
export async function logIn(params) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/auth/signin`, params);

  return data;
}

export async function logout() {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.get(`/api/auth/signout`);

  return data;
}

// 아이디 중복검사
export async function idCheck({ id }) {
  const { data } = await axios.post(`/api/auth/account`, { account: id });

  return data;
}

// 휴대폰 중복검사
export async function phoneCheck({ name, phone }) {
  const { data } = await axios.post(`/api/auth/phone`, { name, phone });
  return data;
}

// 회원가입
export async function register(params) {
  // front 의 /api/nft/[contract].js 를 호출한다
  const { data } = await axios.post(`/api/auth/register`, params);

  return data;
}

// 아이디 찾기
export async function searchId(params) {
  const { data } = await axios.post(`/api/auth/searchId`, params);
  return data;
}

// 비밀번호 찾기
export async function searchPw(params) {
  const { data } = await axios.post(`/api/auth/searchPw`, params);
  return data;
}
