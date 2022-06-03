import {db} from "../../firebase";
import {collection,getDoc,getDocs,addDoc,updateDoc,doc,
  deleteDoc,} from "firebase/firestore";

const CREATE = "voca/CREATE";
const LOAD = "voca/LOAD"
const UPDATE = "voca/UPDATE"

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
export function updateVoca(voca_current_obj) {
  return {type: UPDATE, voca_current_obj};
}


//middelwares
export const loadVocaFB = () => {
  return async function(dispatch) {
    const voca_data = await getDocs(collection(db,"dict"));
    // console.log(voca_data);
    
    let voca_list = [];
    voca_data.forEach((v) => {
      // console.log(v.id,v.data());
      voca_list.push({id:v.id, ...v.data()});
    })
    // console.log(voca_list);
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
export const updateVocaFB = (voca_current_obj,voca_id) => {
  return async function (dispatch, getState) {
  const docRef = doc(db,"dict",voca_id)
  console.log('docRef ',docRef); 
  await updateDoc(docRef,voca_current_obj);
  
  console.log('getStatevocalist ',getState().voca.list);
  const _voca_list = getState().voca.list;
  const voca_index = _voca_list.findIndex((v) => {
    return v.id === voca_id
  })
  console.log('voca_current_obj', voca_current_obj);
  dispatch(updateVoca({voca_index,...voca_current_obj}));
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
      case "voca/UPDATE" : {
        console.log('action:',action);
        const new_voca_list = state.list.map((l, idx) => {
          if(parseInt(action.voca_current_obj.voca_index) === idx) {
              return {...l,voca:action.voca_current_obj.voca,
                define:action.voca_current_obj.define,
                ex:action.voca_current_obj.ex};
          } else {
            return l;
          }
        })
        // console.log({list: new_voca_list});
        return {list:new_voca_list};
      }
    default:
        return state;
    }
    
}



