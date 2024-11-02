import React from "react";
import Patient from "../Patient/Patient";
import Graph from "../Graph/GraphInfo";
import Drug from "../Drug/Drug";
import Stock from "../Stock/Stock";
import Test from "../Test/Test";
import PatientInput from "../Patient/PatientInput";

export default function Body(patient, drug, test, param) {
  return (
    <>
     <PatientInput param = {param}/>
    </>
  );
}
