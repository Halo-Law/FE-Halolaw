import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRouter } from 'next/router';
import Link from "next/link"

function ReservasiKonsultasi(){
    const bidang = ["Properti", "HAKI", "Pendirian Perusahaan", "Kontrak Kerja","Penutupan Perusahaan","Pembuatan & Perubahan akta","Perizinan Usaha"]

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
            <div className='border-b pb-10'>
                <div className='grid grid-cols-2 gap-[105px] pt-10 mx-[100px] text-[#1D2939]'>
                    <div>
                        <div className='text-[12px] text-[#475467] tracking-[0.4px] leading-[18px] font-semibold'>
                            <div className='flex mb-6'>
                                <div className='w-6 h-6 mr-2'>
                                    <ArrowRightIcon/>
                                </div>
                                <p className='text-[14px] font-semibold leading-[20px] tracking-[0.25px]'>Kami senang anda berkonsultasi, data ini membantu kami untuk menghubungi Anda</p>
                            </div>
                            <div className='flex ml-8 gap-6'>
                                <div className='flex flex-col w-full'>
                                    <label>Nama Lengkap</label>
                                    <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="text" placeholder="nama lengkap anda"/>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label>Pilih tanggal konsultasi <span>*</span></label>
                                    <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-8 flex-col w-[45%]'>
                            <label>Nomor Telpon (WhatsApp) *</label>
                            <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="number" placeholder='Misal: 082219546487'/>
                        </div>
                        <div>
                            <div className='flex mb-6'>
                                <div className='w-6 h-6 mr-2'>
                                    <ArrowRightIcon/>
                                </div>
                                <p className='text-[14px] font-semibold leading-[20px] tracking-[0.25px]'>Bidang mana yang perlu kami bantu? *</p>
                            </div>
                            <div className='flex flex-wrap gap-[16px] ml-8'>
                                {bidang.map((data) => (
                                    <div className='bg-[#F2F4F7] py-3 px-4 rounded-[4px] gap-[8px]'>
                                        <input type="checkbox" className='mr-[8px]'/>
                                        <label>{data}</label>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex mb-6'>
                                <div className='w-6 h-6 mr-2'>
                                    <ArrowRightIcon/>
                                </div>
                                <p className='text-[14px] font-semibold leading-[20px] tracking-[0.25px]'>Beri tahu kami bantuan apa yang Anda butuhkan dan masalah yang perlu diselesaikan</p>
                            </div>
                            <div className='flex flex-col ml-8'>
                                <label className='text-[12px] text-[#475467] tracking-[0.4px] leading-[18px] font-semibold'>Tuliskan detail permasalahan anda *</label>
                                <textarea className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4 resize-none" rows={7} placeholder='Tuliskan detail permasalahan anda' ></textarea>
                            </div>
                        </div>
                        <div className='ml-8 text-[12px] text-[#1D2939] tracking-[0.4px] leading-[18px] font-semibold'>
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
            <div className='flex justify-center mx-auto pt-8 pb-12'>
                <div className='flex gap-4'>
                    <button className='w-full flex justify-center bg-[#F2F4F7] text-[#667085] p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer'>Cancel</button>
                    <button className='w-full flex justify-center bg-[#3A57E8] text-white p-3 rounded-[8px] tracking-wide font-[500] cursor-pointer'>Simpan</button>
                </div>
            </div>
        </div>
    )
}

export default ReservasiKonsultasi;