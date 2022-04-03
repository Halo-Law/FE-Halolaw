import react from "react";

import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import ReservasiKonsultasi from "../components/katalog/ReservasiKonsultasi"

function profile(){
    return (
        <div>
        <Navbar/>
        <ReservasiKonsultasi />
        <Footer />
        </div> 
    )
}

export default profile;