import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Table_Data() {
    const tableData = useSelector((state) => state.tableData)
    console.log(tableData, "-------------------->tabledata");
    return (
        <>
            <div>
                {tableData.map((x, i) => {
                    return (
                        <>
                            <Container component="main" maxWidth="sm">
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        borderRadius: 2,
                                        px: 3,
                                        py: 3,
                                        marginTop: 5,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",

                                    }}
                                >
                                    <Grid container spacing={1}>
                                        <Grid>
                                            <Typography sx={{ mt: 4, color: 'info.main' }} variant="h6" component="div">
                                                Personal Detail
                                            </Typography>
                                            <List>
                                                <ListItem>
                                                    <ListItemText>First Name:</ListItemText>
                                                    <ListItemText>{x.fname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>First Name:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.lname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Phone No:</ListItemText>
                                                    <ListItemText sx={{ml:2}}>{x.phone}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Age:</ListItemText>
                                                    <ListItemText>{x.age}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Birth Date:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.bod}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>City:</ListItemText>
                                                    <ListItemText>{x.city}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Gender:</ListItemText>
                                                    <ListItemText>{x.gender}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Hobbies:{x.hobbies}</ListItemText>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid>
                                            <Typography sx={{ mt: 4, color: 'info.main' }} variant="h6" component="div">
                                                Education Detail
                                            </Typography>
                                            <List>
                                                <ListItem>
                                                    <ListItemText>First Name:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.studfname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Last Name:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.studlname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Phone No:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.studphone}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Email:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.studemail}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>City:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.studcity}</ListItemText>
                                                </ListItem>
                                                {/* <ListItem>
                                                    <ListItemText>Course:{x.course}</ListItemText>
                                                </ListItem> */}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid>
                                            <Typography sx={{ mt: 4, color: 'info.main' }} variant="h6" component="div">
                                                Work Exprience Detail
                                            </Typography>
                                            <List>
                                                <ListItem>
                                                    <ListItemText>First Name:</ListItemText>
                                                    <ListItemText  sx={{ml:2}}>{x.workfname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Last Name:</ListItemText>
                                                    <ListItemText sx={{ml:2}}>{x.worklname}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Phone No:</ListItemText>
                                                    <ListItemText sx={{ml:2}}>{x.workphone}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Email:</ListItemText>
                                                    <ListItemText sx={{ml:5}}>{x.workemail}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>Joining Date:</ListItemText>
                                                    <ListItemText sx={{ml:5}}>{x.jod}</ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText>City:</ListItemText>
                                                    <ListItemText sx={{ml:2}}>{x.workcity}</ListItemText>
                                                </ListItem>
                                                {/* <ListItem>
                                                    <ListItemText>ref:{x.ref}</ListItemText>
                                                </ListItem> */}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Container>
                        </>
                    )
                })}
            </div >
        </>
    )
}
export default Table_Data