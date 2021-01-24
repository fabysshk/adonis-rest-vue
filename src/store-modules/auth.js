import {authService} from "../services";
import router from "../router";

const auth = {
    state: {
        token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
        authErrors: [],
    },
    mutations: {
        setToken(state, userToken) {
            const {type, token} = userToken;
            localStorage.setItem("token", `${type} ${token}`);
            state.token = `${type} ${token}`;
            router.push("/");
        },
        clearToken(state) {
            state.token = "";
            localStorage.clear();
            router.push("/auth?message=login");
        },
        clearErrors(state) {
            state.authErrors = [];
        },
        setErrors(state, errors) {
            state.authErrors.unshift(errors);
        }
    },
    actions: {
        async login(ctx, user) {
            const userToken = await authService.login(user);
            ctx.commit("setToken", userToken);
            ctx.commit("clearErrors");
        },
        async register(ctx, user) {
            const userToken = await authService.register(user);
            ctx.commit("setToken", userToken);
            ctx.commit("clearErrors");
        },
        setErrors(ctx, err) {
            ctx.commit("setErrors", err);
        },

        logOut(ctx) {
            ctx.commit("clearToken");
        }
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getAuthErrors(state) {
            return state.authErrors;
        }
    }
};

export {auth};
