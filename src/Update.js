import React, { useRef,useState } from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {updateVocaFB,deleteVocaFB} from "./redux/modules/voca";
import { updateVoca,deleteVoca } from "../../vocabulary/src/redux/modules/voca";




const Update = (props) => {
    const [dict, setDict] = React.useState({voca:"aa",define:"dd",ex:"dd"})
    const vocaInput = React.useRef(null);
    const defineInput = React.useRef(null);
    const exInput = React.useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const voca_index = useParams().index;
    // console.log(page_index); {index:'0'}형태로나옴
    const voca_list = useSelector((state) =>state.voca.list);
    console.log('voca_list', voca_list)

    
    
    
    
    const onClickUpdate = (e) => {
        // dispatch(updateVoca(voca_list));
        const voca_current_obj = { 
            voca: vocaInput.current.value,
             define:defineInput.current.value,
              ex:exInput.current.value}
        const voca_id = voca_list[voca_index].id
        dispatch(updateVocaFB(voca_current_obj,voca_id))
        history.push("/")
    }

    const onClickDelete = (e) => {
        const voca_current_obj = { 
            voca: vocaInput.current.value,
             define:defineInput.current.value,
              ex:exInput.current.value}
        const voca_id = voca_list[voca_index].id
        dispatch(deleteVocaFB(voca_current_obj,voca_id))
        history.push("/")
    }
  
    return (
        
        <Container>
            <Title>단어 수정하기</Title>
            <CardBox>
                <CardChild>
                    <Underline>단어</Underline>
                        <Borderline type="text" ref={vocaInput} 
                        defaultValue = {voca_list[voca_index] ? voca_list[voca_index].voca : ""} />
                </CardChild>
                <CardChild>
                    <Underline>설명</Underline>
                        <Borderline type="text" ref={defineInput} 
                        defaultValue = {voca_list[voca_index] ? voca_list[voca_index].define : ""} />
                </CardChild>
                <CardChild>
                    <Underline>예시</Underline>
                        <Borderline 
                        type="text" 
                        ref = {exInput}
                        defaultValue = {voca_list[voca_index] ? voca_list[voca_index].ex : ""}
                        ></Borderline>
                </CardChild>
            </CardBox>
            
            <AddButton onClick = {onClickUpdate}>수정하기</AddButton>
            <AddButton onClick = {onClickDelete}>삭제하기</AddButton>

            
        </Container>
    );

};



const Title = styled.div`
  color: #fe96a9;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fffbb0;
  padding: 16px;
  margin: 20px auto;
  border: 1px solid #ddd;
`;
const CardBox = styled.div`
  max-width: 300px;
  min-height: 250px;
  background: #C9EFFF;
  margin: 15px auto;
  border: 3px solid #dadada;
  border-radius: 20px;
`;

const CardChild = styled.div`
  max-width: 300px;
  min-height: 80px;
  background: #C9EFFF;
  padding: 10px;
  margin: 30px auto;
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
`;
const Underline = styled.div`
  text-decoration: underline;
  font-size: small;
  font-weight: 400;
  color: #fff2f4;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`
const Borderline = styled.input`
    border: 1px solid #fff;
    max-width: 280px;
    min-height: 50px;
    margin: 0 10px;
    border-radius: 20px;
    
`;
const AddButton = styled.button`
    width: 90%;
    min-height: 50px;
    margin: auto;
    display: block;
    background: #C9EFFF;
    border-radius: 20px;
    border: 3px solid #dadada;
    color: #fff2f4;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
export default Update;