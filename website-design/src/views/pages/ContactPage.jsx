import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../routes/MainContext";
import { getAboutData } from "../../controllers/MainController";

function ContactPage() {
    const { setLoader } = useContext(MainContext);
    const [aboutData, setAboutData] = useState({})

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const[aboutDatas] = await Promise.all([
                getAboutData(),
            ])
            setAboutData(aboutDatas);
            setLoader(false)
        } catch (error) {
            setLoader(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllDatas()
    },[])

    return <>
        <section className="breadcrumb-wrap bg-f br-bg-1">
            <div className="overlay op-6 bg-black"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <div className="breadcrumb-title">
                            <h2>Contactez-nous</h2>
                            <ul className="breadcrumb-menu">
                                <li><a href="/">Accueil </a></li>
                                <li>Contactez-nous</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="contact-wrap pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-address">
                            <div className="contact-icon">
                                <i className="ri-phone-line"></i>
                            </div>
                            <div className="contact-info">
                                <h5>Telephone</h5>
                                <p className="mb-0">{aboutData.telephone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-address">
                            <div className="contact-icon">
                                <i className="ri-map-pin-fill"></i>
                            </div>
                            <div className="contact-info">
                                <h5>Addresse</h5>
                                <p className="mb-0">{aboutData.addresse}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-address">
                            <div className="contact-icon">
                                <i className="ri-mail-send-line"></i>
                            </div>
                            <div className="contact-info">
                                <h5>Email Address</h5>
                                <p className="mb-0">{aboutData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="company-location">
            <div className="comp-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
            </div>
        </div>
        <div className="contact-form_wrap pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-40 style1">
                            <span>Contactez-nous</span>
                            <h2>Laissez-nous un Message</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact-form">
                            <form className="form-wrap" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Votre Nom*" id="name"
                                                required data-error="Please enter your name"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" required
                                                placeholder="Addresse Email*" data-error="Please enter your email"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" placeholder="Telephone"
                                                id="phone_number" required data-error="Please enter your phone number"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" placeholder="Sujet" id="msg_subject"
                                                required data-error="Please enter your subject"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group v1">
                                            <textarea name="message" id="message" placeholder="Votre Message.."
                                                cols="30" rows="10" required
                                                data-error="Please enter your message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="button" className="btn v1 d-block w-100">Envoyer</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ContactPage;