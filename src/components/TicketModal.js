import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { BookingContext } from "./BookingContext";

const TicketModal = () => {
  const [open, setOpen] = React.useState(false);
  const { selectedSeatId, status, price } = React.useContext(BookingContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={selectedSeatId !== null}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Purchase ticket</DialogTitle>
        <p>You're purchasing the ticket for the price of $139</p>
        <DialogContent>
          <DialogContentText>Enter payment details</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="credit card"
            type="credit"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="expiration"
            type="credit"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TicketModal;
