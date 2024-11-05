import React, { useState } from "react";
import Patient from "../models/Patient/Patient";
import Graph from "../models/Graph/GraphInfo";
import Drug from "../models/Drug/Drug";
import Stock from "../models/Stock/Stock";
import Test from "../models/Test/Test";
import UserRegistration from "../user/UserRegistration";
import UserLogin from "../user/UserLogin";

const Body = (props) => {
  const { page, onLogin , handlePageChange} = props;

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

      {page === "register" && <UserRegistration onLogin={onLogin} handlePageChange={handlePageChange}/>}
      {page === "login" && <UserLogin onLogin={onLogin} handlePageChange={handlePageChange}/>}
    </>
  );
};

export default Body;
