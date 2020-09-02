import React from "react";

import GlobalStyles from "./GlobalStyles";
import { SeatContext } from "./SeatContext";
import { BookingContext } from "./BookingContext";
import TicketWidget from "./TicketWidget";
import TicketModal from "./TicketModal";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer },
  } = React.useContext(SeatContext);
  const {
    actions: {},
    status,
  } = React.useContext(BookingContext);

  React.useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, [receiveSeatInfoFromServer]);

  return (
    <>
      <GlobalStyles />
      {/* This venue has {numOfRows} rows */}
      <TicketWidget />
      {/* <TicketModal /> */}
    </>
  );
}

export default App;
