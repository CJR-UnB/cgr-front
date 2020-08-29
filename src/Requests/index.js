import api from '../Api'

// export const getMember = (id) => api.get(`/?page=${id}`);

export const getMembers = () => api.get(`/members`);

export const postMembers = (data) => api.post(`/members`, data);

export const deleteMembers = (id) => api.delete(`/members/${id}`);

export const getTeams = () => api.get('/teams');

export const getTeam = (id) => api.get(`/teams/${id}`);