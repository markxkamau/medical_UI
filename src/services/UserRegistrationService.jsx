import axios from "axios";

const API_URL = 'https://localhost:8083/medical/api/all_patients'

export async function getAllPatients() {
    return await axios.get(API_URL, patient);
}