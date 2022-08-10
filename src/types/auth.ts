export type AuthResponse = {
    data: {
        user: {
            bio: null | string,
            email: string,
            image: null | string,
            token: string,
            username: string,
        }
    }
}
