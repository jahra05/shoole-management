import MainLayout from "../layouts/MainLayout"

function Billing() {
    return (
        <>
            <MainLayout>
                <p>page blling</p>
                <div>
                    <div>
                        <div className="flex gap-4 text-sm">
                            <select className="p-1 rounded-sm ">
                                <option>Semester 1</option>
                                <option>Semester 1</option>
                                <option>Semester 1</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <p>Name Student </p>
                                    <p>Class </p>
                                </div>
                                <div>
                                    <div>
                                        <p>Tunggakan</p>
                                        <p>Desc</p>
                                    </div>
                                    <div>
                                        <p>4000/bulan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </MainLayout>
        </>
    )
} export default Billing