import React from "react";
import "../../App.scss";

const UserCard = ({user}) => (
    <div className="user-card">
    <img className="user-avatar" src={user.avatar_url} alt={user.name} />
    <div className="user-info">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <ul className="user-info-list">
        <li>
          <strong>Followers</strong> {user.followers}
        </li>
        <li>
          <strong>Following</strong> {user.following}
        </li>
        <li>
          <strong>Repos</strong> {user.public_repos}
        </li>
      </ul>
    </div>
  </div>
);


export default UserCard;