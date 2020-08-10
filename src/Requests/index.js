import api from '../Api'

// export const getMember = (id) => api.get(`/?page=${id}`);

export const getMembers = () => api.get(`/members`);
