import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import instance from "../../shared/axios";

// 1. GET : 서버에서 어떤 데이터를 가져와서 보여줌
// 2. POST : 서버로 데이터를 보냄
// 3. PUT : 데이터베이스 내부 내용 갱신
// 4. DELETE : 데이터베이스 내부 내용 삭제
// 1. 어떤 메소드를 사용할 것인지
// 2. url 주소
// 3. data (선택적)
// 4. params(선택적)

//액션타입
const LOGIN = "Login";
const SIGNUP = "Signup";
const LOGOUT = "Logout";

//액션생성자
const login = createAction(LOGIN, (user) => ({ user }));
const signup = createAction(SIGNUP, (user) => ({ user }));
const logout = createAction(LOGOUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const LoginDB = (id, pw) => {
  return function (dispatch, getState) {
    const userdb = { email: id, password: pw };
    instance
      .post("/api/users/signin", userdb)
      .then(function (response) {
        console.log(response.data.token);
        const usertoken = { token: response.data.token, email: id };
        console.log(usertoken);
        dispatch(login(usertoken));
        
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  // getState
};

const signupDB = (id, pw, nick) => {
  return function (dispatch, getState) {
    instance
      .post("/api/users/signup", {
        email: id,
        nickname: nick,
        password: pw,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
};
//리듀서
export default handleActions(
  {
    [SIGNUP]: (state, action) => 
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", action.payload.user.token);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  LoginDB,
  signupDB,
};

export { actionCreators };
