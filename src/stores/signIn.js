import { defineStore } from "pinia";
export const userStore = defineStore("account",{
    state: () => ({
        userInfo: {
            account: '',
            password: '',
        }
    }),
});
