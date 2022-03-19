import react from "react";
import Image from "next/image";
import Link from "next/Link"

function Footer(){
    return(
        <div className="bg-[#1D2939] first-letter:font-sans text-[10px] lg:text-[14px]">
            <div className="grid grid-cols-4 gap-3 lg:gap-0 lg:flex mx-[25px] lg:mx-[100px] pt-[64px] pb-[40px] text-white">
                <div className="w-full col-span-2 lg:w-[314px] mr-[120px]">
                    <img src="/logoFooter@2x.png" className="lg:h-[64px] h-[21px] mb-[20px] lg:mb-[40px]" alt="Logo Footer"/>
                    <ul className="list-none space-y-2 lg:space-y-0">
                        <li>Bandung Technoplex, Jl. Telekomunikasi no.1, Kabupaten Bandung, Jawa Barat</li>
                        <li>Telp: (1234) 123 456</li>
                        <li>Email: info@halolawindonesia.co.id</li>
                    </ul>
                </div>
                <div className="w-full lg:w-[187px] mr-[24px] lg:mr-[24px]">
                    <h6 className="mb-[19px] font-bold leading-4">Site Map</h6>
                    <ul className="list-none space-y-[12px] font-[300]">
                        <Link href='/kategori'><li><a href="#" className="hover:text-[#2A41C7]">Pembuatan Dokumen</a></li></Link>
                        <li><a href="#" className="hover:text-[#2A41C7]">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-[#2A41C7]">Artikel</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-[187px]">
                    <h6 className="mb-[19px] font-bold leading-4">Informasi</h6>
                    <ul className="list-none space-y-[12px] font-[300]">
                        <li><a href="#" className="hover:text-[#2A41C7]">FaQ</a></li>
                        <li><a href="#" className="hover:text-[#2A41C7]">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#2A41C7]">Term & Conditon</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-[10px] bg-[#101828] text-[#667085]">
                <span className="ml-[40px] flex self-center">Copyright &copy; 2022 Halo Law</span>
            </div>
        </div>
        
    )
}

export default Footer;