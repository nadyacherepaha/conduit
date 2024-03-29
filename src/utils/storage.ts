const name = 'conduitToken';

const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    if (match) return match[2];
    
return;
};

const storage = {
    getToken: () => {
        const cookie = getCookie(name);
        if (!cookie) return null;

        return cookie;
    },
    setToken: (token: string) => {
        document.cookie = `${name}=${token}`;
    },
    clearToken: () => {
        document.cookie = `${name}=; Max-Age=-99999999;`;
    },
};

export default storage;
