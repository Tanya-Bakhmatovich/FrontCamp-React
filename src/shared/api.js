import fetch from 'isomorphic-fetch';
import { HOST, PATH } from '../constants';

// export function fetchBlogs(url) {
//   return fetch(`${HOST}${PATH}/list`)
//     .then((data) => {console.log('dataFetch', data);
//         return data.json()})
//     .then((repos) => {
//         return repos.blogs;})
//     .catch((error) => {
//       // console.warn(error)
//       return null
//     });
// }
