import React from 'react';
import { useParams } from 'react-router-dom';

const UserHealthRecords = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.userId === userId);

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <h2>Health Records for {user.name}</h2>
      <ul>
        {user.healthRecords.map((record) => (
          <li key={record.id}>
            {record.date} - {record.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHealthRecords;
