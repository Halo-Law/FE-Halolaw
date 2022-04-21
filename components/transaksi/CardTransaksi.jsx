import PrintIcon from '@mui/icons-material/Print';

function CardTransaksi({props}){
    return (
        <>
        <div className='border rounded-lg drop-shadow-sm mb-4'>
            <div className='border-b'>
                <div className='flex justify-between md:py-4 py-1 md:px-6 px-2'>
                    <div className='flex'>
                        <img src={props.img} className='md:h-[85px] h-12 md:w-[85px] w-12 self-center object-cover rounded'/>
                        <div className='flex flex-col justify-between md:ml-6 ml-2'>
                            <div className='flex items-start'>
                                <p className="text-[#667085] text-[10px] md:text-[12px] font-bold tracking-normal md:tracking-[0.4px] self-center">{props.invoice}</p>
                                <div className={`rounded-full bg-[#FAF4FF] font-sans mx-2`}>
                                    <p className={`px-2 py-1 text-[8px] lg:text-[12px] font-[700] ${props.status.toLowerCase()   === "aktif" ? "text-[#6E9E31] " : "text-[#667085]"}`}>{props.status}</p>
                                </div>
                            </div>
                            <div className="space-y-[4px]">
                                <p className="text-[#1D2939] font-medium text-[12px] md:text-[19px] leading-[24px] tracking-normal md:tracking-[0.15px]">{props.judul}</p>
                                <p className="text-[#1B8920] font-bold text-[10px] md:text-[14px] leading-[20px] tracking-normal md:tracking-[0.25px]">{props.harga}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-[20%]'>
                        <p className="text-[#475467] text-[10px] md:text-[12px] font-medium leading-[18px] tracking-[0.4px]">Praktisi:</p>
                        <div className="space-y-[4px]">
                            <p className="text-[#475467] text-[12px] md:text-[16px] font-semibold leading-[20px] tracking-normal md:tracking-[0.5px]">{props.praktisi}</p>
                            <p className="text-[#3A57E8] text-[10px] md:text-[14px] font-medium leading-[20px] cursor-pointer">Lihat alamat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end py-2 md:py-4 px-2 md:px-6 gap-4'>
                <p className='self-center hover:underline cursor-pointer text-xs'><PrintIcon/> Invoice</p>
                <button className={`${props.status.toLowerCase()   === "aktif" ? "bg-[#3A57E8] hover:bg-[#2c48cf] text-white" : "border bg-white text-[#3A57E8] hover:bg-[#2c48cf] hover:text-white"}  px-6 py-3 rounded-lg text-[16px] leading-[20px] tracking-[0.15px] text-xs`}>
                    Update Progress
                </button>
            </div>
        </div>
        </>
    )
}

export default CardTransaksi;