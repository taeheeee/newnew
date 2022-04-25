import React from "react";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Grid from "../elements/Grid";
import styled from "styled-components";

const Header = (props) => {
  const { login_is } = props;
  if (login_is === "false") {
    return (
      <>
        <Grid is_flex>
          <Image shape="circle" size="45"></Image>
          <DIV>
            <Button width="40px" text="회원가입"></Button>
            <Button width="40px" text="로그인"></Button>
          </DIV>
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid is_flex>
        <Image shape="circle" size="45"></Image>
        {/* <div style={{
          display:flex,
          justify-content:flex-end;}}> */}
        <DIV>
          <Button width="30%" text="알림"></Button>
          <Button width="30%" text="로그아웃"></Button>
        </DIV>
        {/* </div> */}
      </Grid>
    </>
  );
};

// .btn_css{
//   display:flex,
//   flex-direction:row,
//   justify-content:space-between,

// }

const DIV = styled.div`
  flex-direction: row;
`;

export default Header;
