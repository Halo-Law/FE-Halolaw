import Link from "next/link";
import { useEffect, useState } from "react";

function ForgotPassword03(props) {
    
    const [Password, setPassword] = useState({
        Password : '',
        KonfirmasiPassword : '',
    })

    const [Error, setError] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (Password.Password.length > 0 || Password.KonfirmasiPassword.length > 0 ){
            console.log(Password.Password == Password.KonfirmasiPassword)
            if (Password.Password == Password.KonfirmasiPassword){    
                setError(false)
                props.setPasswordSubmited(true)
            }else{  
                setError(true)
            }
        } else {
            setError(false)
        }
    }


    return(
        <div className="font-['Inter'] mt-20 mx-3 lg:mx-0">
            <div className="w-auto sm:w-[385px] mx-auto text-center flex flex-col justify-center bg-white">
                <div className="flex justify-center mx-auto h-[56px] mb-[16px]">
                    <img src="/lupaPassword/rst-key.svg"/>
                </div>
                <div className="space-y-[16px] mb-10">
                    <h5 className="text-[23px] leading-[32px] font-semibold text-[#1D2939]">Atur password baru</h5>
                    <p className="text-[14px] leading-[20px] font-[400] tracking-[0.25px] text-[#475467]">Password baru Anda harus berbeda dari password yang digunakan sebelumnya</p>
                </div>
                <div className="text-left">
                    <form onSubmit={(e) => HandleSubmit(e)}>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Password <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" required type="password" name="Password" value={Password.Password} onChange={(e) => {setPassword({...Password, [e.target.name] : e.target.value})}} placeholder="********"/>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Konfirmasi Password <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" required type="password" name="KonfirmasiPassword" value={Password.KonfirmasiPassword} onChange={(e) => {setPassword({...Password, [e.target.name] : e.target.value})}} placeholder="********"/>
                        {Error === true ? <p className="text-red-500 text-center pb-2">Password Tidak Sama</p> : <p></p>}
                        <input type="submit" value="Reset Password" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer"/>
                    </form>
                    
                </div>
                
                {/* <Link href="/masuk"><span className="text-[14px] leading-[20px] tracking-[0.25px] font-[600] text-[#344054] cursor-pointer mt-[32px]">← Kembali ke halaman login</span></Link> */}
            </div>
        </div>
    )
} 

export default ForgotPassword03;