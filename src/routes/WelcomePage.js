import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Welcome from '../Components/Welcome';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
// import NoContent from '../Components/NoContent';


function WelcomePage(){
    return(
        <>
        <NavigationBar/>
        <Welcome/>
        <Cards/>
        {/* <NoContent/> */}
        <Footer/>
        
        </>
    )
}

export default WelcomePage;