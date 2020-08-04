import React from "react";

export const SeatContext = React.createContext();

const initialState = {
  hasLoaded: false,
  seats: null,
  numOfRow: 0,
  seatsPerRow: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "receive-seat-info-from-server": {
      return {
        ...state,
        hasLoaded: true,
        seats: action.payload.seats,
        numOfRows: action.payload.numOfRows,
        seatsPerRow: action.payload.seatsPerRow,
      };
    }
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const SeatProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = (data) => {
    dispatch({
      type: "receive-seat-info-from-server",
      payload: { ...data },
    });
  };

  return (
    <SeatContext.Provider
      value={{
        state,
        actions: {
          receiveSeatInfoFromServer,
        },
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

//NOTES FROM SADNAN:

// const reducerExample = (currentState, action) => {
//   let newState = { ...currentState };
//   switch (action.type) {
//     case "receive-seats":
//       newState.hasLoaded = true;
//       newState.seats = actions.payload.seats;
//       //return newState;
//       break;
//     case "send-seats":
//       newState.hasLoaded = false;
//       newState.seats = actions.payload.seats;
//       //return newState;
//       break;
//     default:
//       throw new Error(`Unrecognized action: ${action.type}`);
//   }
//   return newState;
// };

// const {
//   state,
//   action: { receiveSeatInfoFromServer },
// } = useContext(SeatContext);
// receiveSeatInfoFromServer(data);
