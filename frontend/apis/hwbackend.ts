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

export const getUser = async (id: number) => {
    try {
        const data = {
            "id": id
        };
        let response = await axios.post(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/login`, data);

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
export const updateUserById = async (data: any, token: any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        let response = await axios.put(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/updateUserById`, data, config);
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
