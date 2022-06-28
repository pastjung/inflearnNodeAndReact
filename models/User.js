const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 입력시 공백 제거
    unique: 1, // 유일한 이메일
  },
  password: {
    type: String,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number, // 0이면 일반회원, 1이면 관리자
    default: 0,
  },
  image: String,
  token: {
    type: String,
  }, // 유효성 관리
  tokenExp: {
    type: Number,
  }, // 토큰의 유효기간
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
