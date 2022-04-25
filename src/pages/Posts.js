import React from "react";

import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Posts = () => {
  const is_login = useSelector((state) => state.user.is_login);
  const dispatch = useDispatch();
  if (is_login) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            {/* <Text margin="0px" size="24px" bold>
              user 닉네임
            </Text> */}
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>

            <Button
              text="로그아웃"
              _onClick={() => {
                // dispatch(userActions.logOutDB());
                console.log("로그아웃");
              }}
            ></Button>
          </Grid>
        </Grid>

        <Grid bg={"#EFFF6FF"} padding="2px 0px 0px 0px">
          {/* map을이용하여 개수만큼 포스트불러오기 */}
          {/* 
        {post_list.map((p, idx) => {
          if (user_info && p.user_info.user_id === user_info.uid) {
            return (
              <Grid
                key={p.id}
                _onClick={() => {
                  console.log(
                    "각게시글 수정페이지로 그 로그인유서===게시글작성자"
                  );
                }}
              >
                <Post {...p} is_me />;
              </Grid>
            );
          } else {
            <Grid
              bg="#ffffff"
              _onClick={() => {
                // history.push(`/post/${p.id}`);
              }}
            >
              return <Post key={p.id} {...p} />;
            </Grid>; */}
          {/* }
        })} */}
        </Grid>
      </>
    );
  }
};

export default Posts;
