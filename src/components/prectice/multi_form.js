import {
    Stack, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
    Typography, FormGroup, Checkbox, Container, InputLabel, Select, MenuItem, TextField, Stepper, Step, StepButton
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addDetail } from '../Redux/action'

function Personal_Detail() {
    const tableData = useSelector((state) => state.tableData)
    const userDetails =  {fname:'',lname:'',phone:'',age:'',bod:'',city:'',gender:'',hobbies:[],
                          sfname:'',slname:'',semail:'',sphone:'',scity:'',sgender:'',course:[],
                          wfname:'',wlname:'',wphone:'',wplace:'',jod:'',wcity:'',ref:[]}
    const [userDetail, setUserDetail] = useState({})
    const [userData, setUserData] = useState([])
    const [isError, setIsError] = useState({})
    const [currentStep, setCurrentStep] = useState(0)
    const dispatch = useDispatch()
    const params = useParams()
    const steps = ['Personal Detail', 'Education Detail', 'Work Detail'];

    useEffect(() => {
        const id = params.id;
        console.log(tableData, "---->tabledata");
        console.log(id, '--->');
        if (id && tableData) {
            setUserDetail(tableData[id])
        }
        setUserData(tableData)
    }, []);
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "hobbies" || name === "course" || name === "ref") {
            if (checked) {
                const hobby=[]
                hobby.push(value);
                setUserDetail({ [name]: [hobby, ...userDetail.hobbies] })
                // userDetail.course = [...userDetail.course, value]
                // userDetail.ref = [...userDetail.ref, value]
            } else {
                userDetail.hobbies = userDetail.hobbies.filter(x => x !== value)
                //setUserDetail({ [name]: hobby })
                // userDetail.course = userDetail.course.filter(x => x !== value)
                // userDetail.ref = userDetail.ref.filter(x => x !== value)
            }
           
        } else {
            setUserDetail({ ...userDetail, [name]: value })
        }
    }
    const formvalidation = (name, value) => {
        switch (name) {
            case "fname":
                if (!value) { return "*required"; } else { return ""; }
            case "lname":
                if (!value) { return "*required"; } else { return ""; }
            case "email":
                if (!value) { return "*required"; } else { return ""; }
            case "password":
                if (!value) { return "*required"; } else { return ""; }
            case "bod":
                if (!value) { return "*required"; } else { return ""; }
            case "phone":
                if (value.length < 10) { return "*required"; } else { return ""; }
            case "age":
                if (value < 0) { return "*required"; } else { return ""; }
            case "city":
                if (!value) { return "*required"; } else { return ""; }
            case "gender":
                if (!value) { return "*required"; } else { return ""; }
            case "hobbies":
                if (!value.length > 0) { return "*required"; } else { return ""; }
            default:
                return "";
        }
    }
    const handleSubmit = () => {
        const Error = [];
        const user = userDetail
        Object.keys(user).forEach((key) => {
            const error = formvalidation(key, user[key])
            if (error.length > 0) {
                Error[key] = error
            }
        });
        if (Object.keys(Error).length > 0) {
            setIsError(Error)
            return;
        } else {
            setIsError([])
        }
        console.log(userDetail, "--->userDetail");
        const newdata = tableData;
        const id = params.id;
        if (id) {
            newdata[id] = userDetail
            setUserData([...newdata])
            dispatch(addDetail(newdata))
        }
        else {
            userData.push(userDetail)
            console.log(userData, "--------->userData");
            setUserData([...userData])
            dispatch(addDetail(userData))
        }
        setUserDetail(userDetails)
    }
    const handleReset = () => {
        setUserDetail(userDetails)
    }
    const personal_detail = () => {

        return (
            <>
                <div>

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
                                helperText={isError.fname}
                                value={userDetail.fname}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                type="text"
                                name='lname'
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                helperText={isError.lname}
                                value={userDetail.lname}
                                onChange={handleChange}
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
                            helperText={isError.phone}
                            fullWidth
                            value={userDetail.phone}
                            onChange={handleChange}
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Age"
                            name="age"
                            helperText={isError.age}
                            fullWidth
                            value={userDetail.age}
                            onChange={handleChange}
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            name="bod"
                            helperText={isError.date}
                            fullWidth
                            value={userDetail.bod}
                            onChange={handleChange}
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
                                helperText={isError.city}
                                value={userDetail.city}
                                onChange={handleChange}
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
                                helperText={isError.gender}
                                value={userDetail.gender}
                                onChange={handleChange}
                            >
                                {[{ name: 'Female' }, { name: 'Male' }, { name: 'Other' }].map(e =>
                                    <FormControlLabel value={e.name} name='gender' control={<Radio />} label={e.name} />)}
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-checkbox-group-label">Hobbies</FormLabel>
                            <FormGroup
                                row
                                helperText={isError.hobbies}
                            >
                                {[{ name: 'Reading' }, { name: 'Writeing' }, { name: 'Typing' }, { name: 'Designing' }].map((e) =>
                                    // <FormControlLabel  value={e.name} name='hobbies' control={<Checkbox />} label={e.name} />)}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={userDetail.hobbies?.includes(e.name)}
                                                onChange={handleChange}
                                                name='hobbies'
                                                value={e.name} />
                                        }
                                        label={e.name}
                                    />)}
                            </FormGroup>
                        </FormControl>
                    </Box>
                </div>
            </>
        )
    }
    const education_detail = () => {
        return (
            <>
                <div>

                    <Typography component="h1" variant="h5">
                        Student Form
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                name='sfname'
                                variant='outlined'
                                color='secondary'
                                label="Student Name"
                                helperText={isError.sfname}
                                value={userDetail.sfname}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                type="text"
                                name='slname'
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                helperText={isError.slname}
                                value={userDetail.slname}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='secondary'
                            label="Email"
                            name="semail"
                            helperText={isError.semail}
                            value={userDetail.semail}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="tel"
                            variant='outlined'
                            color='secondary'
                            label="phone No"
                            name="sphone"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            helperText={isError.sphone}
                            fullWidth
                            value={userDetail.sphone}
                            onChange={handleChange}
                            required
                            sx={{ mb: 4 }}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="City"
                                name="scity"
                                helperText={isError.scity}
                                value={userDetail.scity}
                                onChange={handleChange}
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
                                name="sgender"
                                helperText={isError.sgender}
                                value={userDetail.sgender}
                                onChange={handleChange} 
                            >
                                {[{ name: 'Female' }, { name: 'Male' }, { name: 'Other' }].map(e =>
                                    <FormControlLabel value={e.name} name='gender' control={<Radio />} label={e.name} />)}
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-checkbox-group-label">Course</FormLabel>
                            <FormGroup
                                row
                                helperText={isError.course}
                            >
                                {[{ name: 'BBA' }, { name: 'B.Com' }, { name: 'BCA' }, { name: 'B.Sc' }].map((e) =>
                                    // <FormControlLabel  value={e.name} name='course' control={<Checkbox />} label={e.name} />)}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={userDetail.course?.includes(e.name)}
                                                onChange={handleChange}
                                                name='course'
                                                value={e.name} />
                                        }
                                        label={e.name}
                                    />)}
                            </FormGroup>
                        </FormControl>
                    </Box>

                </div>
            </>
        )
    }
    const work_detail = () => {
        return (
            <div>

                <Typography component="h1" variant="h5">
                    Work Exprience Registration
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            name='wfname'
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            helperText={isError.wfname}
                            value={userDetail.wfname}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            name='wlname'
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            helperText={isError.wlname}
                            value={userDetail.wlname}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="work Place"
                        name="wplace"
                        helperText={isError.wplace}
                        value={userDetail.wplace}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="tel"
                        variant='outlined'
                        color='secondary'
                        label="phone No"
                        name="wphone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        helperText={isError.wphone}
                        fullWidth
                        value={userDetail.wphone}
                        onChange={handleChange}
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label='Joning Date'
                        name="jod"
                        helperText={isError.date}
                        fullWidth
                        value={userDetail.jod}
                        onChange={handleChange}
                        required
                        sx={{ mb: 4 }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            name="wcity"
                            helperText={isError.wcity}
                            value={userDetail.wcity}
                            onChange={handleChange}
                        >
                            {[{ name: 'Surat' }, { name: 'Mumbai' }, { name: 'Rajkot' }].map(e =>
                                <MenuItem value={e.name} name='city'>{e.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-checkbox-group-label">How were you referred to us?</FormLabel>
                        <FormGroup
                            row
                            helperText={isError.ref}
                            value={userDetail.ref}>
                            {[{ name: 'Twitter' }, { name: 'Facebook' }, { name: 'Linkedln' }, { name: 'Referral' }].map((e) =>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={userDetail.ref?.includes(e.name)}
                                            onChange={handleChange}
                                            name='ref'
                                            value={e.name} />
                                    }
                                    label={e.name}
                                />)}
                        </FormGroup>
                    </FormControl>
                </Box>

            </div>
        )
    }
    const handleStep = (step) => () => {
        setCurrentStep(step);
      };


    return (
        <>
            <Box sx={{ width: '100%', mt: 3 }}>
                <Stepper  activeStep={currentStep} steps={steps}>
                    {steps.map((label,index)=>(
                         <Step key={label}>
                         <StepButton color="inherit" onClick={handleStep(index)}>
                           {label}
                         </StepButton>
                       </Step>
                    ))}
                </Stepper>
            </Box>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: 'info.main'
                    }}>
                    {currentStep === 0 && personal_detail()}
                    {currentStep === 1 && education_detail()}
                    {currentStep === 2 && work_detail()}

                    {currentStep === 0 &&
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={() => handleReset()}>
                            Reset
                        </Button>
                    }
                    {(currentStep === 0 || currentStep === 1) &&
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={() => setCurrentStep(currentStep + 1)}>
                            Next
                        </Button>
                    }
                    {(currentStep === 1 || currentStep === 2) &&
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={() => setCurrentStep(currentStep - 1)}>
                            Back
                        </Button>
                    }
                    {currentStep === 2 &&
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={() => handleSubmit()}><Link to="/table" className='text-white text-decoration-none'>
                            Submit
                            </Link>
                        </Button>
                    }
                </Box>
            </Container>
        </>
    )
}

export default Personal_Detail