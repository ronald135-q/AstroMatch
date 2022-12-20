import React from "react";
// import AppBar from "./AppBar/AppBar";
// import ChooseProfilePage from "./ChooseProfilePage/ChooseProfilePage";
import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`;
function MatchListemItem(props) {
  return (
    <ListItemContainer>
      <Avatar src={props.profile.photo} />
      <p>{props.profile.name}</p>
    </ListItemContainer>
  );
}

export default MatchListemItem;
