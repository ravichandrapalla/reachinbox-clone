import axios from "axios";
import { toast } from "react-hot-toast";

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

export async function handleDeleteAllcurrThreadData(threadId) {
  try {
    const accessToken = sessionStorage.getItem("accessToken"); // Assuming the access token is stored in sessionStorage

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.message;
    }
  } catch (error) {
    return error.message;
  }
}
export async function handleReplyEmail(threadId, data) {
  console.log("sending", data);
  try {
    const accessToken = sessionStorage.getItem("accessToken"); // Assuming the access token is stored in sessionStorage

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.post(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data || response.message;
    }
  } catch (error) {
    return error.message;
  }
}

export async function reset() {
  try {
    const accessToken = sessionStorage.getItem("accessToken"); // Assuming the access token is stored in sessionStorage

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reset`,
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
