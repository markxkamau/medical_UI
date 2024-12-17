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
    const response = await axios.get("http://localhost:8083/medical/api/all_patients");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};


// Create or register a new user (if required by your backend)
export const createPatient = async (data) => {
  try {
    const response = await axios.post("http://localhost:8083/medical/api/new_patient", data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
