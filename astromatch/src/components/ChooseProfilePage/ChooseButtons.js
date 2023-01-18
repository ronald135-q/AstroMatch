import React from "react";
import styled from "styled-components";

const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function ChooseButtons(props) {
  return (
    <DivButton>
      <button onClick={props.onClickNo}>Não</button>
      <button onClick={props.onClickYes}>Sim</button>
    </DivButton>
  );
}

export default ChooseButtons;
