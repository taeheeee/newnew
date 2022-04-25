import React, { useState } from "react";
import Header from "../organisms/Header";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { emailCheck } from "../shared/validateEmail";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Signup = () => {
  const dispatch = useDispatch();
  const [id, inputid] = useState("");
  const [pw, inputpw] = useState("");
  const [pwchk, inputpwch] = useState("");
  const [nick, input_nick] = useState("");

  // get방식 데이터 받아오는거
  // React.useEffect(() => {
  //   axios
  //     .get("http://146.56.187.171/api/posts", {}) // 3번째 인자는 토큰?
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const onsignup = () => {
    if (id === "" || pw === "" || nick === "") {
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다");
      return;
    }

    if (pw !== pwchk) {
      return;
    }

    // 조건만족하면  email,nickname,password보내기
    else {
      dispatch(userActions.signupDB(id, pw, nick));
    }
  };
  return (
    <>
      <Grid width="80%" margin="auto">
        <Header login_is="false"></Header>
        <Text size="30px" bold>
          회원가입
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
              input_nick(e.target.value);
            }}
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
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
        <Grid padding="16px 0px">
          <Input
            _onChange={(e) => {
              inputpwch(e.target.value);
            }}
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Button _onClick={onsignup} text="회원가입하기"></Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
