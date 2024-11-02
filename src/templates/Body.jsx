import React from "react";
import Patient from "../Patient/Patient";
import Graph from "../Graph/GraphInfo";
import Drug from "../Drug/Drug";
import Stock from "../Stock/Stock";
import Test from "../Test/Test";
import PatientInput from "../Patient/PatientInput";
import PatientRegistration from "../Patient/PatientRegistration";

const Body = (props) => {
  const { page, onLogin } = props;

  return (
    <>
      {page === "patient" && (
        <>
          <Patient />
          <Graph />
          <Drug />
          <Stock />
          <Test />
        </>
      )}

      {page === "register" && <PatientInput />}
      {page === "login" && <PatientRegistration  onLogin = {onLogin}/>}
    </>
  );
};

export default Body;
