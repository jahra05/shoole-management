import { School2 } from "lucide-react"
import Input_ from "postcss/lib/input"
import { Link } from "react-router-dom"
import Input from "./components/TextField"

function Login() {
    return (
        <>
            <div
                className="h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: "url('src/assets/bg-login.jpg')" }}>
                <div className="p-4 flex gap-4 items-center">
                    <School2 />
                    <p>Management School</p>
                </div>
                <div className="w-[400px] bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/30 ml-[710px] mt-52">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="src/assets/school.svg" className="w-full" />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div>
                            <p className="text-sm">Email</p>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="w-full h-9 px-2 rounded-md border outline-none text-sm"
                            />
                        </div>

                        <div>
                            <p className="text-sm">Password</p>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full h-9 px-2 rounded-md border outline-none text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 my-4">
                        <div className="flex-1 border-t"></div>
                        <p className="text-sm">Or</p>
                        <div className="flex-1 border-t"></div>
                    </div>

                    <div className="text-center text-sm">
                        Dont have an account?{" "}
                        <span className="text-blue-500 cursor-pointer">
                            Create Account
                        </span>
                    </div>
                    <Link to='/dasboard' className="mt-8">
                        <button className="mt-6 w-full h-9 bg-blue-500 text-white rounded-md text-sm">login</button>
                    </Link>
                </div>

            </div>
        </>
    )
} export default Login