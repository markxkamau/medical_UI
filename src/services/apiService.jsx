import axios from "axios";

const API_URL = "http://localhost:8083/medical/api";

export async function getAllPatients() {
  return await axios.get(`${API_URL}/all_patients`);
}

export async function getPatient(id) {
  return await axios.get(`${API_URL}/patient`, id);
}

export async function postPatient(patient) {
  return await axios.post(`${API_URL}/patient`, patient);
}

export async function putPatient(patient) {
  return await axios.put(`${API_URL}/new_patients`, patient);
}

export async function deletePatient(id) {
  return await axios.delete(`${API_URL}/patient`, id);
}

// Fetch the list of all patients (or users)
export const fetchPatients = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8083/medical/api/all_patients"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Create or register a new user (if required by your backend)
export const createPatient = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8083/medical/api/new_patient",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
  //Patient Login and Registration to Capture this information > patientDataRequest

// Check Login Credentials
export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8083/medical/api/auth/login",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const fetchAllMedications = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8083/medical/api/all_drugs"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching medications:", error);
    throw error;
  }
};

  //Backend request to capture this information > medicationListRequest

export const fetchMedication = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8083/medical/api/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching medications:", error);
    throw error;
  }
};

export const createMedication = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8083/medical/api/create_drug",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating medication:", error);
    throw error;
  }
}
