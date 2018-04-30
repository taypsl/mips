import axios from 'axios';
// import RESPONSE_URL from './.env'
export const SUBMIT_FORM = 'submitForm/SUBMIT_FORM'
export const SUBMIT_FORM_SUCCESS = 'submitForm/SUBMIT_FORM_SUCCESS'
export const SUBMIT_FORM_FAILURE = 'submitForm/SUBMIT_FORM_FAILURE'

const RESPONSE_URL = 'https://script.google.com/macros/s/AKfycbzrYqk0GHc_B7vhHpwYAhqzGaQ2WQbP-EpnJ0LJpzvagKd52d2U/exec'
const initialState = {
  message: 'Don\'t forget to RSVP!'
};

export const submitForm = (props) => {
	console.log('submit form action')
  const request = axios({
    method: 'get',
    data: props,
    url: `${RESPONSE_URL}`,
    //headers: [],
    // mode: 'no-cors',
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    // },
    withCredentials: true,
    credentials: 'same-origin',
    crossDomain: true
  });

  return dispatch => {
  	dispatch({
      type: SUBMIT_FORM,
      payload: request
    });
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
    	console.log('submit form loading')
      return {
        ...state,
        message: 'Hold please...'
      };

    case SUBMIT_FORM_SUCCESS:
    	console.log('submit form success')
      return {
        ...state,
        message: 'Thanks for your response! If you have any questions or need to modify your response, contact Jane Bradford at bradfordjane@gmail.com'
      };

    case SUBMIT_FORM_FAILURE:
    	console.log('submit form failed')
      return {
        ...state,
        message: 'Whoops, something went wrong! Please refresh the page and try submitting again.'
      };

    default:
      return state;
  }
};



// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

// export function createPost(props, tokenFromStorage) {
//   const request = axios({
//     method: 'post',
//     data: props,
//     url: `${ROOT_URL}/rsvp`,
//     // headers: {
//     //   'Authorization': `Bearer ${tokenFromStorage}`
//     // }
//   });

//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// }

// export function createPostSuccess(newPost) {
//   return {
//     type: CREATE_POST_SUCCESS,
//     payload: newPost
//   };
// }

// export function createPostFailure(error) {
//   return {
//     type: CREATE_POST_FAILURE,
//     payload: error
//   };
// }


// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });