import axios from "axios";

export async function handleGetAllMailsApi() {
  try {
    const accessToken = sessionStorage.getItem("accessToken"); // Assuming the access token is stored in sessionStorage

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/list`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
}

export async function handleGetAllcurrThreadData(threadId) {
  try {
    const accessToken = sessionStorage.getItem("accessToken"); // Assuming the access token is stored in sessionStorage

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
}
