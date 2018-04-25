export const RESET_ROLL = 'styleSwitcher/RESET_ROLL';
export const ROLL_DICE = 'styleSwitcher/ROLL_DICE';

const initialState = {
  rollNumber: 1,
  message: 'classic theme',
  theme: 'default',
  style: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_ROLL:
      return {
        rollNumber: 1,
        theme: 'default',
        message: 'a return to normalcy'
      };

    case ROLL_DICE:
      console.log(action, 'action');
      console.log(state.style, 'initialState.style');
      const newStyle = state.style;
      console.log(!newStyle, '!newStyle');
      return {
        ...state,
        rollNumber: action.rollNumber,
        theme: action.theme,
        message: action.message,
        style: !newStyle
      };

    // case DECREMENT_REQUESTED:
    //   return {
    //     ...state,
    //     isDecrementing: true
    //   };
    // https://daveceddia.com/random-numbers-in-redux/
    // https://carrd.co --> layout inspiration

    default:
      return state;
  }
};

export const rollDice = (rollNumber, message, theme, dispatch) => {
  const thisRoll = Math.floor(Math.random() * (21 - 1)) + 1;
  switch (thisRoll) {
    case 13:
      // return (
      // 	theme = "eight-bit",
      // 	message = "Mario Time!",
      // 	rollNumber = 13,
      // 	console.log(theme, rollNumber, message, "theme and roll")
      // )
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 13,
          message: 'Mario Time!',
          theme: 'eight-bit'
        });
      };
    case 14:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 14,
          message: 'Mario Time!',
          theme: 'eight-bit'
        });
      };
    case 21:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 21,
          message: 'Mario Time!',
          theme: 'eight-bit'
        });
      };
    case 15:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 15,
          message: "Is it hot in here, or is it just Marilyn's hot wall?",
          theme: 'hot-wall'
        });
      };
    case 16:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 16,
          message: "Is it hot in here, or is it just Marilyn's hot wall?",
          theme: 'hot-wall'
        });
      };
    case 17:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 17,
          message: "Is it hot in here, or is it just Marilyn's hot wall?",
          theme: 'hot-wall'
        });
      };
    case 18:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 18,
          message: "Ohh dere's a keeety...",
          theme: 'cats'
        });
      };
    case 19:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 19,
          message: "Ohh dere's a keeety...",
          theme: 'cats'
        });
      };
    case 20:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: 20,
          message: "Ohh dere's a keeety...",
          theme: 'cats'
        });
      };
    default:
      return dispatch => {
        dispatch({
          type: ROLL_DICE,
          rollNumber: Math.floor(Math.random() * (12 - 1)) + 1,
          message: "Keepin' it classy.",
          theme: 'default'
        });
      };
  }
};

// export const randomRoll = () => {
// 	return Math.floor(Math.random() * (21 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
// };

// export const randomRoll = (theme, message, rollNumber) => {
// 	switch (Math.floor(Math.random() * (21 - 1)) + 1) {
// 		case 13:
// 			return (
// 				theme = "eight-bit",
// 				message = "Mario Time!",
// 				rollNumber = 13,
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 14:
// 			return (
// 				theme = "eight-bit",
// 				message = "Mario Time!",
// 				rollNumber = 14,
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 21:
// 			return (
// 				theme = "eight-bit",
// 				message = "Mario Time!",
// 				rollNumber = 21,
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 15:
// 			return (
// 				theme = "hot-wall",
// 				rollNumber = 15,
// 				message = "Is it hot in here, or is it just Marilyn's hot-wall?",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 16:
// 			return (
// 				theme = "hot-wall",
// 				rollNumber = 16,
// 				message = "Is it hot in here, or is it just Marilyn's hot-wall?",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 17:
// 			return (
// 				theme = "hot-wall",
// 				rollNumber = 17,
// 				message = "Is it hot in here, or is it just Marilyn's hot-wall?",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 18:
// 			return (
// 				theme = "cats",
// 				rollNumber = 18,
// 				message = "Ohh dere's a keeety...",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 19:
// 			return (
// 				theme = "cats",
// 				rollNumber = 19,
// 				message = "Ohh dere's a keeety...",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		case 20:
// 			return (
// 				theme = "cats",
// 				rollNumber = 20,
// 				message = "Ohh dere's a keeety...",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 		default:
// 			return (
// 				theme = "default",
// 				rollNumber = (Math.floor(Math.random() * (12 - 1)) + 1),
// 				message = "Keepin' it classy.",
// 				console.log(theme, rollNumber, message, "theme and roll")
// 			)
// 	}
// 	//return Math.floor(Math.random() * (21 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
// };

export const resetRoll = () => {
  return dispatch => {
    dispatch({
      type: RESET_ROLL,
      rollNumber: 0
    });
  };
};

// export const decrement = () => {
//   return dispatch => {
//     dispatch({
//       type: DECREMENT_REQUESTED
//     });

//     dispatch({
//       type: DECREMENT
//     });
//   };
// };

// export const decrementAsync = () => {
//   return dispatch => {
//     dispatch({
//       type: DECREMENT_REQUESTED
//     });

//     return setTimeout(() => {
//       dispatch({
//         type: DECREMENT
//       });
//     }, 3000);
//   };
// };
