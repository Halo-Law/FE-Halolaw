import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from "react"


function DetailTransaksi(){
    const [active, setActive] = useState(0)

    const sampleData = [
        {
            dokumen : "Scan/Foto Sertifikat Asli Hak Milik (SHM)",
            status : "Submitted",
            tgl : "14/12/2021",
        },
        {
            dokumen : "Scan/Foto izin mendirikan bangunan (IMB)",
            status : "Submitted",
            tgl : "14/12/2021",
        },
        {
            dokumen : "Scan/Foto Asli Sertifikat Hak Guna Usaha (SHGU)",
            status : "-",
            tgl : "-",
        },
        {
            dokumen : "Scan/Foto Surat Sertifikat Hak Pakai",
            status : "Submitted",
            tgl : "14/12/2021",
        },
        {
            dokumen : "Scan/Foto Asli Kartu tanda penduduk (KTP)",
            status : "Submitted",
            tgl : "14/12/2021",
        },
        {
            dokumen : "Scan/Foto Asli Kartu Keluarga (KK)",
            status : "Submitted",
            tgl : "14/12/2021",
        },
    ]

    const sampleData2 = [
        {
            tgl : "12/09/2021",
            waktu : "11.26",
            catatan : "Sampai saat ini saya sudah menerima semua berkas yang bapak kirimkan melalui aplikasi. saya juga sudah mulai nyicil untuk pembuatan dokumen SPPT/PBB."
        },
        {
            tgl : "13/09/2021",
            waktu : "11.26",
            catatan : "Dokumen SPPT/PBB sadah selesai diurus, Tidak ada kendala sejauh ini. dokumen ini merupakan Surat Keputusan Kepala KPP mengenai pajak terutang yang harus dibayar dalam 1 (satu) tahun pajak."
        },
        {
            tgl : "16/09/2021",
            waktu : "11.26",
            catatan : "Semua dokumen sudah terpenuhi, sekarang sedang saya proses untuk pembuatan sertifikat tanah bapak yang berada di Antapani, Bandung. perkiraan selesai besok sore, dan bapak bisa bertemu saya tanggal 18 di tempat biasa."
        },
        {
            tgl : "17/09/2021",
            waktu : "11.26",
            catatan : "Hari ini sudah saya update semua berkas yang diperlukan untuk pengurusan sertifikat tanah, selanjutnya tinggal tanda tangan dari bapak Farizi saja. Saya bisa bertemu langsung dengan bapa kira kira besok siang, terima kasih."
        },
    ]

    return(
        <div className='flex justify-center lg:mx-auto mx-2'>  
            <div className='mb-8'>
                <div className="text-xs md:text-[14px] font-semibold leading-[20px] tracking-[0.25px] py-4 md:py-8">
                    <span>Pages / </span>
                    <span>Transaksi / </span>
                    <span className="text-[#2E46BA]">Sertifikat Tanah</span>
                </div>
                <div className='mb-8'>
                    <h1 className="#text-[252A31] text-[28px] md:text-[33px] font-semibold leading-[40px] tracking-[0.25px] pb-6">Sertifikat Tanah</h1>
                    <div className="bg-[#F2F4F7] rounded-lg inline-block">
                        <div className="flex p-6 gap-[32px]">
                            <img src="profiledummy.png" className="h-[70px] md:h-[80px] w-[70px] md:w-[80px] object-cover"/>
                            <div className="flex">
                                <div className="flex gap-4">
                                    <div className="flex flex-col justify-between text-[#1D2939] font-semibold text-xs md:text-[14px] leading-[20px] tracking-[0.25px]">
                                        <p>Praktisi </p>
                                        <p>Kategori</p>
                                        <p>Invoice</p>
                                    </div>
                                    <div className="flex flex-col justify-between text-[#4A4A68] font-medium text-xs md:text-[14px] leading-[20px] tracking-[0.25px]">
                                        <p>: Aditya Zhafir Dhiaulhaq</p>
                                        <p>: Properti</p>
                                        <p>: INV/20211013/MPL/1667050146</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b flex gap-2">
                    <button className={`border-b py-2 translate-y-[1px] ${active === 0 ? "border-green-500" : ""}`} onClick={() => {setActive(0)}}>Update Progress</button>
                    <button className={`border-b py-2 translate-y-[1px] ${active === 1 ? "border-green-500" : ""}`} onClick={() => {setActive(1)}}>Dokumen Client</button>
                </div>
                {/* Update Progress */}
                <div className={`py-6 ${active == 0 ? "block" : "hidden"}`}>
                    <table className='table-auto w-full lg:w-[1000px]'>
                        <thead className='border-collapse text-center bg-[#3A57E8] text-white'>
                        <tr>
                            <td className='px-3 py-4'>No</td>
                            <td className='px-3'>Tanggal</td>
                            <td className='px-3'>Waktu</td>
                            <td className='w-[730px] text-left'>Catatan</td>
                        </tr>
                        </thead>
                        <tbody className='  '>
                            {sampleData2.reverse().map((data, index) => (
                                <tr key={index} className={` align-top text-center text-[14px] leading-[24px] text-[#232D42] ${index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                                    <td className='py-2'>{sampleData2.length - (index)}</td>
                                    <td className='py-2'>{data.tgl}</td>
                                    <td className='py-2'>{data.waktu}</td>
                                    <td className='text-left py-2'>{data.catatan}</td>
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>
                {/* Dokement Client */}
                <div className={`py-6 ${active == 1 ? "block" : "hidden"}`}>
                    <table className='table-auto w-full lg:w-[1000px]'>
                        <thead className='border-collapse text-center bg-[#3A57E8] text-white'>
                        <tr>
                            <td className='px-3 py-4'>NO</td>
                            <td className='w-[500px] text-left'>Dokumen</td>
                            <td className='px-3'>Status</td>
                            <td className='px-3'>Tanggal Modifikasi</td>
                            <td className='px-3'>Aksi</td>
                        </tr>
                        </thead>
                        <tbody className=''>
                            {sampleData.map((data, index) => (
                                <tr key={index} className={`text-center text-[14px] leading-[24px] text-[#232D42] ${index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                                    <td className='py-4'>{index+1}</td>
                                    <td className='text-left'>{data.dokumen}</td>
                                    <td className=''>{data.status}</td>
                                    <td className=''>{data.tgl}</td>
                                    <td className='px-4'>
                                        <button className='flex px-6 py-2 rounded-lg border bg-white hover:bg-[#3A57E8] text-[#3A57E8] hover:text-white text-[14px] leading-[20px] tracking-[0.25px]'>
                                            <UploadFileIcon className='text-[20px]'/> <span className='self-center font-medium ml-2'>Upload</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetailTransaksi