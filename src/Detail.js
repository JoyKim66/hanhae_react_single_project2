import React, { useRef,useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {createVoca} from "./redux/modules/voca";
import { useHistory } from "react-router-dom";


const Detail = () => {
    // const [dict, setDict] = React.useState({voca:"소윤",define:"잉여",ex:"Dd"})
    const vocaInput = React.useRef(null);
    const defineInput = React.useRef(null);
    const exInput = React.useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = (e) => {
        // setDict(
        //     {...dict, voca: vocaInput.current.value, define:defineInput.current.value, ex:exInput.current.value}
           
        // );
        dispatch(createVoca({voca: vocaInput.current.value, define:defineInput.current.value, ex:exInput.current.value}))
        history.push("/")
    }
    return (
        <Container>
            <Title>단어 추가하기</Title>
            <CardBox>
                <CardChild>
                    <Underline>단어</Underline>
                        <Borderline type="text" ref={vocaInput}/>
                </CardChild>
                <CardChild>
                    <Underline>설명</Underline>
                        <Borderline type="text" ref={defineInput} />
                </CardChild>
                <CardChild>
                    <Underline>예시</Underline>
                        <Borderline 
                        type="text" 
                        ref = {exInput}
                        style = {{color: "blue"}}
                        ></Borderline>
                </CardChild>
            </CardBox>
            
            <AddButton onClick = {onClick}>추가하기</AddButton>
            
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
    
`;

export default Detail;