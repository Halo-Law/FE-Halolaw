
function TentangKami(){
    const team = [
        {
            'img' : '/aboutUs/farizi.jpg',
            'nama' : 'Farizi Andira',
            'posisi' : 'Business Development'
        },
        {
            'img' : '/aboutUs/zhafir.jpg',
            'nama' : 'Aditya Zhafir Dhiaulhaq',
            'posisi' : 'UI/UX Designer'
        },
        {
            'img' : '/aboutUs/bijak.jpg',
            'nama' : 'Bijak Algifan Putra',
            'posisi' : 'Front End Web Developer'
        },
        {
            'img' : '/aboutUs/ray.jpg',
            'nama' : 'Reynara Napitupulu',
            'posisi' : 'Marketing'
        },
        {
            'img' : '/aboutUs/wina.jpg',
            'nama' : 'Edwina Khairunnisa',
            'posisi' : 'Marketing'
        }
    ]
    return(
        <div className="flex justify-center mx-5 lg:mx-auto w-auto lg:w-[1000px]">
        <div className="w-full">
            <div className="flex justify-center mx-auto py-8 md:py-[32px] w-full md:w-[483px] text-center">
                <h1 className="text-[#101828] font-semibold text-2xl md:text-[33px] leading-[40px] tracking-[0.25px]">Startup layanan hukum online nomor #1 di Indonesia</h1>
            </div>
            <div className="w-auto">
                <img src='/aboutUs/image01.jpg'/>
            </div>
            <div className="block md:flex justify-between gap-[120px] mt-[100px]">
                <div className="self-center font-normal text-[16px] leading-[32px] tracking-[0.5px] text-[#344054]">
                    <h5 className="font-bold leading-[18px] tracking-[0.4px] text-[#121F86] pb-2">Tentang Halo Law</h5>
                    <p>HaloLaw merupakan startup dibidang layanan jasa hukum secara online yang melayani pembuatan surat tanah, pendirian badan usaha, pembuatan hak kekayaan intelektual, dan pelayanan notaris lainnya. HaloLaw berkomitmen untuk menyediakan layanan terbaik untuk para pelanggan.</p><br/>
                    <h5 className="font-bold leading-[18px] tracking-[0.4px] text-[#121F86] pb-2">Tentang Halo Law</h5>
                    <p>“Menjadi startup layanan hukum online no 1 di Indonesia”</p><br/>
                    <h5 className="font-bold leading-[18px] tracking-[0.4px] text-[#121F86] pb-2">Misi</h5>
                    <ul className="list-disc ml-4">
                        <li>Menghadirkan praktisi yang kredibel untuk bermitra dengan HaloLaw</li>
                        <li>Memberikan fitur-fitur yang lengkap dan mudah digunakan oleh semua kalangan</li>
                        <li>Memberikan pelayanan terbaik untuk pelanggan</li>
                        <li>Terus berinovasi mengikuti perkembangan zaman</li>
                    </ul>
                </div>
                <img src="/aboutUs/btp.jpg" className="h-[577px] flex mx-auto"/>
            </div>
            <div className="mt-[100px]">
                <h5 className="text-[16px] font-bold leading-[18px] tracking-[0.4px] text-[#121F86] mb-4">Meet Our Team</h5>
                <div className="block sm:flex justify-center mx-auto md:gap-6">
                    <div className="flex md:justify-between justify-around gap-2 md:gap-6 md:mb-0 mb-8">
                    {
                        team.map((person, personIdx) => (
                            personIdx < 3 ?
                            <div>
                                <img src={person.img} className="h-[150px] lg:h-[220px] pb-2" alt="profile"/>
                                <h5 className="text-[#344054] font-bold text-sm tracking-[0.25px] pb-[2px]">{person.nama}</h5>
                                <p className="text-[#1D2939] font-normal text-sm tracking-[0.25px]">{person.posisi}</p>
                            </div>
                            :
                            <></>
                        ))
                    }
                    </div>
                    <div className="flex md:justify-between justify-around gap-2 md:gap-6">
                    {
                        team.map((person, personIdx) => (
                            personIdx >= 3 ?
                            <div>
                                <img src={person.img} className="h-[150px] lg:h-[220px] pb-2" alt="profile"/>
                                <h5 className="text-[#344054] font-bold text-sm tracking-[0.25px] pb-[2px]">{person.nama}</h5>
                                <p className="text-[#1D2939] font-normal text-sm tracking-[0.25px]">{person.posisi}</p>
                            </div>
                            :
                            <></>
                        ))
                    }
                    </div>                
                </div>
            </div>
            <div className="my-[100px]">
                <div className="block md:flex justify-between gap-[40px]">
                    <img src="/aboutUs/img-contact.jpg" alt="img-contact" className="h-[616px] flex mx-auto"/>
                    <div className="self-center p-4 w-full">
                        <div className="mb-12">
                            <h5 className="text-[#101828] text-[23px] font-semibold leading-[32px]">Kontak Kami</h5>
                            <p className="text-[#344054] text-sm font-medium tracking-[0.25px]">Kami sangat senang jika Anda meninggalkan sesuatu di sini. Isi formulir dan kami akan merespon sesegera mungkin.</p>
                        </div>
                        <form>
                            <div className="flex gap-6">
                                <div className="flex flex-col w-full">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Nama </label>
                                    <input type="text" placeholder="Nama Anda" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input type="email" placeholder="Alamat Email" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Subjek</label>
                                <input type="text" placeholder="Misal : Dokumen Hukum" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Isi Pesan</label>
                                <textarea placeholder="Tinggalkan pesan untuk kami" className="w-full text-base px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4 resize-none"></textarea>
                            </div>
                            <input type="submit" value="Submit" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-2"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TentangKami;