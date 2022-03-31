
function Profile(){
    return(
        <div>
            <div className="">
                <div className="grid grid-cols-2">
                    <div>
                        <p>img</p>
                        <button>upload</button>
                    </div>
                    <div>
                        <p>Informasi Umum</p>
                        <div className="flex flex-col">
                            <label>Nama Lengkap *</label>
                            <input type="text" value="Farizi"></input>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label>Domisili / Kota tinggal saat ini *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>Kecamatan *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label>Tempat Lahir *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>Tanggal Lahir *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label>Nomor Telepon (WhatsApp) *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>Nomor Induk Kependudukan *</label>
                                <input type="text" value="Farizi"></input>
                            </div>
                        </div>
                        <button>Simpan Data Perubahan</button>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <p>img</p>
                        <div>
                            <p>Pengaturan Akun</p>
                            <p>Perbarui password dan hapus akun</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;