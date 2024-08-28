import axiosAuth from "../lib/axios";

const getAllCountries = async () => {
  try {
    const response = await axiosAuth.get(
      `/all?fields=name,capital,region,population,flags`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAllCountries;
