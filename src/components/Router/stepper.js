import { Box, Button, Container, Step, StepButton, Stepper } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Personal_Detail from './personal_detail';
import Education_Detail from './education_detail';
import Work_Detail from './work_detail';
import { Link } from 'react-router-dom';
import { addDetail } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

function StepperBar() {
    const [userDetail, setUserDetail] = useState({})  //hobbies[]
    const [userData, setUserData] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const steps = ['Personal Detail', 'Education Detail', 'Work Detail'];
    const dispatch = useDispatch()

    const handleReset = () => {
        setUserDetail({ fname: '', lname: '', phone: '', age: '', bod: '', city: '', gender: '', hobbies: [] })
    }
    const handleStep = (step) => () => {
        setCurrentStep(step);
    };

    const handleChange = (e) => {debugger
        debugger
        const { name, value, checked } = e.target;
        if (name === "hobbies" || name === "course" || name === "ref") {
            if (checked) {
                const multiArr = userDetail?.name || []
                multiArr.push(value)
                setUserDetail({ ...userDetail, [name]: multiArr })
            } else {
                userDetail.hobbies = userDetail.hobbies.filter(x => x !== value)
            }
        } else {
            setUserDetail({ ...userDetail, [name]: value })
        }
    }
    // const handleChange = (e) => {
    //     setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    // }
    const handleSubmit = () => {
        console.log(userDetail, "---->userDetail");
        userData.push(userDetail)
        console.log(userData, "----->userData");
        setUserData([...userData])
        dispatch(addDetail(userData))
        // setCurrentStep(currentStep + 1)
    }
    return (
        <>
            <Box sx={{ width: '100%', mt: 3 }}>
                <Stepper activeStep={currentStep} steps={steps}>
                    {steps.map((label, index) => (
                        <Step key={label} color='inherit'>
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
                        py: 4,
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: 'info.main'
                    }}>

                    {currentStep === 0 && Personal_Detail(handleChange, userDetail)}
                    {currentStep === 1 && Education_Detail(handleChange, userDetail)}
                    {currentStep === 2 && Work_Detail(handleChange, userDetail)}
                    {/* {currentStep === 3 && Table_Data()} */}

                    {currentStep === 0 &&
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={() => handleReset()}
                        >
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
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            <Link to="/table" className='text-white text-decoration-none'>
                                Submit
                            </Link>
                        </Button>
                    }
                </Box>
            </Container>
        </>
    )
}

export default StepperBar