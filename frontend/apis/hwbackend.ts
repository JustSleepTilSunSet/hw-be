import axios from 'axios';
export const healthCheck = async () => {
    try {
        let response = await axios.get(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}`);
        console.log(response.data);
    } catch (err) {

    }
}

export const login = async (account: string, pwd: string) => {
    try {
        const data = {
            "account": account,
            "pwd": pwd
        };
        let response = await axios.post(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/login`, data);
        console.log(response.data);
        return response.data;
    } catch (err) {

    }
}