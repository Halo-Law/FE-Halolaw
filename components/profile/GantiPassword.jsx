
function GantiPassword(){
    const email = 'testing@gmail.com'
    return(
        <div className="lg:ml-[200px] ml-4 mr-4 mt-8 mb-12">
            <div className="flex md:flex-row flex-col md:gap-20 gap-6 border-b pb-10 mb-10">
                <div className="md:w-[484px] w-auto order-2 md:order-none">
                    <p className="md:block hidden text-[#252A31] text-[23px] font-semibold leading-[32px] pb-2 mb-8">Ganti Password</p>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email <span className="text-[#C4351A]">*</span></label>
                        <input type="email" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" value={email} disabled/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Password Lama <span className="text-[#C4351A]">*</span></label>
                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="password" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Password Baru <span className="text-[#C4351A]">*</span></label>
                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="password" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Konfirmasi Password Baru <span className="text-[#C4351A]">*</span></label>
                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="password" />
                    </div>
                    <input type="submit" value="Ganti Password" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-2"/>
                </div>
                <div className="pt-4 md:pt-16 order-1 md:order-none">
                    <p className="md:hidden block text-[#252A31] text-[23px] font-semibold leading-[32px] pb-2 mb-8">Ganti Password</p>
                    <div className="p-4 w-auto md:w-[280px] border rounded">
                        <img src="/concept-of-data-privacy-and-policy 1.svg" className="flex justify-center mx-auto"/>
                        <p className="font-[400] text-[12px] leading-[18px] tracking-[0.4px] text-[#344054] mt-4 text-justify">Demi keamanan dan kenyamanan dalam bertransaksi menggunakan layanan Halo Law, kami menyarankan Anda untuk melakukan perubahan kata sandi secara berkala</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12">
                <div>
                    <p className="text-[19px] font-semibold text-[#344054] tracking-[0.15px] leading-[24px] pb-1">Hapus Akun</p>
                    <p className="text-[14px] font-normal text-[#667085] tracking-[0.25px] leading-[20px]">Delete your account and account data</p>
                </div>
                <div>
                    <button className="rounded-lg py-[10px] px-6 border text-[#840D0B] font-medium text-[14px] leading-[20px] tracking-[0.25px]">Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default GantiPassword;