
function Profile(){
    return(
        <div>
            <div className="">
                <div className="flex justify-center mx-auto py-8">
                    <div>
                        <div className="flex gap-8 pb-[56px] border-b">
                            <div className="w-[160px]">
                                <div className="w-full h-[160px] mb-[18px]">
                                    <img src="/profiledummy.png" className="h-full w-full object-cover rounded-lg"/>
                                </div>
                                <button className="w-full flex justify-center border-2 bg-white text-[#2A41C7] p-3 rounded-[8px] tracking-wide font-[500] cursor-pointer">Upload</button>
                            </div>
                            <div>
                                <p className="text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">Informasi Umum</p>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Nama Lengkap <span className="text-[#C4351A]">*</span></label>
                                    <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="name" required placeholder="mail@gmail.com"/>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Domisili / Kota tinggal saat ini <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Kecamatan <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Tempat Lahir <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Tanggal Lahir <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nomor Telepon (WhatsApp) <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nomor Induk Kependudukan <span className="text-[#C4351A]">*</span></label>
                                        <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6" type="text" value=""></input>
                                    </div>
                                </div>
                                <input type="submit" value="Simpan Data Perubahan" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-12"/>
                            </div>
                        </div>
                        <div className="flex p-4 gap-8">
                            <img src="setting 1.svg"/>
                            <div>
                                <p className="text-[19px] font-semibold text-[#344054] tracking-[0.15px] leading-[24px]">Pengaturan Akun</p>
                                <p className="text-[14px] font-medium text-[#667085] tracking-[0.25px] leading-[20px]">Perbarui password dan hapus akun</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;