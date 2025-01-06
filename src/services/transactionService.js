import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions", error);
    throw error;
  }
};
