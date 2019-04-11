const API_URL = process.env.REACT_APP_API_URL + '/users';

export const getUsers = () => {
  return fetch(API_URL)
  .then(res => res.json());
};

