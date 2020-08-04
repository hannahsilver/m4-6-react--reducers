import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

const TicketWidget = () => {
  // TODO: use values from Context

  const {
    state: { numOfRows, seatsPerRow, hasLoaded, seats, bookedSeats },
  } = React.useContext(SeatContext);

  console.log(bookedSeats, "seats");

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag

  if (hasLoaded === false) {
    return (
      <>
        <CircularProgress />
      </>
    );
  } else {
    return (
      <Wrapper>
        {range(numOfRows).map((rowIndex) => {
          const rowName = getRowName(rowIndex);

          return (
            <Row key={rowIndex}>
              <RowLabel>Row {rowName}</RowLabel>
              {range(seatsPerRow).map((seatIndex) => {
                const seatId = `${rowName}-${getSeatNum(seatIndex)}`;

                return (
                  <SeatWrapper key={seatId}>
                    <Seat
                      rowName={rowName}
                      rowIndex={rowIndex}
                      seatIndex={seatIndex}
                      price={seats[seatId].price}
                      status={bookedSeats[seatId] ? "unavailable" : "available"}
                    />
                  </SeatWrapper>
                );
              })}
            </Row>
          );
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  color: #222;
  font-weight: bold;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
