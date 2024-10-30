export function stripNFT(nft) {
  return {
    id: nft.id,
    title: nft.title,
  };
}

// 은행
// 환불계좌 은행
export const bankOptions = [
  "새마을금고",
  "국민은행",
  "농협은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "기업은행",
  "산업은행",
  "SC제일은행",
  "수협은행",
  "시티은행",
  "우체국",
  "신협",
  "카카오뱅크",
  "토스뱅크",
  "산림조합",
  "케이뱅크",
  "부산은행",
  "대구은행",
  "경남은행",
  "광주은행",
  "전북은행",
  "제주은행",
  "저축은행",
  "도이치은행",
  "중국은행",
  "중국공상은행",
  "중국건설은행",
];

/* 금액 한글배열 */
let nString = [];
nString[0] = "";
nString[1] = "일";
nString[2] = "이";
nString[3] = "삼";
nString[4] = "사";
nString[5] = "오";
nString[6] = "육";
nString[7] = "칠";
nString[8] = "팔";
nString[9] = "구";

/* 금액단위 한글배열 */
let nbString = [];
nbString[0] = "";
nbString[1] = "";
nbString[2] = "십";
nbString[3] = "백";
nbString[4] = "천";
nbString[5] = "만";
nbString[6] = "십";
nbString[7] = "백";
nbString[8] = "천";
nbString[9] = "억";
nbString[10] = "십";
nbString[11] = "백";
nbString[12] = "천";
nbString[13] = "조";
nbString[14] = "십";
nbString[15] = "백";
nbString[16] = "천";


export const numberToKorean = (obj) => {
  var str = obj.toString();
  var strCode = "";
  var codeStr = "";
  var nHan = "";
  var cnt = 0;
  /* 천조이상이면 */
  if (str.length > 16) {
    return false;
  }
  /* 뒷자리부터 루프 */
  for (var i = str.length; i > 0; i--) {
    strCode = str.charCodeAt(i - 1);
    if (strCode >= 48 && strCode <= 57) {
      cnt++; // 단위계산을 위해 카운팅
      codeStr = Number(String.fromCharCode(strCode)); // Number형으로
      if (codeStr != 1) {
        if (codeStr == 0) {
          if (cnt / 5 == 1) { // 만단위표현
            nHan = nbString[5] + nHan;
          } else if (cnt / 9 == 1) { // 억단위표현
            nHan = nbString[9] + nHan;
          } else if (cnt / 13 == 1) { // 조단위 표현
            nHan = nbString[13] + nHan;
          }
        } else {
          /* 0이 아니면 입력값에 한글과 단위 */
          nHan = nString[codeStr] + nbString[cnt] + nHan;
        }
      } else if (codeStr == 1 && i == str.length) {
        /* 1이고 마지막입력값이면 한글 일 표현 */
        nHan = nString[codeStr] + nHan;
      } else {
        if (codeStr == 1 && i == 1 && (cnt == 9 || cnt == 13)) {
          nHan = nString[codeStr] + nbString[cnt] + nHan;
        } else {
          nHan = nbString[cnt] + nHan;
        }
      }
      /* 단위표현에서 억만, 조억에 두번째 단위 제거 (이거 때문에 삽질했네..) */
      nHan = nHan.replace('억만', '억').replace('조억', '조');
    } else {
      return false;
    }
  }
  return nHan + " 원";
}

// 적립금 계산
export const calculateOnePercent = (amount) => {
  let point = (amount * 0.01)
  return truncateNumber(point, 0);
}

export const  truncateNumber = (value, decimalPlaces) => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.floor(value * multiplier) / multiplier;
}

// 디데이
export const getRemainingDays = (endDate) => {
  const today = new Date();
  const targetDate = new Date(endDate);
  const timeDiff = targetDate.getTime() - today.getTime();
  const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return remainingDays;
}

// 휴대폰 번호 검사
export const validatePhoneNumber = (phone) => {
  const phoneNumberRegex = /^01([0|1|6|7|8|9])-(\d{3,4})-(\d{4})$/;

  return phoneNumberRegex.test(phone);
}

export const insertPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');

  // 정해진 형식에 맞게 번호 변환
  const regex = /^(\d{3})(\d{4})(\d{4})$/;
  const formatted = cleaned.replace(regex, '$1-$2-$3');

  return formatted;
}


export const extractUsernameFromEmail = (email, type) => {
  const parts = email.split('@');
  if (parts.length > 1) {
    return parts[type];
  } else {
    return null;
  }
}

// 이메일 형식검사
export const isValidEmail = (email) => {
  const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

export const formatNumberWithUnit = (number) => {
  const units = ["", " 십", " 백", "천", "만", "십만", "백만", "천만", "억"];
  const unitCount = units.length;

  if (number < 1000) {
    return String(number);
  }

  let formattedNumber = "";
  let unitIndex = 0;

  while (number > 0) {
    const remainder = number % 10;
    number = Math.floor(number / 10);

    if (remainder > 0) {
      if (unitIndex > 4 && unitIndex % 4 === 1 && remainder === 1) {
        formattedNumber = units[unitIndex] + formattedNumber;
      } else {
        formattedNumber = remainder + units[unitIndex] + formattedNumber;
      }
    }

    unitIndex++;
    if (unitIndex === unitCount) {
      break;
    }
  }

  if (formattedNumber.startsWith("1") && unitIndex > 4) {
    formattedNumber = formattedNumber.substring(1);
  }

  return formattedNumber || "0";
};

export const artFormat = (featuredArtists) => {
  return {
    art_img01: featuredArtists.amp_img,
    artist_name: featuredArtists.aname_kor,
    title: featuredArtists.amp_title,
    madeyear: featuredArtists.amp_year,
    aprofile_img1: featuredArtists.aprofile_img1,
    aname_kor: featuredArtists.aname_kor,
    aname_eng: featuredArtists.aname_eng,
  };
};

export const changeComma = (price) => {
  if (price <= 0) return 0;
  let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
}

export const YEAR = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i >= 1930; i--) {
  YEAR.push(i);
}


// 월
export const MONTH = [];
for (let i = 1; i <= 12; i++) {
  let m = String(i).padStart(2, '0');
  MONTH.push(m);
}

// 일
export const DAY = [];
for (let i = 1; i <= 31; i++) {
  let d = String(i).padStart(2, '0');
  DAY.push(d);
}

export const escapeHtml = (text) => {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export const unescapeHtml = (text) => {
  var doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}