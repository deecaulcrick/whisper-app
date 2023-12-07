import React from "react";
import pfp from "../assets/test-image.png";
import profileBg from "../assets/profile-header.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side__profile">
        <img src={profileBg} width="100%" className="profile__bg" />

        <div className="profile">
          <img src={pfp} className="sidebar__pfp" />
          <h3 className="name">Debruhh</h3>
          <h4 className="username">@youdontknowmydid</h4>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>View Profile</button>
        </div>
      </div>
      <div className="side__profile activity">
        <h3>Activity</h3>
      </div>
    </div>
  );
};

export default Sidebar;
