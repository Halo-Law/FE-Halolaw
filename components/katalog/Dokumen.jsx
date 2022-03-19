import HomeIcon from '@mui/icons-material/Home';
import Link from "next/Link"
import { useRouter } from 'next/router';

function Dokumen(){
    const router = useRouter()

    function DummySearch(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    function onClickKategori(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    const dokumen = [
        {
            img : "/Dokumen/Properti/Tanah.png",
            judul : "Sertifikat Tanah",
            harga : "Rp700.000",
        },
        {
            img : "/Dokumen/Properti/Hak_Guna_Bangunan.jpg",
            judul : "Peningkatan Hak Guna Bangunan",
            harga : "Rp400.000",
        },
        {
            img : "/Dokumen/Properti/Balik_Nama.png",
            judul : "Akta Balik Nama",
            harga : "Rp1.000.000",
        },
        {
            img : "/Dokumen/Properti/Waris_Tanah.jpg",
            judul : "Ahli Waris Tanah",
            harga : "Rp1.200.000",
        },
        {
            img : "/Dokumen/Properti/Tukar_Menukar.png",
            judul : "Akta Tukar Menukar",
            harga : "Rp900.000",
        },
        {
            img : "/Dokumen/Properti/Jual_Beli.jpg",
            judul : "Akta Jual Beli",
            harga : "Rp700.000",
        },
        {
            img : "/Dokumen/Properti/Hibah.jpg",
            judul : "Akta Hibah",
            harga : "Rp900.000",
        },
        {
            img : "/Dokumen/Properti/Pemberian_Hak_Tanggung.png",
            judul : "Akta Pemberian Hak Tanggungan",
            harga : "Rp1.600.000",
        },
        {
            img : "/Dokumen/Properti/Pembagian_Hak_Bersama.png",
            judul : "Akta Pembagian Hak Bersama",
            harga : "Rp3.200.000",
        },
        {
            img : "/Dokumen/Properti/Pemasukan.jpg",
            judul : "Pemasukan ke dalam perusahaan",
            harga : "Rp3.000.000",
        },
    ]

    const tipeDokumen = "Properti"

    return(
        <div className="pb-[48px]">
            <div className="relative">
                <div className="absolute -z-10 bg-[url('/kategori/Header.svg')] h-[150px] lg:h-[300px] w-full bg-no-repeat bg-cover">
                    {/* <img src="./kategori/Header.svg" className="w-[250vh] object-fill"></img> */}
                </div>
            </div>
            <div className="text-white mx-[25px] lg:mx-[100px] space-y-[0px] lg:space-y-[24px] pt-[12px] lg:pt-[32px]">
                <div className="flex">
                    <p className="font-[400] text-[8px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px]">
                    <Link href={"/"}><span className='cursor-pointer'><HomeIcon className="mb-1 scale-[0.7]"/>Home</span></Link>
                    /
                    <Link href={"/kategori"}>Pembuatan Dokumen</Link>
                    /{tipeDokumen}
                    </p>
                </div>
                <div>
                    <p className="font-[700] text-[14px] lg:text-[33px] leading-0 lg:leading-[40px] tracking-[0.25px] text-center">Pembuatan Dokumen - {tipeDokumen}</p>
                </div>
            </div>
            <div className="mx-[25px] lg:mx-[100px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-[24px] mt-[24px] lg:mt-[48px]">
                    {dokumen.map((data,index) => {
                        return (
                            <Link href={`/kategori/${router.query.dokumen}/tanah`} key={index}>
                                <div className="flex justify-center">
                                    <div className="rounded-[8px] border hover:border-2 hover:border-blue-600 w-full lg:w-[291px] h-auto lg:h-[304px] bg-white p-[8px] lg:p-[16px] flex flex-col justify-between">
                                        <div className={`w-auto h-[100px] lg:w-[259px] lg:h-[200px] flex justify-center`}>
                                            <img src={data.img} className="h-full object-cover rounded-[8px]"/>
                                        </div>
                                    
                                        <div className="space-y-[16px]">
                                            <p className="font-[700] text-[10px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px] text-[#344054]">{data.judul}</p>
                                            <p className="font-[400] text-[8px] lg:text-[12px] leading-0 lg:leading-[18px] tracking-[0.4px] font-[#252A31]">mulai dari <span className="font-[700] text-[#121F86]">{data.harga}</span></p>
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

export default Dokumen;
