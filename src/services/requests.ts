import api from './api';

// export const getMember = (id) => api.get(`/?page=${id}`);

export const getAllMembers = () => api.get('/members');

export const createMember = (data: IMemberData) => api.post('/members', data);

export const postLogin = (data: { email: string; password: string; }) => api.post(`/authenticate`, data);

export const deleteMember = (id: number) => api.delete(`/members/${id}/unhas`);

export const getAllTeams = () => api.get('/teams');

export const getTeam = (id: number) => api.get(`/teams/${id}`);
