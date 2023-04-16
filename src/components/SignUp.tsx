import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Record<string, string>>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpCall();
};

const signUpCall = async() => {
      await axios.post("/api/signup", formData)
        .then(() => {
            navigate('/');
        })
        .catch((err: any) => {
          console.log(err);
      })
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"        
          >
            Sign up
          </Button>
        </form>
        <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"I have already an Account!"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
};

export default SignUp;
