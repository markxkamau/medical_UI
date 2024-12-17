import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { userId } = useParams("");

  const user = users.find((user) => user.userId === userId);
  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <h1>User Detail for {user.name}</h1>
      <p>Email: {user.email}</p>
      <div>
        <ul>
          <li>
            <Link to={`/user/${userId}/medications`}>Medications</Link>
          </li>
          <li>
            <Link to={`/user/${userId}/drug-schedules`}>Drug Schedules</Link>
          </li>
          <li>
            <Link to={`/user/${userId}/health-records`}>Health Records</Link>
          </li>
        </ul>
      </div>
      {/* This is where nested routes will render */}
      <Outlet />
    </div>
  );
};

export default UserDetail;
