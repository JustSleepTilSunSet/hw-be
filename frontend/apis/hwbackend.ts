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

export const getUserById = async (id: number, token: string | null) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/getUserById`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            params: {
                "id": id
            }
        });
        // const data = {
        //     "id": id
        // };
        // let response = await axios.post(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/login`, data);

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

export const getUsers = async (token: any) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/getUsers`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
        // let response = await axios.get(`${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/getUsers`);

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const deleteUserById = async (data: any, token: string | null) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${process.env.VUE_APP_BACKEND_HOST}${process.env.VUE_APP_USERS_PATH}/deleteUserById`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data
        });

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}