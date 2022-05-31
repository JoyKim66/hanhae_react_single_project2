const CREATE = "voca/CREATE";


const initialState = {
    list: [  
  ],
};


export const createVoca = (voca) => {
    return { type: CREATE, voca };
  };


  // 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "voca/CREATE": {
        console.log(state,action);
        const new_voca_list = [...state.list,action.voca];
        return {list: new_voca_list};
      }
    default:
        return state;
    }
}