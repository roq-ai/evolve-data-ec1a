import axios from 'axios';
import queryString from 'query-string';
import { UserSpaceInterface, UserSpaceGetQueryInterface } from 'interfaces/user-space';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserSpaces = async (
  query?: UserSpaceGetQueryInterface,
): Promise<PaginatedInterface<UserSpaceInterface>> => {
  const response = await axios.get('/api/user-spaces', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserSpace = async (userSpace: UserSpaceInterface) => {
  const response = await axios.post('/api/user-spaces', userSpace);
  return response.data;
};

export const updateUserSpaceById = async (id: string, userSpace: UserSpaceInterface) => {
  const response = await axios.put(`/api/user-spaces/${id}`, userSpace);
  return response.data;
};

export const getUserSpaceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-spaces/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserSpaceById = async (id: string) => {
  const response = await axios.delete(`/api/user-spaces/${id}`);
  return response.data;
};
