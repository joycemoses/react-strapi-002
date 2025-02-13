import axios from "axios";

const API_URL = "https://wonderful-strength-fa0dd8bca2.strapiapp.com/api/articles"; // Ensure this is correct

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
};
