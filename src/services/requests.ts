import api from './api';
/* USERS */

/* MEMBER */
export const createMember = (data: IMemberData) => api.post('/members', data);

export const getMember = (id: number) => api.get(`/?page=${id}`);

export const getAllMembers = () => api.get('/members');

export const deleteMember = (id: number) => api.delete(`/members/${id}/unhas`);

/* TEAMS */
export const getAllTeams = () => api.get('/teams');

export const getTeam = (id: number) => api.get(`/teams/${id}`);

/* LOGIN */
export const postLogin = (data: { email: string; password: string; }) => api.post(`/authenticate`, data);
