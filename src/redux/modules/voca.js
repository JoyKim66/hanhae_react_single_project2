import {db} from "../../firebase";
import {collection,getDoc,getDocs,addDoc,updateDoc,
  deleteDoc,} from "firebase/firestore";
import { async } from "@firebase/util";

const CREATE = "voca/CREATE";
const LOAD = "voca/LOAD"

const initialState = {
    list: [  
  ],
};


export const createVoca = (voca) => {
    return { type: CREATE, voca };
  };
export const loadVoca = (voca) => {
  return {type : LOAD , voca};
}


//middelwares
export const loadVocaFB = () => {
  return async function(dispatch) {
    const voca_data = await getDocs(collection(db,"dict"));
    console.log(voca_data);
    
    let voca_list = [];
    voca_data.forEach((v) => {
      console.log(v.id,v.data());
      voca_list.push({id:v.id, ...v.data()});
    })
    console.log(voca_list);
    dispatch(loadVoca(voca_list));
  }
}

export const createVocaFB = (voca) => {
  return async function(dispatch) {
    const docRef = await addDoc(collection(db,"dict"),voca);
    const voca_data = {id:docRef.id,...voca};
    dispatch(createVoca(voca_data));
  }
}


  // 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "voca/LOAD" : {
        return {list: action.voca}
      }

      case "voca/CREATE": {
        // console.log(state,action);
        const new_voca_list = [...state.list,action.voca];
        return {list: new_voca_list};
      }
    default:
        return state;
    }
}