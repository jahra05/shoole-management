import { EllipsisVertical, Plus, Search, SlidersHorizontal } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import { useNavigate } from "react-router-dom"
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material"
import { useState } from "react"


const coloumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'nisn', label: 'NISN', minWidth: 100 },
    { id: 'kelas', label: 'Class', },
    { id: 'spp', label: 'Spp', },
    { id: 'status', label: 'Status', },
]
function createData(name, nisn, kelas, spp, status) {
    return { name, nisn, kelas, spp, status }
}

const rows = [
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),
    createData('jahra', 24224, '12 Rpl 2', 'Perempuan', 'Lunas'),

]


function Payment() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [rowPage, setRowPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleRowspage = (event) => {
        setRowPage(+event.target.value);
        setPage(0)
    }
    return (
        <>
            <MainLayout>
                <div className="bg-white px-4 py-2 rounded-lg h-screen">
                    <div className="flex justify-between">

                        <div className="text-xs">
                            <Typography variant='h5' sx={{ color: "#353843", fontWeight: 'bold', }}>
                                Payment
                            </Typography>
                            <p><span className="text-gray-400 cursor-pointer" onClick={() => navigate('/dasboard')}>Dasboard / </span>
                                Payment</p>
                        </div>
                    </div>
                    <div className="bg-white  rounded-md w-full overflow-x-auto flex flex-col gap-4 border border-[#f3f3f3] mt-4">
                        <div className="flex m-2 justify-end gap-4">
                            <div className="flex gap-4 items-center px-2 rounded-lg w-[20%] border ">
                                <span><Search size={18} /></span>
                                <input type="search" placeholder="Searching" className="p-0 border-none outline-none rounded-lg w-[80%] border border-[#E5ECF0] bg-white" />
                            </div>
                            <span className="flex gap-4 items-center bg-white p-2 border  border-[#E5ECF0] rounded-lg text-sm w-20">Filter<SlidersHorizontal size={18} /></span>
                        </div>

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {coloumns.map((coloumn) => {
                                            return (
                                                <TableCell key={coloumn.id} align={coloumn.align} style={{ minWidth: coloumn.minWidth }} sx={{ fontWeight: 'bold' }}>
                                                    {coloumn.label}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowPage, page * rowPage + rowPage).map((row) => {
                                        return (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={row.nisn}>
                                                {coloumns.map((coloumn) => {
                                                    const value = row[coloumn.id];
                                                    return (
                                                        <TableCell key={coloumn.id} align={coloumn.align} onClick={() => navigate('/billing')}>
                                                            {coloumn.format && typeof value === 'number'
                                                                ? coloumn.format(value) : value}
                                                        </TableCell>
                                                    )
                                                })}
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[10, 15, 20, 100]}
                            component='div'
                            count={rows.length}
                            rowsPerPage={rowPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleRowspage}></TablePagination>
                    </div>
                </div>

            </MainLayout>
        </>
    )
} export default Payment