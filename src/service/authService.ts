import axios from 'axios';

const baseURL = 'https://it-noticias-api-dev-rqzq.3.us-1.fl0.io/';

const authService = {
    authenticateUser: async (logearUsuario: any) => {
        const response = await axios.post(`${baseURL}/login`, logearUsuario);
        return response.data;
    },
};

export default authService;