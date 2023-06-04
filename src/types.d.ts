type User = {
    email: string,
    bio: string | null,
    image: string,
    token: string,
    username: string,
};

type UserResponse = {
    user: User,
};

type GetArticlesResponse = {
    articles: Article[],
    articlesCount: number,
};

type Article = {
    author: Profile,
    authorId?: number,
    body?: string,
    createdAt: string,
    description: string,
    favorited: boolean,
    favoritedBy?: {
        bio: string | null,
        demo: boolean,
        email: string,
        id: number,
        image: string | null,
        password: string,
        username: string,
    }[],
    favoritesCount: number,
    id?: number,
    slug: string,
    tagList: string[],
    title: string,
    updatedAt?: string,
};

type Profile = {
    username: string,
    image: string,
    bio?: null | string,
    following?: boolean,
};
