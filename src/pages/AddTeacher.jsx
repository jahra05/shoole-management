import MainLayout from "../layouts/MainLayout"
// import Input from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Box, Chip, FormControl, InputLabel, Stack, Typography, Input, Select, MenuItem, Button } from "@mui/material"
import { useState } from "react"

function AddTeacher() {
    const navigate = useNavigate()
    const [desc, setDesc] = useState('')
    const handleChange = (event) => {
        setDesc(event.target.value)
    }
    return (
        <>
            <MainLayout>
                <div className="bg-white h-screen px-4 py-2 rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Add Teacher
                            </Typography>
                            <p className="text-xs"><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dashboard /
                            </span> <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/teacher')}>Teacher / </span>Add Teacher</p>
                        </div>
                    </div>


                    <div className=" p-2  flex  gap-20 mt-4">
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Stack direction='row' spacing={2} sx={{}}>
                                <p className="text-xl font-medium">Profil Student</p>
                                <FormControl sx={{ m: 1, minWidth: 120, height: 10 }} size="small" >
                                    <Select value={desc} sx={{ height: 24, width: 100, borderRadius: 100, fontSize: 12 }}
                                        onChange={handleChange}>
                                        <MenuItem value='active' sx={{ fontSize: 12 }}>Full Time</MenuItem>
                                        <MenuItem value='nonactive' sx={{ fontSize: 12 }}>Part Time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack spacing={4}>
                                <Stack direction='row' spacing={10} >
                                    <FormControl variant="standard">
                                        <InputLabel >Name</InputLabel>
                                        <Input defaultValue="Name" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel >NIP</InputLabel>
                                        <Input defaultValue="Nip" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel >Date Of Birth</InputLabel>
                                        <Input defaultValue="Date of birth" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                </Stack>

                                <Stack direction='row' spacing={10} >
                                    <FormControl variant="standard">
                                        <InputLabel >Email</InputLabel>
                                        <Input defaultValue="Email" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel >Address</InputLabel>
                                        <Input defaultValue="Address" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                </Stack>
                            </Stack>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 4 }}>
                            <p className="text-xl font-medium">Education</p>
                            <Stack spacing={4}>
                                <Stack direction='row' spacing={10} >
                                    <FormControl variant="standard">
                                        <InputLabel >Name</InputLabel>
                                        <Input defaultValue="Composed TextField" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel >No Headphone</InputLabel>
                                        <Input defaultValue="Composed TextField" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                </Stack>
                                <Stack direction='row' spacing={10} >
                                    <FormControl variant="standard">
                                        <InputLabel >Job</InputLabel>
                                        <Input defaultValue="Composed TextField" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel >Address</InputLabel>
                                        <Input defaultValue="Composed TextField" sx={{ fontSize: 14, }} />
                                    </FormControl>
                                </Stack>
                            </Stack>
                        </Box>
                    </div>
                    <Stack direction='col' sx={{ marginTop: 10, gap: 2 }} >
                        <Button variant="contained" sx={{ width: 12, fontSize: 12, height: 32 }}>Save</Button>
                        <Button variant="outlined" sx={{ width: 12, fontSize: 12, height: 32 }}>Cancel</Button>
                    </Stack>
                </div>
            </MainLayout>
        </>
    )
} export default AddTeacher