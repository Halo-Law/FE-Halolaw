import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutSuccess(){
    
    const [ ActiveTataPembayaran, setActiveTataPembayaran] = useState(3);
    const [ lihatDetail, setlihatDetail] = useState(false);

    const handleActiveTataPembayaran = (status) => {
        if (ActiveTataPembayaran === status) {
            setActiveTataPembayaran(3)
        } else {
            setActiveTataPembayaran(status)
        }
    }

    const handleLihatDetail = () => {
        setlihatDetail(!lihatDetail)
    }

    return(
        <div className="w-auto md:w-2/3 lg:w-1/2 mx-3 md:mx-auto font-['Inter'] my-[64px]">
            <div className="w-full">
                <div className="flex justify-center w-full mb-10">
                    <div className="w-full space-y-[8px]">
                        <img src="/lupaPassword/rst-success.svg" className="mx-auto"/>
                        <h5 className="text-center text-[23px] leading-[32px] font-[600] text-[#344054]">TRANSAKSI BERHASIL</h5>                   
                    </div>
                </div>
                <div className="border rounded-[8px] shadow-[0px_4px_16px_0px_rgba(58,87,232,0.1)] py-4">
                    <div className="flex justify-between px-10 border-b pb-4">
                        <h5 className="self-center text-[16px] leading-[20px] tracking-[0.15px] font-[500]">Bank Mandiri - Transfer manual</h5>
                        <img src="mandiri.png"/>
                    </div>
                    <div className="flex justify-between px-10 mt-6 text-[14px] text-[#667085] leading-[20px] tracking-[0.25px]">
                        <div className="space-y-[4px]">
                            <p className="font-[500]">Nomor Rekening</p>
                            <p className="text-[19px] text-[#101828] font-[600] leading-[24px]">028846670391</p>
                        </div>
                        <div className="self-end">
                            <button className="flex font-[600] gap-1">
                                <span className='self-center'>Salin</span>
                                <ContentCopyIcon/>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between px-10 mt-6 text-[14px] text-[#667085] leading-[20px] tracking-[0.25px] pb-4">
                        <div className="space-y-[4px]">
                            <p className="font-[500]">Total Pembayaran</p>
                            <p className="text-[19px] text-[#101828] font-[600] leading-[24px]">Rp 700.100</p>
                        </div>
                        <div className="self-end">
                            <button className="flex font-[600] gap-1" onClick={() => handleLihatDetail()}>
                                <span className='self-center'>Lihat detail</span>
                                {lihatDetail ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                            </button>
                            
                        </div>
                        
                    </div>
                    {lihatDetail ? 
                    <div className='p-4 mx-10 bg-[#FFFAE6]'>
                        <p className='text-[#344054] leading-[20px] font-[700] text-[14px] mb-4'>Ringkasan Belanja</p>
                        <div className='border-b text-[14px] pb-4 space-y-[8px] leading-[20px]'>
                            <div className='flex justify-between'>
                                <p className='text-[#475467] font-[400]'>Pembuatan Dokumen</p>
                                <p className='text-[#344054] font-[700]'>Rp 700.000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[#475467] font-[400]'>Pembuatan Dokumen</p>
                                <p className='text-[#344054] font-[700]'>Rp 700.000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[#475467] font-[400]'>Pembuatan Dokumen</p>
                                <p className='text-[#344054] font-[700]'>Rp 700.000</p>
                            </div>
                        </div>
                        <div className='flex justify-between text-[#344054] font-[700] leading-[20px] mt-5'>
                            <p>Total</p>
                            <p>Rp 700.100</p>
                        </div>
                    </div>
                    : '' }
                </div>
                <div className='flex justify-between pt-8 pb-14 gap-8'>
                    <Link href={"/"}>
                        <button className='px-[16px] py-[12px] bg-[#F2F4F7] rounded-md w-full'>
                            <span className='text-[14px] font-semibold leading-[20px] cursor-pointer'>Kembali ke halaman utama</span>
                        </button>
                    </Link>
                    <button className='px-[16px] py-[12px] bg-[#3A57E8] rounded-md w-full text-white'>
                        <span className='text-[14px] font-semibold leading-[20px]'>Upload bukti / Cek status pembayaran</span>
                    </button>
                </div>
                <div className='border rounded-[8px] shadow-[0px_4px_16px_0px_rgba(58,87,232,0.1)] pt-4 pb-5'>
                    <div className='pb-4 border-b px-10'>
                        <span className='text-[#101828] text-[16px] leading-[20px] font-[500] tracking-[0.15px]'>Tata Cara Pembayaran</span>
                    </div>
                    <div className='mx-10 py-5 spcae-y-[8px]'>
                    <div>
                        <button className={`p-4 flex justify-between w-full ${ActiveTataPembayaran === 0 ? 'bg-[#3A57E8] text-white' : 'bg-white'}`} onClick={() => handleActiveTataPembayaran(0)}>
                            <span>Transfer via ATM Mandiri</span>
                            {ActiveTataPembayaran === 0 ?
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                                
                        </button>
                        <div className={`px-[10px] py-[8px] bg-[#F2F4F7] ${ActiveTataPembayaran === 0 ? 'block' : 'hidden'} `}>
                            <ul className='list-disc ml-4 text-[14px] text-[#475467]'>
                                <li>Masukkan kartu ATM Mandiri</li>
                                <li>Pilih Menu Bahasa Indonesia</li>
                                <li>Masukan 6 digit PIN anda dengan benar</li>
                                <li>Pilih menu transaksi lainnya</li>
                                <li>Pilih menu Transfer</li>
                                <li>Pilih menu ke Rekening Mandiri</li>
                                <li>Masukan nomor rekening tujuan (pilih Benar)</li>
                                <li>masukan jumlah uang yang akan ditransfer (pilih Benar)</li>
                                <li>Perhatikan konfirmasi transfer, jika benar pilih Benar</li>
                                <li>Transaksi telah selesai, pilih Keluar atau tekan Cancel.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className={`p-4 flex justify-between w-full ${ActiveTataPembayaran === 1 ? 'bg-[#3A57E8] text-white' : 'bg-white'}`} onClick={() => handleActiveTataPembayaran(1)}>
                            <span>Transfer via Mobile Banking Mandiri</span>
                            {ActiveTataPembayaran === 1 ?
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                            
                        </button>
                        <div className={`px-[10px] py-[8px] bg-[#F2F4F7] ${ActiveTataPembayaran === 1 ? 'block' : 'hidden'} `}>
                            <ul className='list-disc ml-4 text-[14px] text-[#475467]'>
                                <li>Pilih Transfer ke Tujuan Baru</li>
                                <li>Masukan Nama Tujuan Bank Mandiri dan No Rekening (tap Lanjut)</li>
                                <li>Pastikan Nama dan Rekening Penerima sudah Sesuai (tap Lanjut)</li>
                                <li>Masukkan Nominal Transfer (tap Lanjut)</li>
                                <li>Masukan EPIN</li>
                                <li>Transfer berhasil swipe up lihat resi untuk melihat resi</li>
                                <li>Transaksi Berhasil</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className={`p-4 flex justify-between w-full ${ActiveTataPembayaran === 2 ? 'bg-[#3A57E8] text-white' : 'bg-white'}`} onClick={() => handleActiveTataPembayaran(2)}>
                            <span>Transfer via ATM Mandiri</span>
                            {ActiveTataPembayaran === 2 ?
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                            
                        </button>
                        <div className={`px-[10px] py-[8px] bg-[#F2F4F7] ${ActiveTataPembayaran === 2 ? 'block' : 'hidden'} `}>
                            <ul className='list-disc ml-4 text-[14px] text-[#475467]'>
                            <li>Buka halaman ib mandiri</li>
                            <li>Masukan user ID dan password</li>
                            <li>Pilih menu Transfer, pilih Rekening mandiri</li>
                            <li>Pilih rekening asal, nominal, rekening tujuan transfer (Lanjutkan)</li>
                            <li>Aktifkan token dan masukan PIN Token, lalu tekan angka 1 untuk masuk ke mode APPLI 1</li>
                            <li>Input challenge code yang terlihat pada layar PC (ada 8 digit)</li>
                            <li>Masukan PIN Mandiri Untuk Konfirmasi (Lanjutkan)</li>
                            <li>Transaksi Berhasil</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}