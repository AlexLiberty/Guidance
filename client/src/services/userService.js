const BASE_URL = "http://localhost:5207";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error during registration");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
