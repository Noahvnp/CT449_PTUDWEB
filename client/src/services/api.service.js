import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};
