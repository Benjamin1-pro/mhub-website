import { useContext, useEffect, useState } from "react";
import { getAboutData } from "../../controllers/MainController";
import { MainContext } from "../../routes/MainContext";

function FooterPage() {
    const { setLoader } = useContext(MainContext);
    const [aboutData, setAboutData] = useState({})

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const [aboutDatas] = await Promise.all([
                getAboutData(),
            ])
            setAboutData(aboutDatas);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllDatas()
    }, [])

    return <>
        {/* Subscirbe_area */}
        <section className="subscirbe_area">
            <div className="container">
                <div className="row subscirbe_inner">
                    <h2 className="col-lg-5">Souscrivez a notre Newsletter!</h2>
                    <div className="input-group col-lg-7">
                        <input type="email" className="form-control" placeholder="Votre addresse mail" />
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="flaticon-right-arrow"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End subscirbe_area */}
        {/* Footer Area */}
        <footer className="footer_area">
            <div className="container">
                <div className="footer_inner row">
                    <div className="col-xl-4 col-md-5 col-sm-7 footer_logo wow fadeIn">
                        <a href="#"><img src="/assets/mhub-logo.png" alt="" style={{ width: 200 }} /></a>
                        <p>© {new Date().getFullYear()} <a href="#">designed by EASYGO S.A.R.L</a><br /> All rights reserved</p>
                        <ul className="footer_social">
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div className="footer_widget col-xl-2 col-md-4 col-sm-5 wow fadeIn" data-wow-delay="0.2s">
                        <h4>DEPARTEMENTS</h4>
                        <ul className="footer_nav">
                            <li><a href="/safety-plus">Safety Plus</a></li>
                            <li><a href="/kta-academy">Kta Academy</a></li>
                            <li><a href="/gls-inovation">GLS Inovation</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget col-xl-2  col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                        <h4>NOS SERVICES</h4>
                        <ul className="footer_nav">
                            <li><a href="/agro-business">Agro-business</a></li>
                            <li><a href="/technology">Technologie</a></li>
                            <li><a href="/sante">Santé</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget col-xl-2  col-md-4 col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                        <h4>Nos pages </h4>
                        <ul className="footer_nav">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/about">A propos de nous</a></li>
                            <li><a href="/events">Actualités</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget col-xl-2  col-md-5 col-sm-4 wow fadeIn" data-wow-delay="0.6s">
                        <h4>Besoin d'aide?</h4>
                        <ul className="footer_nav">
                            <li><a href="/contact">Contactez-nous</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/* End Footer Area */}

        {/* Scroll Top Button */}
        <button className="scroll-top">
            <i className="fa fa-angle-double-up"></i>
        </button>

        {/* Preloader */}
        {/* <div className="preloader"></div>  */}
    </>
}

export default FooterPage