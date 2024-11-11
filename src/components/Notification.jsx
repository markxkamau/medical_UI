import React from "react";

function Notification() {
  return (
    <>
      {/* <Notification /> */}
      <div className="bg-white p-6 rounded-lg shadow-md m-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Notifications</h3>
        <div className="space-y-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-gray-800">
              Your medication stock for ABC is low. Please reorder soon.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reorder
            </button>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-800">
              Your next dose of XYZ is due in 2 hours.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Take Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
