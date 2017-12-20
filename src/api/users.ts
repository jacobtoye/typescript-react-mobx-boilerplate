import { HttpMethods } from 'enums';
import { ApiClient } from './ApiClient';

export const fetchUser = (userId : number) => {
  const request : RequestInit = {
    method: HttpMethods.GET,
  };

  return ApiClient.send(`/user/${userId}`, request)
    .then((data) => {
      return data;
    });
};
