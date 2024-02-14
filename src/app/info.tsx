"use client";

import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export default function Info() {

    const [open, setOpen] = useState(true);

    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Send a heart warming message to your loved one and share the link"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>- Click the Plus Icons to create a message</p>
            <p>- After create a message you would be able to share the link from the Screen</p>
            <p>- You can automatically generate message and edit it after it is generated</p>
            <p>- You can also set the type fof font you want your write up to be in</p>
            <p>- Click close to start sharing message</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
