import React from 'react';
import { useParams } from 'react-router-dom';

const UserDrugSchedules = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.userId === userId);

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <h2>Drug Schedules for {user.name}</h2>
      <ul>
        {user.drugSchedules.map((schedule) => (
          <li key={schedule.id}>
            {schedule.time} - {schedule.medication}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDrugSchedules;
