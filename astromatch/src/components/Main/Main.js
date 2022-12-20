import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";

import MatchListPage from "../MatchListPage/MatchListPage";
import styled from "styled-components";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;

  /* justify-content: center;
  align-items: center; */
`;

function Main() {
  const [selectedPage, setSelected] = useState("choose-profile");

  const renderSelected = () => {
    switch (selectedPage) {
      case "choose-profile":
        return <ChooseProfilePage />;
      case "match-list":
        return <MatchListPage />;
      default:
        return <ChooseProfilePage />;
    }
  };

  const goChooseProfilePage = () => {
    setSelected("choose-profile");
  };

  const goMatchListPage = () => {
    setSelected("match-list");
  };
  return (
    <DivContainer>
      <Container>
        <AppBar
          goToChooseProfilePage={goChooseProfilePage}
          goToMatchListPage={goMatchListPage}
        />
        {renderSelected()}
      </Container>
    </DivContainer>
  );
}

export default Main;
