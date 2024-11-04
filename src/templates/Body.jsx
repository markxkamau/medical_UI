import React, { useState } from "react";
import Patient from "../Patient/Patient";
import Graph from "../Graph/GraphInfo";
import Drug from "../Drug/Drug";
import Stock from "../Stock/Stock";
import Test from "../Test/Test";
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
