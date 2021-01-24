import Axios from "axios";
import store from "../store";

const url = "/auth/";

class AuthService {
    async login(user) {
        try {
            const res = await Axios.post(`${url}login`, user);
            const userToken = await res.data;
            return userToken;
        } catch (error) {

            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                store.dispatch("setErrors",error.response.data);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            throw new Error(error);
        }
    }

    async register(user) {
        try {
            const res = await Axios.post(`${url}register`, user);
            const userToken = await res.data;
            return userToken;
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                store.dispatch("setErrors",error.response.data);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            throw new Error(error);
        }
    }
}

const authService = new AuthService();

export {authService};
