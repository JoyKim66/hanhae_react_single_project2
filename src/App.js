import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector,dispatch} from "react-redux";


import Detail from "./Detail";
import styled from "styled-components";
import plusbutton from "./plusbutton.png";



function App() {
  const history = useHistory();
  const voca_list = useSelector((state)=>state.voca.list);
  console.log(voca_list);


  React.useEffect(() => {
    
  }, [voca_list]);

 
  return (
  <div className="App">
    <Route path="/" exact>
      <Container>
        <Title>MY DICTIONARY</Title>
        {voca_list.map((voca,idx)=>{
          return(
          <CardBox key={idx}>
          <CardChild>
            <Underline>VOCA</Underline>
            <div>{voca.voca}</div>
          </CardChild>
          <CardChild>
            <Underline>DEFINE</Underline>
            <div>{voca.define}</div>
          </CardChild>
          <CardChild>
            <Underline>EXAMPLE</Underline>
            <div style = {{color: "#0698d8"}}>{voca.ex}</div>
          </CardChild>
        </CardBox>)
        })}
        <AddButton>
             
          <Img onClick={() => {
            history.push("/detail");
          }} src={plusbutton} />

        </AddButton>
      </Container>
    </Route>

    <Route path="/detail">
      <Detail />
    </Route>

  </div>
    
  );
}

const Title = styled.div`
  color: #fe96a9;
  margin: auto;
  display: flex;
  width: 100px;
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
  padding: 10px;
`;
const Underline = styled.div`
  text-decoration: underline;
  font-size: small;
  font-weight: 400;
  color: #fff2f4;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

`

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;


const Img = styled.img`
  max-width: 50px;
  min-height: 60px;
  position: fixed;
  top: 75%;
`;


export default App;
