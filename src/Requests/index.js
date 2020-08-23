import api from '../Api'

// export const getMember = (id) => api.get(`/?page=${id}`);

export const getMembers = () => api.get(`/members/1`);

export const postMembers = (data) => api.post(`/members/1`, data);

export const deleteMembers = (id) => api.delete(`/members/1/${id}`);