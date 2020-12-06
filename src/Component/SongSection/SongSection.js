import React from "react";
import "./SongSection.css";
const SongSection = ({ song }) => {
  const {
    artistName,
    releaseDate,
    collectionName,
    artworkUrl100,
    collectionPrice,
    previewUrl,
    trackCensoredName,
  } = song;
  const date = releaseDate.slice(0, 10);
  return (
    <div className="col-md-3">
      <div className="songCard text-center p-2">
        <div>
          <img className="w-100" src={artworkUrl100} alt="" />
        </div>
        <div>
          <p>Name : {trackCensoredName} </p>
          <p>Artist Name : {artistName} </p>
          <p>Release Date : {date} </p>
          <p>Collection : {collectionName} </p>
          <p>Collection Price : {collectionPrice}</p>
        </div>
      </div>
      <audio controls src={previewUrl}></audio>
    </div>
  );
};

export default SongSection;
