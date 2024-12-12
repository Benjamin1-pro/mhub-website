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
        {/* Banner Area */} 
    <section class="banner_area">
    	<div class="container">
    		<h6>Contact</h6>
    		<h2>Contactez-nous</h2>
    		<ol class="breadcrumb">
                <li><a href="/">Accueil</a></li>   
                <li><a href="/contact" class="active">Contact</a></li> 
            </ol>
    	</div>
    </section>
    {/* Banner Area */} 
    
    {/* Contact info Area */} 
    <section class="contact_info">
    	<div class="container">
    		<div class="row">
    			<div class="col-lg-4 col-md-6">
    				<div class="info">
    					<i class="flaticon-call"></i>
    					<h6>Phone : <a href="#">+243987654213</a></h6>
    				</div>
    			</div>
    			<div class="col-lg-4 col-md-6">
    				<div class="info mail">
    					<i class="flaticon-mail"></i>
    					<h6>Email : <a href="#">contact@glls-cd.com</a></h6>
    				</div>
    			</div>
    			<div class="col-lg-4 col-md-6">
    				<div class="info placeholder">
    					<i class="flaticon-placeholder-1"></i>
    					<h6 style={{lineHeight:'1.2'}}>No101, AV. des orchidees, Q. des volcans, Commune de Goma</h6> 
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    {/* Contact info Area */}     
    
    {/* Map and From Area */} 
    <section class="map_from_area">
        <div class="map_area">
            <div class="map_content"> 
               <img src="assets/images/map.png" alt=""/>
               <div class="marker_area"> 
					<i class="flaticon-placeholder"></i>
					<h4 style={{lineHeight:'1.2'}}>No101, AV. des orchidees, Q. des volcans, Commune de Goma</h4>
               </div>
            </div>
        </div> 
        <div class="contact_inner">   
            <form class="from_main" id="phpcontactform" novalidate="novalidate"> 
               <h4>Votre satisfaction, notre engagement.</h4>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" name="name" placeholder="votre Nom"/>
                </div>  
                <div class="form-group">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Votre Email"/>
                </div>
                <div class="form-group">   
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Sujet"/> 
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="message" name="message" placeholder="Votre Message"></textarea>
                </div>
                <div class="form-group">
                    <button class="theme_btn btn" id="js-contact-btn" type="button">Envoyer</button> 
                    <div id="js-contact-result" data-success-msg="Form submitted successfully." data-error-msg="Messages Successfully"></div>
                </div>
            </form>
        </div>
    </section>
    </>
}

export default ContactPage;