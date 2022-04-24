import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

function Faq(){
    const [isActive, setIsActive] = useState([false,false,false,false,false])

    const handleActive = (index) =>{
        const newIsActive = [...isActive]
        newIsActive[index] = !newIsActive[index]
        setIsActive(newIsActive);
    }


    return(
        <div className="flex justify-center mx-5 lg:mx-auto w-auto lg:w-[1000px]">
        <div className="w-full">
            <div className="flex justify-center mx-auto py-10 md:py-[32px]">
                <h1 className="text-[#101828] font-semibold text-[33px] leading-[40px] tracking-[0.25px] text-center">Frequently asked Questions</h1>
            </div>
            <div className="flex flex-col w-full pb-12">  
                <div className="w-full flex flex-col gap-[2px] text-[#475467] text-[16px] leading-[28px] tracking-[0.5px] text-left md:text-justify">
                    <div onClick={() => handleActive(0)}>
                        <div className="flex justify-between p-4 gap-6">
                            <h5 className="font-bold">Bagaimana agar saya dapat menggunakan layanan Halo Law?</h5>
                            { isActive[0] ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/> }
                        </div>
                        <div className={`px-4 py-0 ${isActive[0] ? 'block' : 'hidden'}`}>
                            <p>Untuk menggunakan layanan Halo Law, anda dapat mengikuti langkah berikut:</p>
                            <ol className='list-[lower-alpha] ml-6'>
                                <li>Klik “daftar” pada halaman depan Halo Law</li>
                                <li>Masukkan informasi yang diminta seperti nama lengkap, alamat, email, nama pengguna, kata sandi, dll</li>
                                <li>Setelah itu anda dapat menggunakan layanan dari Halo Law</li>
                            </ol>
                        </div>
                    </div>
                    <div onClick={() => handleActive(1)}>
                        <div className="flex justify-between p-4 gap-6">
                            <h5 className="font-bold">Bagaimana jika saya mengalami kendala saat ingin login?</h5>
                            {
                                isActive[1] ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>
                            }
                        </div>
                        <div className={`px-4 py-0 ${isActive[1] ? 'block' : 'hidden'}`}>
                            <p>Jika anda mengalami kendala saat ingin login, anda dapat menghubungi kami melalui whatsapp yang tersedia</p>
                        </div>
                    </div>
                    <div onClick={() => handleActive(2)}>
                        <div className="flex justify-between p-4 gap-6">
                            <h5 className="font-bold">Bagaimana jika saya lupa password?</h5>
                            {
                                isActive[2] ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>
                            }
                        </div>
                        <div className={`px-4 py-0 ${isActive[2] ? 'block' : 'hidden'}`}>
                            <p>Jika anda mengalami kendala berupa lupa password, silahkan ikuti langkah berikut:</p>
                            <ol className='list-[lower-alpha] ml-6'>
                                <li>Klik “lupa password” pada halaman utama Halo Law</li>
                                <li>Silahkan masukkan username atau email serta password terakhir yang anda ingat</li>
                                <li>Klik “reset password”</li>
                                <li>Email reset password akan dikirim melalui email anda. Lalu klik “konfirmasi reset password”</li>
                                <li>Lalu masukkan password baru anda dan klik simpan</li>
                                <li>Lalu masuk kembali ke website kami dan login menggunakan password baru anda</li>
                            </ol>
                        </div>
                    </div>
                    <div onClick={() => handleActive(3)}>
                        <div className="flex justify-between p-4 gap-6">
                            <h5 className="font-bold">Bagaimana cara saya jika ingin mengganti data profil?</h5>
                            {
                                isActive[3] ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>
                            }
                        </div>
                        <div className={`px-4 py-0 ${isActive[3] ? 'block' : 'hidden'}`}>
                            <p>Ubah nama, email, foto profil, dan nomor handphone dapat dilakukan melalui menu “Profil Saya”, Jika anda tidak dapat merubah profil, mohon pastikan bahwa email dan nomor handphone yang baru anda masukkan belum pernah terdaftar di kami. Lalu coba lakukan restart. Jika masih mengalami kendala, anda dapat menghubungi kami melalui whatsapp yang tersedia</p>
                        </div>
                    </div>
                    <div onClick={() => handleActive(4)}>
                        <div className="flex justify-between p-4 gap-6">
                            <h5 className="font-bold">Bagaimana saya mengetahui siapa notaris yang bertanggungjawab atas layanan yang saya pesan?</h5>
                            {
                                isActive[4] ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>
                            }
                        </div>
                        <div className={`px-4 py-0 ${isActive[4] ? 'block' : 'hidden'}`}>
                            <p>Berdasarkan peraturan perundang-undangan yang berlaku, praktisi hukum (notaris) tidak dapat memberitahu identitas mereka untuk pelayanan online. Klien dapat mengetahui siapa praktisi hukum yang bertanggungjawab melaksanakan tugas disaat proses tandatangan berkas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Faq;