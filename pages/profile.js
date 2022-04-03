import react from "react";

import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import Profile from "../components/profile/Profile";

function profile(){
    return (
        <div>
        <Navbar/>
        <Profile/>
        <Footer />
        </div> 
    )
}

export default profile;