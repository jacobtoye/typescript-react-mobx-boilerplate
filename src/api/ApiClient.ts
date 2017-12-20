import { RequestError } from './RequestError';

export const API_URL = 'http://localhost:3001';

export namespace ApiClient {
  export const send = (route : string, request : RequestInit) : any | RequestError => {
    request.headers = new Headers({
      'Content-Type': 'application/json',
    });

    return fetch(API_URL + route, request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new RequestError(response.status, response.statusText);
      });
  };
}
