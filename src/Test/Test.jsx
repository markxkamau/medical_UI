import React from "react";

export default function Test() {
  return (
    <>
      <div>
        <h4 className="text-xl text-gray-900 font-bold">Tests Results</h4>
        <div className="overflow-x-auto w-full my-10">
          <ul className="mt-2 text-gray-700">
            {/** th:each="test:${test_data}"*/}
            <li
              style={{ justifyContent: "space-between" }}
              className="flex border-y py-2"
            >
              {/** */}

              <p>a</p>
              <br></br>
              {/**th:text="'BloodPressure(mmHg): '"+ ${test.bloodPressure} */}
              <p>a</p>
              <br></br>
              {/**th:text="'Weight(Kg): '"+${test.weight} */}
              <p>a</p>
              <br></br>
              {/** th:text="'Oxygen Level(%): '"+${test.oxygen} */}
              <p>a</p>
              <br></br>
              {/**th:text="'Blood Sugars(mg/dL): '" +${test.bloodSugar}*/}
              <p>a</p>
              {/** th:text="'Test Date: '"+${test.testDate}*/}
            </li>
          </ul>
        </div>
        <a className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          {/** th:href="@{'/medical/new_test/'+${patient_data.id}}"*/}
          Add Test
        </a>
      </div>
    </>
  );
}
