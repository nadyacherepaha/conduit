import Cookies from 'js-cookie';

const storagePrefix = 'conduit';

const storage = {
    getToken: () => {
        let cookie = Cookies.get(`${storagePrefix}Token`);
        if(!cookie) return null;
        return JSON.parse(cookie as string);
    },
    setToken: (token: string) => {
        Cookies.set(`${storagePrefix}Token`, JSON.stringify(token), {secure: true})
    },
    clearToken: () => {
        Cookies.remove(`${storagePrefix}Token`, {secure: true})
    },
};

export default storage;
