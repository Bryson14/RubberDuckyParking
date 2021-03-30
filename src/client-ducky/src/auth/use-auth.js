import api from './api'



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

function getMe() {
    api.headers.common.token = localStorage.getItem('token')
    return api.get('users/me/').then(response => {
        return response
    }).catch(error => {
      return error
    })
}

export {signin, getMe}


//   const signup = (email, password) => {

//     return firebase

//       .auth()

//       .createUserWithEmailAndPassword(email, password)

//       .then(response => {

//         setUser(response.user);

//         return response.user;

//       });

//   };

//   const signout = () => {

//     return firebase

//       .auth()

//       .signOut()

//       .then(() => {

//         setUser(false);

//       });

//   };

