import Link from "next/link";

function ForgotPassword02() {
    const email = "fariziandira@gmail.com"

    return(
        <div className="font-['Inter'] mt-20">
            <div className="w-[385px] mx-auto text-center flex flex-col justify-center bg-white">
                <div className="flex justify-center mx-auto h-[56px] mb-[16px]">
                    <img src="/lupaPassword/rst-mail.svg"/>
                </div>
                <div className="mb-10">
                    <h5 className="text-[23px] leading-[32px] font-semibold text-[#1D2939] mb-[16px]">Cek Email Anda</h5>
                    <p className="text-[14px] leading-[20px] font-[400] tracking-[0.25px] text-[#475467]">kami mengirim tautan reset password ke</p>
                    <p className="text-[14px] leading-[20px] font-[600] tracking-[0.25px] text-[#1D2939]">{email}</p>
                </div>
                <div className="text-center">
                    <button type="submit" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer mb-[24px]" onClick={() => (console.log("Pencet"))}>
                    Buka Aplikasi Email
                    </button>
                    <p className="text-[14px] leading-[20px] font-[500] tracking-[0.25px] text-[#1D2939]">Tidak menerima email? <button className="text-[#2A41C7] font-[700]">Kirim ulang</button></p>
                </div>
                
                <Link href="/masuk"><span className="text-[14px] leading-[20px] tracking-[0.25px] font-[600] text-[#344054] cursor-pointer mt-[32px]">← Kembali ke halaman login</span></Link>
            </div>
        </div>
    )
} 

export default ForgotPassword02;