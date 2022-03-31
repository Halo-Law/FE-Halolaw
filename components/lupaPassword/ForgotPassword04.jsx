import Link from "next/link";
import { useRouter } from 'next/router';

function ForgotPassword04() {
    const router = useRouter()
    return(
        <div className="font-['Inter'] mt-20 mx-3 lg:mx-0">
            <div className="w-auto sm:w-[385px] mx-auto text-center flex flex-col justify-center bg-white">
                <div className="flex justify-center mx-auto h-[56px] mb-[16px]">
                    <img src="/lupaPassword/rst-success.svg"/>
                </div>
                <div className="space-y-[16px] mb-10">
                    <h5 className="text-[23px] leading-[32px] font-semibold text-[#1D2939]">Password reset</h5>
                    <p className="text-[14px] leading-[20px] font-[400] tracking-[0.25px] text-[#475467]">Kata sandi Anda telah berhasil diatur ulang. Klik di bawah ini untuk masuk secara ajaib</p>
                </div>
                <div className="text-left">
                    <button type="submit" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer" onClick={() => (router.push('/'))}>
                    Reset Password
                    </button>
                </div>
                
                <Link href="/masuk"><span className="text-[14px] leading-[20px] tracking-[0.25px] font-[600] text-[#344054] cursor-pointer mt-[32px]">← Kembali ke halaman login</span></Link>
            </div>
        </div>
    )
} 

export default ForgotPassword04;