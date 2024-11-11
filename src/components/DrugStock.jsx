import React from "react";

function DrugStock({medications}) {
  return (
    <>
      <div className="bg-white p-6 m-2 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Medication Stock
        </h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Medication</th>
              <th className="px-4 py-2 text-left">Stock Level</th>
              <th className="px-4 py-2 text-left">Expiration Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr key={index} className={med.stock <= 5 ? "bg-red-100" : ""}>
                <td className="px-4 py-2">{med.name}</td>
                <td className="px-4 py-2">{med.stock}</td>
                <td className="px-4 py-2">{med.expiration}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Medication Stock</h3>
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Medication</th>
                    <th className="px-4 py-2 text-left">Stock Level</th>
                    <th className="px-4 py-2 text-left">Expiration Date</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medications.map((med, index) => (
                    <tr key={index} className={med.stock <= 5 ? "bg-red-100" : ""}>
                      <td className="px-4 py-2">{med.name}</td>
                      <td className="px-4 py-2">{med.stock}</td>
                      <td className="px-4 py-2">{med.expiration}</td>
                      <td className="px-4 py-2">
                        <button 
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleReorderMedication(med.id)}>
                          Reorder
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default DrugStock;
