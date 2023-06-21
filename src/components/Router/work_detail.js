import {
    Stack, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
    Typography, FormGroup, Checkbox, Container, InputLabel, Select, MenuItem, TextField
} from '@mui/material'
import React from 'react'

function Work_Detail(handleChange,userDetail) {


    return (
        <>
            <div>   
                {/* <Container component="main" maxWidth="sm">
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
                            color: 'info.main'
                        }}
                    > */}
                <Typography component="h1" variant="h5">
                    Work Exprience Registration
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            name='workfname'
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            // helperText={isError.fname}
                            value={userDetail?.workfname}
                            onChange={(e)=>handleChange(e)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            name='worklname'
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            // helperText={isError.lname}
                            value={userDetail?.worklname}
                            onChange={(e)=>handleChange(e)}
                            fullWidth
                        />
                    </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        name="workemail"
                        // helperText={isError.email}
                        value={userDetail?.workemail}
                        onChange={(e)=>handleChange(e)}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="tel"
                        variant='outlined'
                        color='secondary'
                        label="phone No"
                        name="workphone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        // helperText={isError.phone}
                        fullWidth
                        value={userDetail?.workphone}
                        onChange={(e)=>handleChange(e)}
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        name="jod"
                        // helperText={isError.date}
                        fullWidth
                        value={userDetail?.jod}
                        onChange={(e)=>handleChange(e)}
                        required
                        sx={{ mb: 4 }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            name="workcity"
                            // helperText={isError.city}
                            value={userDetail?.workcity}
                            onChange={(e)=>handleChange(e)}
                        >
                            {[{ name: 'Surat' }, { name: 'Mumbai' }, { name: 'Rajkot' }].map(e =>
                                <MenuItem value={e.name} name='city'>{e.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    
                    {/* <Stack spacing={0} direction="row" sx={{ marginBottom: 4 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => navigate("/education_detail")}>
                            BACK
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 2, color: 'white' }}
                            onClick={() => handleSubmit()}>
                            SUBMIT
                        </Button>
                    </Stack> */}
                </Box>
                {/* </Box> */}
                {/* </Container> */}
            </div>

        </>
    )
}

export default Work_Detail