import MainLayout from "../layouts/MainLayout"
import Input from "../components/TextField"
import { useNavigate } from "react-router-dom"

function AddTeacher() {
    const navigate = useNavigate()
    return (
        <>
            <MainLayout>
                <div className="bg-white mt-2 p-2 rounded-lg h-screen">
                    <div className="text-xs">
                        <h1 className="text-lg">Add Teacher</h1>
                        <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}
                        >Dasboard / </span> <span className="text-gray-400 cursor-pointer" onClick={() => navigate('/teacher')}>Teacher / </span> add teacher</p>
                    </div>

                    <div className="mt-4">
                        <h1>Data murid</h1>
                        <div className="flex gap-10 mt-2">
                            <Input type="text" placeholder='Masukan nama' label='Name' />
                            <Input type="text" placeholder='Masukan nama' label='NISN' />
                            <Input type="text" placeholder='Masukan nama' label='Phone' />
                            <Input type="text" placeholder='Masukan nama' label='Class' />
                        </div>
                        <div className="mt-4 flex gap-10">
                            <Input type="text" placeholder='Masukan nama' label='Date of Birth' />
                            <Input type="text" placeholder='Masukan nama' label='Gender' />
                            <Input type="text" placeholder='Masukan nama' label='Blood Group' />
                            <Input type="text" placeholder='Masukan nama' label='Religion' />
                        </div>
                        <div className="mt-4 flex gap-10">
                            <Input type="textarea" placeholder='Masukan nama' label='address' />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1>Parent 1</h1>
                        <div className="flex gap-10 mt-2">
                            <Input type="text" placeholder='Masukan nama' label='Name' />
                            <Input type="text" placeholder='Masukan nama' label='Phone' />
                            <Input type="text" placeholder='Masukan nama' label='Job' />
                            <Input type="textarea" placeholder='Masukan nama' label='address' />
                        </div>
                        <div className="mt-4 flex gap-10">
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-gray-800 text-white w-20 h-10 p-1 text-sm rounded-md ">Save</button>
                        <button className="bg-white w-20 h-10 p-1 text-sm rounded-md">Cancel</button>
                    </div>
                </div>
            </MainLayout>
        </>
    )
} export default AddTeacher