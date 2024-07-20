type UserInfomation = {
  email: string;
  password: string;
};

function validateLogin(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(values.email)) {
    errors.email = '이메일 형식에 맞게 입력해주세요.';
  }

  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호를 8자에서 20자 사이로 입력해주세요.';
  }
  return errors;
}

export {validateLogin};
