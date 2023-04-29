import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { log } from 'console';

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

export default function UpdatePassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
    
  const [oldPassword, setOldPassword] = useState<string>('');
  const[newpassword,setNewPassword] = useState<string>('');
  const [response, setResponse] = useState<boolean>(false);
  const [apiSuccess, setApiSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')
  const handleClose = () =>{ 
    setOpen(false);
    setOldPassword('');
    setNewPassword('');
    setMessage('');
    setResponse(false);
     }
  const updatePasswordApi = () => {
    axios.post('/api/update-password', {
        
        
            "old_password": oldPassword,
            "new_password": newpassword
          
    })
    .then((res: any) => {
        console.log("calling res",res);
        
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
      <Button variant="contained" style={{margin: '20px'}} onClick={handleOpen}>Update Password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Old Password</b>
          </Typography>
          <TextField
            margin="normal"
            type='password'
            required
            fullWidth
            id="old_password"
            label="Old Password"
            name="password"
            autoComplete="name"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            autoFocus
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>New Password</b>
          </Typography>
          <TextField
            margin="normal"
            type = "password"
            required
            fullWidth
            id="new_password"
            label="New Password"
            name="password"
            autoComplete="name"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoFocus
          />
          <Button variant="contained" component="label" onClick={updatePasswordApi}>
            Update
          </Button>
          {response && <Alert severity={apiSuccess ? "success" : "error"}> {message} </Alert>}
        </Box>
      </Modal>
    </div>
  );
}