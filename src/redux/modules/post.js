import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instances from "../../shared/axios";
import instance from "../../shared/axios";
// 불변성을 유지하기 위해서 immer사용

// 1. GET : 서버에서 어떤 데이터를 가져와서 보여줌
// 2. POST : 서버로 데이터를 보냄
// 3. PUT : 데이터베이스 내부 내용 갱신
// 4. DELETE : 데이터베이스 내부 내용 삭제

// 1. 어떤 메소드를 사용할 것인지
// 2. url 주소
// 3. data (선택적)
// 4. params(선택적)

//액션타입
const SET_POST = "SET_POST";

//액션 생성자
const setpost = createAction(SET_POST, (post) => ({
  post,                                                                           
}));


//값 바꿀때 편하게(형태)알게 하려고 initialState를함
const initialState  ={
    list:[],
}

//미들웨어(api를 이용해서 데이터가져오거나 보내거나 하는 동작할거임)

// getpostAPI(포스트불러올거임)
// const getpostAPI  =()=>{
//     return function (dispatch,getState){
//         instance
//         .get("/api/posts",{}).then
//     }

// }

//리듀서
//실제로 리덕스에있는 store 데이터 변경하려고

export default handleActions(
{
    [SET_POST]:(state,action)=>
    produce(state,(draft)=>{
        draft.list.push(...action.payload);
        console.log(draft.list);
    })

},initialState





);

const actionCreators = {

}