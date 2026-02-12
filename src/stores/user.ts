import { defineStore } from "pinia";
import { ref } from "vue";
import axiosRiksiri from "@/axios/axiosRiksiri";
export const useUserStore = defineStore('user', () => {
    const registro = ref({
        usuario: null,
        email: null,
        password: null,
    });
    const login = ref({
        username: null,
        password: null,
    });
    function $login() {
        return axiosRiksiri.post('auth/login/', {
            username: login.value.username,
            password: login.value.password,
        })
    }
    return { registro, login, $login);
});