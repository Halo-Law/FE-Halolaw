
function GantiPassword(){
    return(
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <p>Ganti Password</p>
                    <div className="flex flex-col">
                        <label>Email *</label>
                        <input type="text" value="Email"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Password Lama *</label>
                        <input type="text" value="Email"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Password Baru *</label>
                        <input type="text" value="Email"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Konfirmasi Password Baru *</label>
                        <input type="text" value="Email"/>
                    </div>
                    <button>Ganti Password</button>
                </div>
                <div>
                    <div>
                        kotak
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Hapus Akun</p>
                    <p>Delete your account and account data</p>
                </div>
                <div>
                    <button>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default GantiPassword;