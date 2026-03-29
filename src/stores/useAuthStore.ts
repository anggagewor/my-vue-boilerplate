import { defineStore } from 'pinia'

interface User {
    id: number
    name: string
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        token: localStorage.getItem('token'),
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        setAuth(token: string, user: User) {
            this.token = token
            this.user = user
            localStorage.setItem('token', token)
        },

        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
})