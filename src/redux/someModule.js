// axios 객체 써먹기
// import instance from "../../shared/Request";

// ...

// // 어떤 미들웨어
// const getSomeData = () => {
// 	return function(dispatch){

// 		// 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다. 
// 		instance.get("/some").then((res) => {
// 			//요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
// 		}).catch(err => {
// 			// 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
// 			console.log("에러 났어!");
// 		})
// 	}
// }