import axios from 'axios';
export const healthCheck = async () => {
    try {
        let response = await axios.get(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}`);
        console.log(response.data);
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const register = async (name: string, pwd: string, mail: string) => {
    try {

        const data = {
            "hwpwd": pwd,
            "hwname": name,
            "hwmail": mail
        };
        console.log(JSON.stringify(data,null,2));
        let response = await axios.post(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/register`, data);

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const login = async (account: string, pwd: string) => {
    try {
        const data = {
            "email": account,
            "pwd": pwd
        };
        let response = await axios.post(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/login`, data);

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}