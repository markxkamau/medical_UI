import React from "react";
import Navigation from "./templates/Navigation";
import Body from "./templates/Body";

export default function App() {
  const [patient, setPatient]  = React.useState();
  return (
    <div className="app">
      <Navigation params = {patient}/>
      <Body patient = {patient} />
    </div>
  );
}
