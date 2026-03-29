type LoginPayload = {
    email: string
    password: string
}

type User = {
    id: number
    name: string
    email: string
}

export const AuthService = {
    async login(payload: LoginPayload): Promise<{
        token: string
        user: User
    }> {
        // simulate delay kayak API
        await new Promise((resolve) => setTimeout(resolve, 800))

        // fake validation
        if (payload.email === 'admin@mail.com' && payload.password === '123456') {
            return {
                token: 'fake-jwt-token-123',
                user: {
                    id: 1,
                    name: 'Admin',
                    email: payload.email,
                },
            }
        }

        throw new Error('Invalid credentials')
    },
}