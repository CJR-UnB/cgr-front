import { createContext } from 'react';

const AuthContext = createContext({
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setToken: () => {},
});

export default AuthContext;

// export const isAuthenticated = () => false;
// import api from 'services/api';
/* export default function AuthProvider({ children }){
    // const [user, setUser] = useState(null);
    const [autheticaded, setAuthenticated] = useState(false);

    async function handleLogin() {
        const { data: {token} } = await api.post('/autheticate');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization=`Bearer ${token}`;

        setAuthenticated(true);
    }

    const signIn = (email, password) => {
        const data = {"email": email, "password": password};
        postLogin(data).then((res) => {
            setUser(res.data.user);
            localStorage.setItem('SessionToken', res.data.token);
        })
    };
    
    const signOut = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{ autheticaded, handleLogin}}>
            { children }
        </AuthContext.Provider>
    );
} */