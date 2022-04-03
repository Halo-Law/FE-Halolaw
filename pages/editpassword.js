import react from "react";

import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import GantiPassword from "../components/profile/GantiPassword";

function editpassword(){
    return (
        <div>
        <Navbar/>
        <GantiPassword/>
        <Footer />
        </div> 
    )
}

export default editpassword;