import Link from "next/link";

function ForgotPassword01(props) {
    return(
        <div className="font-['Inter'] mt-20 mx-3 lg:mx-0">
            <div className="w-auto sm:w-[385px] mx-auto text-center flex flex-col justify-center bg-white">
                <div className="flex justify-center mx-auto h-[56px] mb-[16px]">
                    <img src="/lupaPassword/rst-key.svg"/>
                </div>
                <div className="space-y-[16px] mb-10">
                    <h5 className="text-[23px] leading-[32px] font-semibold text-[#1D2939]">Lupa password?</h5>
                    <p className="text-[14px] leading-[20px] font-[400] tracking-[0.25px] text-[#475467]">Jangan khawatir, kami akan mengirimkan instruksi reset</p>
                </div>
                <div className="text-left">
                <form onSubmit={(e) => {e.preventDefault(); props.setEmailSubmited(true)}}>
                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email <span className="text-[#3A57E8]">*</span></label>
                    <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} type="email" required placeholder="mail@gmail.com"/>
                    <input type="submit" value="Reset Password" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer"/>
                </form>
                </div>
                
                <Link href="/masuk"><span className="text-[14px] leading-[20px] tracking-[0.25px] font-[600] text-[#344054] cursor-pointer mt-[32px]">← Kembali ke halaman login</span></Link>
            </div>
        </div>
    )
} 

export default ForgotPassword01;