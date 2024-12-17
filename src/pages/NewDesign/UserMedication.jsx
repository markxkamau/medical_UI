import React from 'react';
import { useParams } from 'react-router-dom';

const UserMedication = ({ users }) => {
  
  const { userId } = useParams();
  const user = users.find((user) => user.userId === userId);
  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <h2>Medications for {user.name}</h2>
      <ul>
        {user.medications.map((med) => (
          <li key={med.id}>
            {med.name} - {med.dosage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMedication;
