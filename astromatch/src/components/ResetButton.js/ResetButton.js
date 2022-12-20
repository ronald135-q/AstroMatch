import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronald-santiago";

function ResetButton() {
  const [profile, setProfile] = useState([]);

  const getProfile = () => {
    axios.get(`${baseUrl}/person`).then((response) => {
      setProfile(response.data.profile);
    });
  };

  useEffect(() => {
    getProfile();
  });

  function onClickReset() {
    const body = {
      id: profile.id,
    };

    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronald-santiago/clear",
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <button onClick={onClickReset}>Resetar tudo</button>
    </div>
  );
}

export default ResetButton;
