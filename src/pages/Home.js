import React from "react";
import Header from "../organisms/Header";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const click_login = () => {
    navigate("/login");
  };
  const click_signup = () => {
    navigate("/signup");
  };
  return (
    <>
      <Grid is_flex>
        <Image shape="circle" size="45"></Image>
        <DIV>
          <Button _onClick={click_signup} width="40px" text="회원가입"></Button>
          <Button _onClick={click_login} width="40px" text="로그인"></Button>
        </DIV>
      </Grid>
    </>
  );
};

const DIV = styled.div`
  flex-direction: row;
`;

export default Home;
