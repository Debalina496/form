import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState<string>('');
  const [response, setResponse] = useState<boolean>(false);
  const [apiSuccess, setApiSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')

  const updateProfileApi = () => {
    axios.post('/api/update-profile', {
        "name" : name
    })
    .then((res: any) => {
        setMessage(res.data.message);
        setApiSuccess(true);
    })
    .catch((err: any) => {
        console.log("err", err);
        setMessage(err.message);
        setApiSuccess(false)
    })
    .finally(() => {
        setResponse(true)
    })
  }

  return (
    <div>
      <Button variant="contained" style={{margin: '20px'}} onClick={handleOpen}>Update Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Update Profile</b>
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <Button variant="contained" component="label" onClick={updateProfileApi}>
            Submit
          </Button>
          {response && <Alert severity={apiSuccess ? "success" : "error"}> {message} </Alert>}
        </Box>
      </Modal>
    </div>
  );
}