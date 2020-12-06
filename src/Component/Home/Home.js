import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userContext } from "../../App";
import NavBarSection from "../../Component/NavBarSection/NavBarSection";
import SongSection from "../SongSection/SongSection";
const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [allSongData, setAllSongData] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${loggedInUser.song}`)
      .then((res) => res.json())
      .then((data) => {
        setAllSongData(data.results);
      });
  }, [loggedInUser.song]);

  return (
    <div className="container">
      <div>
        <NavBarSection></NavBarSection>
      </div>
      <div className="row">
        {allSongData.map((data) => (
          <SongSection key={data.previewUrl} song={data}></SongSection>
        ))}
      </div>
    </div>
  );
};

export default Home;
