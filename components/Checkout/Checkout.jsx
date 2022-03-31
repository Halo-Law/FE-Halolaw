import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select'
import axios from 'axios';

export default function Checkout(){
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "white",
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
          // Removes weird border around container
          boxShadow: state.isFocused ? null : null,
          borderRadius :'8px',
          paddingLeft: '10px'
        }),
        placeholder: (base) => ({
            ...base,
            color: "black",
            paddingLeft: '10px',
          }),
      };

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const { data } = await axios.get('https://raw.githubusercontent.com/mtegarsantosa/json-nama-daerah-indonesia/master/regions.json')
                setData(data)
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const HandlingData = () => {
        const arr = []
        data.map((data) => {
            data.kota.map((kota) => {
                arr.push({value: kota, label: kota})
            })
        })
        return arr
    }

    const options = HandlingData()

    const optionBank = [
        {value: 'Transfer - Bank Mandiri', label : 'Transfer - Bank Mandiri'},
        {value: 'Transfer - Bank BNI', label : 'Transfer - Bank BNI'},
        {value: 'Transfer - Bank BRI', label : 'Transfer - Bank BRI'},
        {value: 'Transfer - Bank Cimb Niaga', label : 'Transfer - Bank Cimb Niaga'}
    ]

    return(
        <div className='block lg:flex lg:justify-center ml-6 md:ml-[50px] lg:ml-0 mr-6 md:mr-[50px] lg:mr-[100px] mt-[60px]'>
            <div className='mr-[40px] xl:mr-[86px] mb-5 xl:mb-0'>
                <button className='flex justify-center bg-[#F2F4F7] px-6 py-[6px] rounded-[8px] w-[128px]' onClick={() => {router.back()}}>
                    <ArrowBackIcon/> <span className='pl-2'>Kembali</span>
                </button>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='mr-0 md:mr-[40px] xl:mr-[80px] w-auto md:w-[336px] xl:w-[397px]'>
                    <div className='space-y-[8px] mb-10'>
                        <h1 className='text-[33px] font-[700] leading-[40px] tracking-[0.25px] text-[#1D2939]'>Checkout</h1>
                        <p className='text-[14px] leading-[20px] tracking-[0.25px] text-[#475467]'>Lengkapi data diri & pastikan semuanya sudah benar</p>    
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nama Lengkap <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="text" placeholder="nama lengkap anda"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nomor Telepon <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="number" placeholder="08*********"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Alamat Lengkap <span className="text-[#3A57E8]">*</span></label>
                        <textarea className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4 resize-none" type="text" placeholder="Contoh:  jl. Telekomunkasi no.1, Dayeuhkolot, kabupaten Bandung, kode pos 40257" rows="4"/>
                    </div>
                   
                </div>
                <div className='w-auto md:w-[336px] border'>
                    <div className='bg-[#E4E7EC] text-left'>
                        <h1 className='text-[#1D2939] text-[23px] leading-[32px] font-[700] px-6 py-4'>Pembayaran</h1>
                    </div>
                    <div className='p-6 bg-white'>
                        <div className='mb-[32px]'>
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Metode Pembayaran <span className="text-[#3A57E8]">*</span></label>
                            <div className='mt-4'>
                                <Select 
                                    options={optionBank}
                                    styles={customStyles}
                                    placeholder={'--Pilih--'}
                                    maxMenuHeight={250}
                                    isSearchable={false}
                                />
                            </div>
                            {/* <select className='w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-4'>
                                <option disabled selected>-- Pilih --</option>
                                <option value="1">Transfer - Bank Mandiri</option>
                                <option value="2">Transfer - Bank BNI</option>
                                <option value="3">Transfer - Bank BRI</option>
                                <option value="4">Transfer - Bank Cimb Niaga</option>
                            </select>     */}
                        </div>
                        <div className='mb-[32px]'>
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Domisili Pengurusan <span className="text-[#3A57E8]">*</span></label>
                            <div className='mt-4'>
                                <Select 
                                    options={options}
                                    styles={customStyles}
                                    placeholder={'--Pilih--'}
                                />
                            </div>
                            
                            {/* <select className='w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-4'>
                                <option disabled selected><input type="text"/></option>
                                <option value="1">Transfer - Bank Mandiri</option>
                                <option value="2">Transfer - Bank BNI</option>
                                <option value="3">Transfer - Bank BRI</option>
                                <option value="4">Transfer - Bank Cimb Niaga</option>
                            </select> */}    
                            
                        </div>
                        
                        <div className='border-b-2 pb-4'>
                            <h1 className='text-sm font-medium text-gray-700 tracking-wide pb-4'>Ringkasan Belanja</h1>
                            <div className='space-y-[8px]'>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-between pt-5 text-[16px] font-[700] leading-[20px] tracking-[0.15px]'>
                            <p>Total</p>
                            <p>Rp 700.000</p>
                        </div>
                    </div>
                    <div className='text-center bg-[#3A57E8]'>
                        <button className='text-white text-[16px] font-[700] leading-[20px] tracking-[0.15px] py-6' onClick={() => {router.push('/CheckoutSucces')}}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}