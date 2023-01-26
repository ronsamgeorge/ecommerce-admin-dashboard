import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            className="topAvatar"
            src="https://www.clipartmax.com/png/small/319-3191274_male-avatar-admin-profile.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
