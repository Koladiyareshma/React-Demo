import {
    Stack, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
    Typography, FormGroup, Checkbox, Container, InputLabel, Select, MenuItem, TextField
} from '@mui/material'
import React from 'react'

function Education_Detail(handleChange, userDetail) {

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
                    Student Form
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            name='studfname'
                            variant='outlined'
                            color='secondary'
                            label="Student Name"
                            value={userDetail?.studfname}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            name='studlname'
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            value={userDetail?.studlname}
                            onChange={(e) => handleChange(e)}
                            fullWidth
                        />
                    </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        name="studemail"
                        // helperText={isError.email}
                        value={userDetail?.studemail}
                        onChange={(e) => handleChange(e)}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="tel"
                        variant='outlined'
                        color='secondary'
                        label="phone No"
                        name="studphone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        // helperText={isError.phone}
                        fullWidth
                        value={userDetail?.studphone}
                        onChange={(e) => handleChange(e)}
                        required
                        sx={{ mb: 4 }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            name="studcity"
                            // helperText={isError.city}
                            value={userDetail?.studcity}
                            onChange={(e) => handleChange(e)}
                        >
                            {[{ name: 'Surat' }, { name: 'Mumbai' }, { name: 'Rajkot' }].map(e =>
                                <MenuItem value={e.name} name='studcity'>{e.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="studgender"
                            // helperText={isError.gender}
                            value={userDetail?.studgender}
                            onChange={(e) => handleChange(e)}
                        >
                            {[{ name: 'Female' }, { name: 'Male' }, { name: 'Other' }].map(e =>
                                <FormControlLabel value={e.name} name='studgender' control={<Radio />} label={e.name} />)}
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-checkbox-group-label">Course</FormLabel>
                        <FormGroup
                            row
                        >
                            {[{ name: 'BBA' }, { name: 'B.COM' }, { name: 'BCA' }, { name: 'B.SC' }].map((e) =>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={userDetail.course?.includes(e.name)}
                                            onChange={(e) => handleChange(e)}
                                            name='course'
                                            value={e.name}
                                        />
                                    }
                                    label={e.name}
                                />)}
                        </FormGroup>
                    </FormControl>
                    {/* <Stack spacing={0} direction="row" sx={{ marginBottom: 4 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => navigate("/personal_detail")}>
                            BACK
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 2, color: 'white' }}
                            onClick={() => handleNext()}>
                            <Link to="/work_detail" className=' text-white text-decoration-none'>
                                NEXT
                            </Link>
                        </Button>
                    </Stack> */}
                </Box>
                {/* </Box> */}
                {/* </Container> */}
            </div>

        </>
    )
}

export default Education_Detail