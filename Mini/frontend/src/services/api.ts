// Importa a biblioteca axios, usada para fazer requisições HTTP.
import axios from 'axios';

// Cria uma instância do axios com uma URL base.
// Todas as requisições feitas com essa instância usarão esse endereço como base.
const API = axios.create({
  baseURL: 'http://localhost:3000', // URL do backend (NestJS)
});

// ============================
// MÉTODOS DE REQUISIÇÃO HTTP
// ============================

// Busca todos os vídeos disponíveis.
export const getVideos = () => API.get('/video');

// Envia uma reação do tipo 'gostei' (ou outro) para um vídeo.
// Recebe o ID do vídeo, o ID do usuário, e opcionalmente o tipo da reação.
export const postLike = (videoId: string, userId: string, type = 'gostei') =>
  API.post('/reaction', { videoId, user: userId, type });

// Envia um comentário para um vídeo.
// Recebe o ID do vídeo, o ID do usuário e o conteúdo do comentário.
export const postComment = (videoId: string, userId: string, content: string) =>
  API.post('/comment', { videoId, user: userId, content });

// Cria um novo usuário com o nome fornecido.
export const createUser = (name: string) => API.post('/user', { name });

// Cria um novo vídeo com título e ID do usuário dono (owner).
export const postVideo = (title: string, owner: string) => API.post('/video', { title, owner });
