import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link"
import { useRouter } from 'next/router';

function ReservasiKonsultasi(){
    return(
        <div className='block'>
            <div className="relative">
                <div className="absolute -z-10 bg-gradient-to-r from-[#3D8DFF] to-[#2A41C7] h-[80px] md:h-[120px] lg:h-[140px] w-full">
                    
                </div>
            </div>
            <div className="text-white mx-[25px] lg:mx-[100px] space-y-[0px] lg:space-y-[16px] py-[12px] lg:py-[32px]">
                <div className="flex">
                    <p className="font-[400] text-[8px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px]">
                    <Link href={"/"}><span className='cursor-pointer'><HomeIcon className="mb-1 scale-[0.7]"/>Home</span></Link>
                    /
                    <Link href={"/kategori"}>Pembuatan Dokumen</Link>
                    /Reservasi Konsultasi 
                    </p>
                </div>
                <div>
                    <p className="font-[700] text-[14px] lg:text-[33px] leading-0 lg:leading-[40px] tracking-[0.25px] text-left">Reservasi Konsultasi</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 pt-10'>
                    <div>
                        <div>
                            <p>Kami senang anda berkonsultasi, data ini membantu kami untuk menghubungi Anda</p>
                            <div className='flex'>
                                <div className='flex flex-col'>
                                    <label>Nama Lengkap</label>
                                    <input type="text" placeholder='nama'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label>Pilih tanggal konsultasi *</label>
                                    <input type="date"/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label>Nomor Telpon (WhatsApp) *</label>
                            <input type="number" placeholder='081254'/>
                        </div>
                        <div>
                            <p>Bidang mana yang perlu kami bantu? *</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Beri tahu kami bantuan apa yang Anda butuhkan dan masalah yang perlu diselesaikan</p>
                            <div className='flex flex-col'>
                                <label>Tuliskan detail permasalahan anda *</label>
                                <textarea placeholder='Tuliskan detail permasalahan anda'></textarea>
                            </div>
                        </div>
                        <div>
                            <p>Catatan:</p>
                            <ul className='list-disc ml-5'>
                                <li>Konsultasi tidak dipungut biaya apapun/gratis.</li>
                                <li>Client yang telah melakukan reservasi akan dihubungi oleh pihak Halo Law untuk melakukan konfirmasi ulang.</li>
                                <li>Client yang melakukan reservasi diluar hari kerja maka akan dihubungi ketika hari kerja.</li>
                                <li>Konsultasi berlangsung pada saat jam kerja setiap hari senin-jumat, pukul 16.00-17.00 WIB.</li>
                                <li>Tanggal konsultasi dapat berubah sewaktu-waktu.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservasiKonsultasi;