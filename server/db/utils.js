import { connection } from './index';

export const query = (querySql, params) => {
  return new Promise((resolve, reject) => {
    return connection.query(querySql, params, (err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    })
  });
};
