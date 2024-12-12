import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../routes/MainContext";
import { getAboutData } from "../../controllers/MainController";
import { NavLink } from "react-router-dom";

function HeaderPage() {
    const { setLoader, handleMenuToggle, isMenuOpen, handleCloseMenu } = useContext(MainContext);
    const [aboutData, setAboutData] = useState({})

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const[aboutDatas] = await Promise.all([
                getAboutData(),
            ])
            setAboutData(aboutDatas);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllDatas()
    },[])

    return <>
        {/* Header Top Area */}
        <div className="header_top_area">
            <div className="container">
                <div className="header_top_inner row m-0">
                    <ul className="top_menu col-lg-6 col-md-7 p-0">
                        <li><a href="#"><small>Telephone:</small>+243987654321</a></li>
                        <li><a href="#"><small>Email:</small>contact@gls-cd.com</a></li>
                    </ul>
                    <div className="right_menu col-lg-6 col-md-5 p-0">
                        <ul className="right_nav">
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="dropdown search_dropbown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-search"></i></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <input type="text" placeholder="Rechercher..." />
                                        <span><i className="fa fa-search"></i></span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Header Top Area */}

        {/* Header Area */}
        <header className="main_header_area">
            <div className="container">
                <div className="header_menu">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#" style={{width:170}}>
                            <img src="/assets/mhub-logo.png" alt="" style={{width:'100%'}}/>
                            <img src="/assets/mhub-logo.png" alt="" style={{width:'100%'}}/>
                        </a>
                        {/* Small Divice Menu*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar_supported" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>

                        <div className="collapse navbar-collapse navbar_supported">
                            <ul className="navbar-nav">
                                <li>
                                    <a className="nav-link" href="/">Accueil</a>
                                </li>
                                <li><a className="nav-link" href="/about">A propos</a></li>
                                <li className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Departements</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/gls-inovation">GLS Inovation</a></li>
                                        <li><a href="/safety-plus">Safety Plus</a></li>
                                        <li><a href="/kta-academy">Kta Academy</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Nos Services</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/services">Agro-Business</a></li>
                                        <li><a href="/services">Technologie</a></li>
                                        <li><a href="/services">Santé </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">Actualites</a>
                                </li>
                                <li><a className="theme_btn" href="#">Contactez-nous</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        {/* Header Area */}
    </>
}

export default HeaderPage