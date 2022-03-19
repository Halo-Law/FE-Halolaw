import react, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/Link"

function Kategori(){
    function DummySearch(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    function onClickKategori(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    const initialKategori = [
        {
            logo : "properti.svg",
            judul : "Properti",
            deksripsi : "Sertifikat Tanah, Ahli Waris Tanah, Hak Guna Bangunan",
        },
        {
            logo : "haki.svg",
            judul : "Hak Kekayaan Intelektual",
            deksripsi : "Pendaftaran Hak Cipta, Pendaftaran Hak Paten, Pendaftaran Merek, dll",
        },
        {
            logo : "pendirianPerusahaan.svg",
            judul : "Pendirian Perusahaan",
            deksripsi : "Pendirian PT, Pendirian CV, Pendirian Yayasan, Firma Hukum, dll",
        },
        {
            logo : "closedcompany.svg",
            judul : "Penutupan Perusahaan",
            deksripsi : "Penutupan PT, Penutupan CV, Penutupan PMA",
        },
        {
            logo : "briefcase.svg",
            judul : "Perizinan Usaha",
            deksripsi : "Izin Usaha Mikro menengah, NPWP, OSS, NIB Ekspor dan Impor",
        },
        {
            logo : "contract.svg",
            judul : "Kontrak Kerja",
            deksripsi : "Environmental legal issues might occur since the planned business",
        },
        {
            logo : "documents.svg",
            judul : "Pembuatan & Perubahan Akta",
            deksripsi : "Perubahan Akta Anggaran Dasar, Akta Jual Beli, Pengumuman Koran, dll",
        },
    ]

    const [Kategori, setKategori] =  useState(initialKategori)

    const handleChanges = (e) => {
        const value = e.target.value.toLowerCase()
        const newKategori = []
        initialKategori.filter((data) => {
            if (data.judul.toLowerCase().includes(value) || data.deksripsi.toLowerCase().includes(value)){
                newKategori.push(data)
            }
        })
        setKategori(newKategori)
    }

    const resetKategori = () => {
        setKategori(initialKategori)
    }

    

    return(
        <div className="">
            <div className="relative">
                <div className="absolute -z-10">
                    <img src="./kategori/Header.svg" className="w-[250vh] object-fill"></img>
                </div>
            </div>
            <div className="mx-[25px] lg:mx-[100px] pt-3 lg:pt-[48px] pb-3 lg:pb-[40px]">
                <div className="font-['Inter'] text-white space-y-[2px] lg:space-y-[12px] mb-3 lg:mb-[48px]">
                    <h4 className="text-[11px] lg:text-[33px] leading-0 lg:leading-[40px] font-[700]">Pembuatan Dokumen Hukum</h4>
                    <p className="text-[8px] lg:text-[14px] leading-0 lg:leading-[140%] font-[500]">Tersedia pembuatan dokumen hukum yang lengkap dan terpercaya</p>
                </div>
                <div className="">
                    <div className="flex h-[36px] lg:h-[48px]">
                        <div className="h-full bg-white flex items-center justify-center rounded-[4px] rounded-r-none pl-3 lg:pl-[20px] pr-3 lg:pr-[16px]" onClick={DummySearch}>
                            <SearchIcon className="text-[#6982F1] md:text-[22px] text-[12px]"/>
                        </div>
                        <input type="search" className="
                            form-control w-full px-2 lg:px-3 py-1 lg:py-[14px] text-gray-700 bg-white bg-clip-padding border-gray-300  rounded-[4px] rounded-l-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-[400] placeholder:text-[10px] lg:placeholder:text-[14px] placeholder:leading-0 lg:placeholder:leading-[20px] placeholder:tracking-[0.25px] placeholder:text-[#8C8CA2]"
                        id="search"
                        placeholder="Keyword: Nama dokumen hukum"
                        onChange={(e) => {handleChanges(e)}}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-[36px] lg:mb-[72px]">
                <div className="grid grid-cols-2 lg:grid-cols-3 mx-[25px] lg:mx-[100px] gap-3 lg:gap-[32px]">
                {Kategori.map((index) => {
                    return(
                       <Link href={"/kategori/" + index.judul}>
                            <div className="flex justify-center">
                                <div className="flex flex-col justify-around lg:justify-between bg-[#FCFCFC] border hover:border-1 lg:hover:border-2 hover:border-blue-600 shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] w-full lg:w-[420px] h-full lg:h-[236px] p-3 lg:p-[24px]">
                                    <div className="w-[28px] h-[28px] lg:w-[56px] lg:h-[56px]">
                                        <img src={`./icon/${index.logo}`} alt=""></img>
                                    </div>
                                    <div>
                                        <h4 className="text-[12px] lg:text-[22px] font-semibold tracking-[0.5px] text-[#344054] mb-0 lg:mb-[16px]">{index.judul}</h4>
                                        <p className="text-[10px] lg:text-[16px] text-[#475467]">
                                            {index.deksripsi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                
                </div>
            </div>
            
        </div>
    )
}

export default Kategori;
