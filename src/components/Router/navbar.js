import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{mr:'20px'}} >
            <Link to='/personal_detail' className=' text-white text-decoration-none'>Personal_Detail</Link>
          </Typography>
          <Typography component="div" sx={{mr:'20px'}} >
            <Link to='/education_detail' className=' text-white text-decoration-none'>Education_Detail</Link>
          </Typography>
          <Typography component="div" sx={{mr:'20px'}} >
            <Link to='/work_detail' className=' text-white text-decoration-none'>Work_Detail</Link>
          </Typography>
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            <Link to='/table' className=' text-white text-decoration-none'>Table</Link>
          </Typography>
          <Button color="inherit"><Link to='/login' className=' text-white text-decoration-none'>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar