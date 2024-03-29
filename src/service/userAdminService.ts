import axios from 'axios';
import { User } from '../interface/userModel';

const baseURL = 'https://it-noticias-api-dev-rqzq.3.us-1.fl0.io';

const userAdmService = {

    registrarUsuario: async (nuevoUser: User) => {
        const response = await axios.post(`${baseURL}/user`, nuevoUser);
        return response.data;
    },

    editarUsuario: async (id: string, usuarioEditado: Partial<User>) => {
        const response = await axios.put(`${baseURL}/user/${id}`, usuarioEditado);
        return response.data;
    },


    listarUsuarios: async () => {
        const response = await axios.get(`${baseURL}/user`);
        return response.data;
    },

    eliminarUsuario: async (id: string) => {
        const response = await axios.delete(`${baseURL}/user/${id}`);
        return response.data;
    }
};

export default userAdmService;