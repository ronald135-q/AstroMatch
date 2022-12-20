import React, { useEffect, useState } from "react";
import MatchListemItem from "./MatchListItem";
import styled from "styled-components";
import matchers from "@testing-library/jest-dom/matchers";
import axios from "axios";

const ListContainer = styled.div`
  padding: 8px;
`;
function MatchListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronald-santiago/matches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setList(res.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ListContainer key={list.id}>
      {list.map((profile) => {
        return <MatchListemItem profile={profile} />;
      })}
    </ListContainer>
  );
}

export default MatchListPage;
