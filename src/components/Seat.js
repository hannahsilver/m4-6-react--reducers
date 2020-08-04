import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";
import seatSrc from "../assets/seat-available.svg";

const Seat = (props) => {
  if (props.status === "unavailable") {
    return (
      <button disabled={true}>
        <BookedSeat alt="booked-seats" src={seatSrc} />
      </button>
    );
  } else {
    return (
      <StyledTippy
        content={`Row ${props.rowName}, Seat ${props.seatIndex} - $${props.price}`}
      >
        <button>
          <img alt="seats" src={seatSrc} />
        </button>
      </StyledTippy>
    );
  }
};

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
export default Seat;
