import React, { useState } from "react";

const CreateMedication = () => {
  const [drugName, setDrugName] = useState("");
  const [drugScientificName, setDrugScientificName] = useState("");
  const [drugSize, setDrugSize] = useState(null);
  return <div>CreateMedication</div>;
};

export default CreateMedication;
