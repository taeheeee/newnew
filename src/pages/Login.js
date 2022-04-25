import React, { useState } from "react";
import Header from "../organisms/Header";
import { useDispatch } from "react-redux";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { emailCheck } from "../shared/validateEmail";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [id, inputid] = useState("");
  const [pw, inputpw] = useState("");
  const dispatch = useDispatch();

  const btn_login = () => {
    // if (id === "" || pw === "") {
    //   window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요");
    //   return;
    // }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다");
    } else {
      // 보내기 dispatch로(id,pw)
      dispatch(userActions.LoginDB(id, pw));
      navigate("/post");
    }
  };

  return (
    <>
      <Grid width="80%" margin="auto">
        <Header login_is="false"></Header>
        <Text size="30px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            _onChange={(e) => {
              inputid(e.target.value);
            }}
            label="아이디"
            placeholder="아이디를 입력해주세요."
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            _onChange={(e) => {
              inputpw(e.target.value);
            }}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
          ></Input>
        </Grid>
        <Button
          _onClick={() => {
            btn_login();
            console.log(id);
            console.log(pw);
          }}
          text="로그인하기"
        ></Button>
      </Grid>
    </>
  );
};
export default Login;
