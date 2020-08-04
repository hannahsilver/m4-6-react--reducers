import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import seatSrc from "../assets/seat-available.svg";
import { SeatContext } from "./SeatContext";

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
                    {bookedSeats[seatId] ? (
                      <BookedSeat alt="booked-seats" src={seatSrc} />
                    ) : (
                      <StyledTippy
                        content={`Row ${rowName}, Seat ${seatIndex} - $${seats[seatId].price}`}
                      >
                        <img alt="seats" src={seatSrc} />
                      </StyledTippy>
                    )}
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

const BookedSeat = styled.img`
  filter: grayscale(100%);
`;

const StyledTippy = styled(Tippy)`
  background: #222;

  &[data-placement^="bottom"] {
    .tippy-arrow {
      border-bottom-color: #222;
    }
  }
`;

export default TicketWidget;
