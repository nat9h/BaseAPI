const axios = require("axios");

exports.luminai = async (q, username) => {
  try {
    const response = await axios.post("https://luminai.siputzx.my.id/sesi", {
      content: q,
      user: username,
    });
    return response.data.result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};
