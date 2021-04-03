import api from './api'
import { useHistory } from "react-router-dom"

const signin = (username, password) => {
  return api.post('api-token-auth/', {
      username: username,
      password: password
  }).then(response => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isAuthenticated', true)
      return response.data.token
  }).catch(error => {
    console.log(error)
  })

};

const signup = (data) => {
  return api.post('users/signup/', data)
}

const signout = () => {
  localStorage.setItem('isAuthenticated', false)
  localStorage.setItem('token', '')
};

function getMe() {
    api.headers.common.token = localStorage.getItem('token')
    return api.get('users/me/').then(response => {
        return response
    }).catch(error => {
      return error
    })
}

export {signin, signup, signout, getMe}


//   const signup = (email, password) => {

//     return firebase

//       .auth()

//       .createUserWithEmailAndPassword(email, password)

//       .then(response => {

//         setUser(response.user);

//         return response.user;

//       });

//   };


