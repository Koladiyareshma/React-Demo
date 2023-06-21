import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";

function Login() {
  let useremail = ""
  let userpass = ""
  let blackobj={email:'',password:''}
  const [userEmail, setuserEmail] = useState([])
  const [userPassword, setuserPassword] = useState([])
  const [userobject, setuserobject] = useState(blackobj)
  const [userData, setuserData] = useState([])

  const setdata1 = (e) => {
    useremail = e.target.value
    setuserEmail(useremail)
    setuserData(useremail)
  }
  const setdata2 = (e) => {
    userpass = e.target.value
    setuserPassword(userpass)
    setuserData(userPassword)
  }

  const handleSubmit = () => {
    // let object = userData.find(x => x.email === userobject.email && x.password === userobject.password)
    // console.log(object,"--->object");
    // if (object.email === userobject.email && object.password === userobject.password) {
    let obj1 = userEmail.find((e, i) => {
      return e.email === useremail
    })
    let obj2 = userPassword.find((e, i) => {
      return e.password === userpass
    })
    if (obj1.id == obj2.id) {
      window.location.href = '/table'
      localStorage.setItem('isLogin', true)
    }
    else if ((obj1.email === obj2.email && obj1.pwd !== obj2.pwd)) {
      alert("Authentication fail! Please Enter Your password")
    }
    else if ((obj1.email === obj2.email && obj1.pwd === obj2.pwd)) {
      alert("Authentcation fail! Please Enter Your Email")
    }
    else if ((obj1.email !== obj2.email && obj1.pwd !== obj2.pwd)) {
      alert("Invalid Information")
    }
  // }
}
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:'info.main'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={setdata1}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={setdata2}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Login