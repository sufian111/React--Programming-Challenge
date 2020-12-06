import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../../App";
import "./NavBarSection.css";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [songName, setSongName] = useState(loggedInUser);

  const handleChange = (e) => {
    const newSongName = { ...songName };
    newSongName[e.target.name] = e.target.value;
    setSongName(newSongName);
  };

  const handleSearch = () => {
    setLoggedInUser(songName);
  };

  return (
    <div>
      <div>
        <div class="search-bar d-flex justify-content-around align-items-center ">
          <input
            onChange={handleChange}
            name="song"
            class="mt-5 mb-3"
            placeholder="Search favourite  song "
            type="text"
          />
          <div>
            <button onClick={handleSearch} class="btn ml-2 mt-4 btn-danger">
              Search
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="container navTextColor d-flex justify-content-around">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand text-white" href="/">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item navTextColor">
                  <a class="nav-link" href="/">
                    ALL
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    MOVIE
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    PODCAST
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    MUSIC
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    MUSIC VIDEO
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    AUDIO BOOK
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    SHORT FILM
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBarSection;
