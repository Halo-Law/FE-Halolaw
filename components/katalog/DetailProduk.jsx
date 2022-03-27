import HomeIcon from '@mui/icons-material/Home';

export default function DetailProduk() {
    const PageName = "Sertifikat Tanah"
    return(
        <div className=''>
            <div>
                <div className="relative">
                    <div className="absolute -z-10 bg-gradient-to-r from-[#3D8DFF] to-[#2A41C7] h-[140px] md:h-[160px] lg:h-[170px] xl:h-[212px] w-full">
                        
                    </div>
                </div>
            </div>
            <div className='mx-[25px] lg:mx-[100px] relative'>
                <div className='pt-8 pb-[10px] xl:pb-[80px] text-white'>
                    <div className='text-[11px] md:text-[14px]'>
                    <p><a href="#" className=""><HomeIcon className="mb-1 scale-[0.7]"/>Home</a>
                    /
                    <a href="#">Pembuatan Dokumen</a>
                    /Properti/{PageName}
                    </p>
                    </div>
                    <h3 className="font-['Inter'] text-[30px] md:text-[47px] font-[600] pt-6">Sertifikat Tanah</h3>
                </div>
                <div className="font-['Open Sans'] w-auto lg:w-[713px] text-left lg:text-justify text-[#475467] pt-5 pb-12">
                    <div className="text-[16px] leading-[32px] tracking-[0.5px]">
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Deskripsi</h5>
                        <p>Sertifikat tanah adalah surat keterangan sebagai bukti kepemilikan serta hak seseorang atas tanah atau lahan. Sertifikat ini adalah salah satu dokumen negara yang dangat penting.  Kami sudah berpengalaman dalam mengurus surat-surat tanah lebih dari 5 tahun dengan berbagai kasus yang berbeda.</p><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Apa yang akan kami Kerjakan?</h5>
                        <ul>
                            <li>1. Sertifikat Hak Milik (SHM)</li>
                            <li>2. Pembuatan Izin Mendirikan Bangunan (IMB)</li>
                            <li>3. Sertifikat Hak Guna Usaha (SHGU)</li>
                            <li>4. Sertifikat Hak Pakai</li>
                        </ul><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Apa yang Perlu dipersiapkan</h5>
                        <ul>
                            <li>1. Scan/foto Nomor Pokok Wajib Pajak (NPWP)</li>
                            <li>2. Scan/foto Kartu Keluarga (KK) asli</li>
                            <li>3. Scan/foto kartu Tanda Penduduk (KTP) asli</li>
                            <li>4. Scan/foto SPPT PBB</li>
                            <li>5. Scan/foto Surat Pernyataan Kepemilikan Lahan asli</li>
                        </ul><br/>
                        <div>
                            <h5 className="text-[23px] font-bold text-[#1D2939]">Gambar/foto</h5>
                            <div className="w-auto h-[100px] gap-2 flex overflow-auto">
                                <img src="/Dokumen/Properti/Pemasukan.jpg" className=""/>
                                <img src="/Dokumen/Properti/Hibah.jpg" />
                                <img src="/Dokumen/Properti/Jual_Beli.jpg" />
                            </div>
                        </div><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Pertanyaan</h5>
                        <p>Bila Anda memiliki pertanyaan / kendala dalam melakukan transaksi menggunakan Halo Law, Anda dapat membaca pertanyaan-pertanyaan yang sering diajukan di <a href="#" className="text-blue-500">FAQ</a></p>
                    </div>
                </div>
                <div className='bg-white border shadow-[0px_4px_10px_rgba(0,0,0,0.25)] static xl:absolute top-[160px] right-0 w-auto md:w-[336px] mx-0 md:mr-[61px] mb-5'>
                    <div className='bg-[#E4E7EC]'>
                        <h5 className='py-4 px-6 font-bold text-[23px] text-[#1D2939]'>Pemesanan</h5>
                    </div>
                    <div className='p-6 text-[14px] text-[#1D2939]'>
                        <div className='space-y-[8px] mb-8'>
                            <p className='text-[#667085] font-bold'>Mulai dari</p>
                            <h4 className='text-[#2A41C7] text-[33px] font-bold'>Rp700.000</h4>
                        </div>
                        <div className='space-y-[20px]'>
                            <p className='font-[500]'>Anda dapat melakukan konsultasi secara gratis sebelum memesan dokumen legalitas ini.</p>
                            <p><a href='#' className='text-[#3A57E8] font-[600]'>Jadwalkan Kosultasi →</a></p>
                            <p>Pesan sekarang untuk dapat mengurus dokumen legalitas ini.</p>
                        </div>
                        
                    </div>
                    <div>
                        <button className='bg-[#3A57E8] w-full text-white py-6 font-[700]'>Pesan Sekarang</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}