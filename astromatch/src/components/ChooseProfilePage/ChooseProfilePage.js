import React, { useEffect } from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { useState } from "react";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronald-santiago";

function ChooseProfilePage() {
  // const [name, setName] = useState("");
  // const [bio, setBio] = useState("");
  // const [age, setAge] = useState(0);
  // const [photo, setPhoto] = useState("");
  const [profile, setProfileToChoose] = useState(undefined);

  const getProfileToChose = () => {
    axios.get(`${baseUrl}/person`).then((response) => {
      setProfileToChoose(response.data.profile);
    });
  };

  const ChooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profile.id,
    };

    setProfileToChoose(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronald-santiago/choose-person",
        body
      )
      .then((response) => {
        console.log(response);
      });

    getProfileToChose();
  };

  useEffect(() => {
    getProfileToChose();
  }, []);

  const onClickNo = () => {
    ChooseProfile(false);
  };

  const onClickYes = () => {
    ChooseProfile(true);
  };

  return (
    <div>
      {profile ? (
        <>
          <ProfileCard profile={profile} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ChooseProfilePage;
