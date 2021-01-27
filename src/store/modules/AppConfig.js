import update from "immutability-helper";

//액션 타입 정의
const SET_APP_STATE = "SET_APP_STATE";

//액션 생성 함수
export const setAppState = (data) => {
  return { type: SET_APP_STATE, payload: data };
};

//모듈의 초기 상태 정의
const initialState = {
  appState: {},
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      return update(state, { appState: { $set: action.payload } });
    default:
      return state;
  }
};

export default reducer;
