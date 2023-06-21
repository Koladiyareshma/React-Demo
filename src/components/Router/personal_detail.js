import {
    Stack, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
    Typography, FormGroup, Checkbox, Container, InputLabel, Select, MenuItem, TextField, Stepper, Step, StepButton
} from '@mui/material'
import React from 'react'

function Personal_Detail(handleChange,userDetail) {
    
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
                    Register Form
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            name='fname'
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            // helperText={isError.fname}
                            value={userDetail?.fname}
                            onChange={(e)=>handleChange(e)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            name='lname'
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            // helperText={isError.lname}
                            value={userDetail?.lname}
                            onChange={(e)=>handleChange(e)}
                            fullWidth
                        />
                    </Stack>
                    <TextField
                        type="tel"
                        variant='outlined'
                        color='secondary'
                        label="phone No"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        // helperText={isError.phone}
                        fullWidth
                        value={userDetail?.phone}
                        onChange={(e)=>handleChange(e)}
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Age"
                        name="age"
                        // helperText={isError.age}
                        fullWidth
                        value={userDetail?.age}
                        onChange={(e)=>handleChange(e)}
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        name="bod"
                        // helperText={isError.date}
                        fullWidth
                        value={userDetail?.bod}
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
                            name="city"
                            // helperText={isError.city}
                            value={userDetail?.city}
                            onChange={(e)=>handleChange(e)}
                        >
                            {[{ name: 'Surat' }, { name: 'Mumbai' }, { name: 'Rajkot' }].map(e =>
                                <MenuItem value={e.name} name='city'>{e.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                            // helperText={isError.gender}
                            value={userDetail?.gender}
                            onChange={(e)=>handleChange(e)}
                        >
                            {[{ name: 'Female' }, { name: 'Male' }, { name: 'Other' }].map(e =>
                                <FormControlLabel value={e.name} name='gender' control={<Radio />} label={e.name} />)}
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-checkbox-group-label">Hobbies</FormLabel>
                        <FormGroup
                            row
                            // helperText={isError.hobbies}
                            name='hobbies'
                            value={userDetail?.hobbies}
                        >
                            {[{ name: 'Reading' }, { name: 'Writeing' }, { name: 'Typing' }, { name: 'Designing' }].map((e) =>
                                // <FormControlLabel  value={e.name} name='hobbies' control={<Checkbox />} label={e.name} />)}
                                 <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={userDetail?.hobbies?.includes(e.name)}
                                            onChange={(e)=>handleChange(e)}
                                            name='hobbies'
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
                                    onClick={() => handleReset()}>
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 2, color: 'white' }}
                                    onClick={() => handleSubmit()}>
                                        <Link to="/education_detail" className=' text-white text-decoration-none'>
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

export default Personal_Detail