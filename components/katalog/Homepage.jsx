import react from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArtikelCard from '../artikel/ArtikelCard';
import Link from 'next/link'


function Homepage(){
    const ArtikelDummy = [
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
      ];
    return(
        <>
        {/* SECTION ONE */}
        <div>
            <div className="bg-[#3A57E8] font-['Inter'] relative">
                <div className="text-white ml-[25px] lg:ml-[100px] mr-[25px] pt-12 lg:pt-[120px] pb-[180px] w-auto lg:w-[656px]">
                    <p className="text-[30px] lg:text-[47px] font-[200] leading-0 lg:leading-[52px] mb-2 lg:mb-[24px]">Solusi terbaik untuk semua dokumen hukum</p>
                    <p className="mb-[16px] text-[12px] lg:text-[16px]">Wujudkan impian anda bersama Halo Law, layanan pengurusan legalitas terlengkap, tercepat dan terpercaya di Indonesia</p>
                    <ul className="list-none mb-[42px] text-[12px] lg:text-[16px] space-y-[4px] lg:space-y-[8px]">
                        <li><CheckCircleIcon className="text-[#7BD864]"/> Pendamping Hukum</li>
                        <li><CheckCircleIcon className="text-[#7BD864]"/> Tracking Progres Dokumen</li>
                    </ul>
                    <button className="bg-[#47BF37] px-3 py-2 lg:px-[24px] lg:py-[15px] rounded-[6px] text-[12px] lg:text-[16px]">Pesan Sekarang</button>
                </div>
                <img src="./home/img-landing.png" className="absolute bottom-0 right-0 h-1/3 lg:h-1/2 xl:h-auto -z-1"></img>
            </div>
        </div>
        {/* SECTION TWO */}
        <div className="block lg:flex justify-between my-[30px] lg:my-[80px] mx-[25px] lg:mx-[100px] font-['Inter']">
            <p className="text-[28px] lg:text-[33px] w-full lg:w-[228px] mb-5">Dapat anda temukan disini</p>
            <div className="flex justify-between space-x-[4px] lg:space-x-[16px] w-full lg:w-[898px]">
                <div className="flex w-full lg:w-[278px]">
                    <div className="flex">
                        <CheckCircleIcon className="text-[#7BD864] text-[15px] lg:text-[25px] mt-[1px] lg:mt-0"/>
                    </div>
                    <div className="ml-[3px] lg:ml-[16px] ">
                        <p className="text-[12px] lg:text-[19px] font-semibold mb-[8px]">Praktisi Kredibel</p>
                        <p className="text-[11px] lg:text-[19px]">Berpengalaman dalam menangani segala jenis dokumen hukum</p>
                    </div>
                </div>
                <div className="flex w-full lg:w-[278px]">
                    <div className="flex">
                        <CheckCircleIcon className="text-[#7BD864] text-[15px] lg:text-[25px] mt-[1px] lg:mt-0"/>
                    </div>
                    <div className="ml-[3px] lg:ml-[16px]">
                        <p className="text-[12px] lg:text-[19px] font-semibold mb-[8px]">Konsultasi Gratis</p>
                        <p className="text-[11px] lg:text-[19px]">konsultasikan segala keperluan anda secara real-time</p>
                    </div>
                </div>
                <div className="flex w-full lg:w-[278px]">
                    <div className="flex">
                        <CheckCircleIcon className="text-[#7BD864] text-[15px] lg:text-[25px] mt-[1px] lg:mt-0"/>
                    </div>
                    <div className="ml-[3px] lg:ml-[16px]">
                        <p className="text-[12px] lg:text-[19px] font-semibold mb-[8px]">Melacak Progres</p>
                        <p className="text-[11px] lg:text-[19px]">Transparansi aktivitas praktisi hukum dalam pengerjaan dokumen hukum</p>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION THREE */}
        <div className="mx-[25px] lg:mx-[100px]">
            <div className="text-center font-['Inter'] space-y-[16px] mb-[30px] lg:mb-[52px]">
                <h4 className="text-[22px] lg:text-[33px] font-[500] leading-5 lg:leading-[40px] text-[#1D2939] tracking-[0.25px]">Pelayanan Dokumen Hukum</h4>
                <p className="text-[12px] lg:text-[16px] font-[400] text-[#667085] leading-5 lg:leading-[24px] tracking-[0.5px]">Kami hadir untuk masyarakat Indonesia dalam melakukan proses legalisasi yang terkadang rumit</p>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 mx-[0px] lg:mx-[60px] gap-[16px] lg:gap-[32px]">
                <div className="flex justify-center">
                    <div className="flex flex-col lg:justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-full lg:w-[256px] h-auto lg:h-[278px] p-[12px] lg:p-[24px] hover:border hover:border-blue-700 cursor-pointer">
                        <div className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                            <img src="./icon/haki.svg" alt=""></img>
                        </div>
                        <div>
                            <h4 className="text-[14px] lg:text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-full lg:w-[181px]">Hak Kekayaan Intelektual</h4>
                            <ul className="list-none text-[12px] lg:text-[16px] text-[#475467]">
                                <li>Pendaftaran Hak Cipta</li>
                                <li>Pendaftaran Hak Paten</li>
                                <li>Pendaftaran Merek</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col lg:justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-full lg:w-[256px] h-auto lg:h-[278px] p-[12px] lg:p-[24px] hover:border-blue-700 cursor-pointer">
                        <div className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                            <img src="./icon/properti.svg" alt=""></img>
                        </div>
                        <div>
                            <h4 className="text-[14px] lg:text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-full lg:w-[181px]">Dokumen Properti</h4>
                            <ul className="list-none text-[12px] lg:text-[16px] text-[#475467]">
                                <li>Sertifikat Tanah </li>
                                <li>Ahli Waris Tanah</li>
                                <li>Hak Guna Bangunan</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col lg:justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-full lg:w-[256px] h-auto lg:h-[278px] p-[12px] lg:p-[24px] hover:border-blue-700 cursor-pointer">
                        <div className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                            <img src="./icon/pendirianPerusahaan.svg" alt=""></img>
                        </div>
                        <div>
                            <h4 className="text-[14px] lg:text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-full lg:w-[181px]">Pendirian Perusahaan</h4>
                            <ul className="list-none text-[12px] lg:text-[16px] text-[#475467]">
                                <li>Pendirian PT</li>
                                <li>Pendirian CV</li>
                                <li>Pendirian Yayasan</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col lg:justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-full lg:w-[256px] h-auto lg:h-[278px] p-[12px] lg:p-[24px] hover:border-blue-700 cursor-pointer">
                        <div className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                            <img src="./icon/lainnya.svg" alt=""></img>
                        </div>
                        <div>
                            <h4 className="text-[14px] lg:text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-full lg:w-[181px]">Layanan Lainnya</h4>
                            <ul className="list-none text-[12px] lg:text-[16px] text-[#475467]">
                                <li>Peninjauan Perjanjian</li>
                                <li>Penutupan Perusahaan</li>
                                <li>Perizinan Usaha</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION FOUR */}
        <div className="font-['Inter']">
            <div className="flex mx-[25px] lg:mx-[100px] my-[80px] justify-center xl:justify-between">
                <div className="hidden xl:block w-[531px] h-[363px]">
                    <img className="object-cover h-full" src="./home/praktisi.jpg" alt="praktisi"></img>
                </div>
                <div className="grid content-center">
                    <div className="w-full lg:w-[609px]">
                        <h4 className="text-[#1D2939] font-medium text-[23px] lg:text-[33px] text-center lg:text-left">Berpengalaman di dunia Hukum</h4>
                        <p className="tracking-[0.5px] text-[#667085] my-3 lg:my-[24px] text-[12px] lg:text-[15px] text-center lg:text-left">Kami bekerjasama dengan para praktisi hukum di Indonesia untuk membantu anda dalam menyelesaikan segala bentuk keperluan hukum pada bidang surat menyurat dan legalisasi </p>
                        <div className="flex justify-center lg:justify-start space-x-[8px] lg:space-x-[32px]">
                            <div className="flex border rounded-[4px] w-[100px] lg:w-[140px] h-[100px] lg:h-[140px]">
                                <div className="my-[18px] lg:my-[18px] mx-auto text-center flex flex-col justify-between">
                                    <h3 className="text-[#1D2939] text-[25px] lg:text-[47px] leading-none mb-[8px]">5+</h3>
                                    <p className="text-[11px] lg:text-[14px] text-[#475467]">Tahun Pengalaman</p>
                                </div>
                            </div>
                            <div className="flex border rounded-[4px] w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] bg-[#3A57E8] text-white">
                                <div className="my-[18px] lg:my-[18px] mx-auto text-center flex flex-col justify-between">
                                    <h3 className="text-[25px] lg:text-[47px] leading-none mb-[8px]">32+</h3>
                                    <p className="text-[11px] lg:text-[14px]">Spesialis</p>
                                </div>
                            </div>
                            <div className="flex border rounded-[4px] w-[100px] lg:w-[140px] h-[100px] lg:h-[140px]">
                                <div className="my-[18px] lg:my-[18px] mx-auto text-center flex flex-col justify-between">
                                    <h3 className="text-[#1D2939] text-[25px] lg:text-[47px] leading-none mb-[8px]">4</h3>
                                    <p className="text-[11px] lg:text-[14px] text-[#475467]">Kota Besar di Indonesia   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        {/* SECTION FIVE BELUM */}
        <div className="my-[60px]">
            <div className="flex font-['Inter'] mx-[25px] lg:mx-[100px] justify-center xl:justify-between">
                <div className="grid content-center">
                    <div className="w-auto lg:w-[609px]">
                        <h4 className="text-center lg:text-left font-[500] text-[22px] lg:text-[33px] leading-8 lg:leading-[40px] tracking-[0.25px] mb-6 lg:mb-[24px]">Kami siap membantu anda</h4>
                        <div className="space-y-[8px]">
                            <div className="bg-[#FFFFFF] border rounded-[4px] shadow-[10px_4px_20px_0px_rgba(61,141,255,0.15)] p-[18px] space-y-[8px]">
                                <div className="flex space-x-[8px]">
                                    <CheckCircleIcon className="text-[#7BD864] text-[15px] lg:text-[25px] mt-1 lg:mt-0"/><h5 className="font-[600] text-[15px] lg:text-[19px] leading-[24px] tracking-[0.15px] text-[#344054]">Konsultasi Hukum</h5>
                                </div>
                                <p className="font-[400] text-[12px] lg:text-[16px] leading-5 lg:leading-[24px] tracking-[0.5px] text-[#475467]">Konsultasikan kebutuhan atau permasalahan anda bersama praktisi hukum kami secara langsung</p>
                            </div>
                            <div className="bg-[#FFFFFF] border rounded-[4px] shadow-[10px_4px_20px_0px_rgba(61,141,255,0.15)] p-[18px] space-y-[8px]">
                                <div className="flex space-x-[8px]">
                                    <CheckCircleIcon className="text-[#7BD864] text-[15px] lg:text-[25px] mt-1 lg:mt-0"/><h5 className="font-[600] text-[15px] lg:text-[19px] leading-[24px] tracking-[0.15px] text-[#344054]">Customer Service</h5>
                                </div>
                                <p className="font-[400] text-[12px] lg:text-[16px] leading-5 lg:leading-[24px] tracking-[0.5px] text-[#475467]">Melayani selama 24 jam melalui live chat untuk segala teknis pemesanan ataupun keluhan dalam penggunaan aplikasi</p>
                            </div>
                        </div>
                        <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px] text-white mt-[32px] w-full lg:w-auto">Mulai Sekarang</button>
                    </div> 
                </div>
                <div>
                    <img src="./home/customer@2x.png" className="w-[531px] hidden xl:block" alt="foto"></img>
                </div>
            </div>
        </div>
        {/* SECTION SIX*/}
        <div className="mb-[54px] mx-[25px] lg:mx-[100px] mt-[24px] font-['Inter']">
            <h4 className="mb-[24px] font-semibold text-[#1D2939] text-[22px] lg:text-[33px]">Artikel Terbaru</h4>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-[24px] gap-3">
                {ArtikelDummy.map((data, index) =>{
                    return <ArtikelCard key={index} data={data}/> 
                })}
            </div>
        </div>
         {/* SECTION SEVEN*/}
        <div className="text-white bg-gradient-to-r from-[#3D8DFF] to-[#2A41C7] font-['Open Sans'] flex justify-center">
            <div className="py-[30px] lg:py-[56px] mx-[25px]">
                <h1 className="text-[20px] lg:text-[40px] font-bold text-center">Awali kesuksesan anda bersama Halo Law!</h1>
                <p className="font-[200] pt-[16px] text-center">Kini tidak lagi sulit mengurus segala legalitas hukum. Praktisi hukum kredibel, cepat, dan layanan konsultasi gratis.</p>
                <div className="flex justify-center pt-8 lg:pt-[56px]">
                    <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px]">Mulai Sekarang</button>   
                </div>   
            </div>
        </div>
    </>
        
   )
}

export default Homepage;