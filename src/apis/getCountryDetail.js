import axiosAuth from "../lib/axios";

const getCountryDetail = async (name) => {
  try {
    const response = await axiosAuth.get(
      `/name/${name}?fullText=true&&fields=name,capital,region,population,flags,subregion,tld,currencies,languages`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getCountryDetail;
