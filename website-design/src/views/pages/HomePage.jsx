import { useContext, useEffect, useState } from 'react';
import '../../assets/SliderItem.css'
import Carousel from 'react-bootstrap/Carousel';
import { MainContext } from '../../routes/MainContext';
import { getAboutData, getCourseData, getEventsData, getPartnersData, getSlideData, getTeamData, getTemoignageData } from '../../controllers/MainController';

function HomePage() {
    const [slideData, setSlideData] = useState([])
    const { setLoader } = useContext(MainContext);
    const [aboutData, setAboutData] = useState({})
    const [courseData, setCourseData] = useState([])
    const [eventData, setEventData] = useState([])
    const [teamData, setTeamData] = useState([])
    const [testimonialData, setTestimonialData] = useState([])
    const [partnersData, setPartnersDataData] = useState([])

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const [slides, aboutDatas, courseDatas, eventDatas, teamDatas, testimonialDatas, partnersDatas] = await Promise.all([
                getSlideData(),
                getAboutData(),
                getCourseData(0),
                getEventsData(),
                getTeamData(),
                getTemoignageData(),
                getPartnersData()
            ])
            setSlideData(slides);
            setAboutData(aboutDatas);
            setCourseData(courseDatas.data);
            setEventData(eventDatas.data);
            setTeamData(teamDatas);
            setTestimonialData(testimonialDatas);
            setPartnersDataData(partnersDatas)
            setLoader(false)
        } catch (error) {
            console.log(error)
            setLoader(false)
        }
    }

    const formatDate = (isoString) => {
        const date = new Date(isoString);

        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        return formattedDate;
    }

    useEffect(() => {
        getAllDatas()
    }, [])

    return <>
        {/* Slider Area */}
        <section className="main_slider_area">
            <div id="main_slider" className="rev_slider" data-version="5.1.1RC">
                <Carousel nextLabel='' prevLabel='' className="swiper-wrapper">
                    <Carousel.Item>
                        <div className="slider-item">
                            <img src="assets/slider-1.jpg" alt="" className="slider-bg" style={{ filter: 'brightness(50%)' }} />
                            <div className="slider-content">
                                <h2 className="slider_sm_heding">Nous vous accompagnons...</h2>
                                <h2 className="slider-heading concept_title">Lancez votre entreprise a Goma avec M-Hub</h2>
                                <p className='slider-description'>Bénéficiez de notre expertise, de notre réseau et de notre financement pour transformer votre projet innovant en une entreprise prospère en RDC.</p>
                                <div className="get_started_btn" id="slide-1-layer-6" >
                                    <a href="#" className="theme_btn apply_btn">Contactez-nous</a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slider-item">
                            <img src="assets/slider-2.jpg" alt="" className="slider-bg" style={{ filter: 'brightness(50%)' }} />
                            <div className="slider-content">
                                <h2 className="slider_sm_heding">De l'idée au succès</h2>
                                <h2 className="slider-heading concept_title">Notre incubateur est votre partenaire</h2>
                                <p className='slider-description'>Rejoignez notre communauté d'entrepreneurs passionnés et créatifs pour co-construire l'avenir économique de la RDC.</p>
                                <div className="get_started_btn" id="slide-1-layer-5" >
                                    <a href="#" className="theme_btn apply_btn">Contactez-nous</a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="tp-bannertimer tp-bottom"></div>
            </div>
        </section>
        {/* End Slider Area */}

        {/* Achieve your financial */}
        <section className="achieve_financial_area">
            <div className="container">
                <div className="tittle">
                    <img src="/assets/images/icons/banker.png" alt="" />
                    <h2>Vous avez une idée géniale ? <span>Nous vous aidons à la concrétiser.</span></h2>
                </div>
                <div className="row achieve_inner">
                    <div className="col-12 personal_tittle">
                        <p>Le StartUp Centre M-Hub s'engage à être un partenaire stratégique pour les entrepreneurs et les PME en République Démocratique du Congo.</p>
                        <a href="/contact" className="theme_btn">Rejoignez-nous</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Achieve your financial */}

        {/* About Area */}
        <section className="previous_record_area">
            <div className="previous_img">
                <img src="/assets/about.jpg" alt="" />
            </div>
            <div className="previous_right">
                <div className="alons_text">
                    <h2>Votre startup, notre priorité</h2>
                    <h4>plus de 2 ans d'experience </h4>
                    <p>
                        Le Startup Centre M-Hub est un carrefour dynamique dédié à l’accompagnement et à
                        l'épanouissement des petites et moyennes entreprises(PME) ainsi que des entrepreneurs
                        individuels. Situé au cœur de l'écosystème entrepreneurial du Nord-Kivu en RDC, le StartUp
                        Center-M-Hub offre un environnement stimulant où innovation, collaboration, et croissance sont au
                        centre de toutes les activités.
                    </p>
                    <a href="/about" className="theme_btn">Plus de details</a>
                </div>
                <div className="projects_done row">
                    <div className="col-md-4 col-sm-6 counter_items">
                        <h4>Startups propulsées</h4>
                        <h2 className="counter">15</h2>
                    </div>
                    <div className="col-md-4 col-sm-6 counter_items">
                        <h4>Startups Incubées</h4>
                        <h2><span className="counter">35</span></h2>
                    </div>
                    <div className="col-md-4 col-sm-6 counter_items">
                        <h4>Total Encadreurs</h4>
                        <h2><span className="counter">20</span></h2>
                    </div>
                </div>
            </div>
        </section>
        {/* About Area  */}

        <section className="achieve_financial_area">
        <div className="container">
            <div className="row achieve_inner">
                <div className="col-lg-4 col-md-6 wow fadeIn">
                    <div className="achieve"> 
                        <a href="#">Notre mission</a>
                        <p>Sa mission est de fournir un environnement propice au développement des entreprises à travers des services innovants, des infrastructures 
                            modernes, et un soutien personnalisé, favorisant ainsi la croissance économique et la création d’emplois dans la région.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="achieve">
                        <a href="#">Notre vision</a>
                        <p>Devenir le leader en matière d'accompagnement des PME en RDC, en offrant des services 
                            complets et intégrés pour soutenir la création, le développement, et la pérennisation des entreprises.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.6s">
                    <div className="achieve">
                        <a href="#">Secteur d'activité</a>
                        <p>Le StartUp Centre M-Hub opère dans le secteur mixte innovants, avec une offre diversifiée 
                            d'espaces de travail et de services mutualisés conçus pour répondre aux besoins variés des entrepreneurs des PME.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        {/* services Process*/}
        <div className="application_process" style={{ marginTop: 90 }}>
            <div className="container">
                <div className="tittle la">
                    <h2>Découvrez notre programme <span>d'incubation sur mesure.</span></h2>
                </div>
                <div className="row">
                    {/* Step */}
                    <div className="col-lg-4 col-md-6 wow fadeIn">
                        <div className="step_item">
                            <h3>Agro-Business</h3>
                            <img src="/assets/images/icons/loan-1.png" alt="" />
                            <p>Avec nos encadreurs bien experimentés nous encadrons la jeunesse dans l'agro-business de la creation du projet a sa fin.</p>
                            <a href="#" className="theme_btn">Voir Plus</a>
                        </div>
                    </div>
                    {/* Step */}
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="step_item">
                            <h3>Technologie</h3>
                            <img src="/assets/images/icons/loan-8.png" alt="" />
                            <p className='mb-4'>Nous encadrons les startups qui euvrent dans la technologie a mieux s'organiser et les orienter vers un avenir plus digital.</p>
                            <a href="#" className="theme_btn">Voir Plus</a>
                        </div>
                    </div>
                    {/* Step */}
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="step_item">
                            <h3>Santé</h3>
                            <img src="/assets/images/icons/loan-7.png" alt="" />
                            <p className='mb-3'>Vous avez des embitions pour enover dans la santé? M-hub est la pour vous avec tout ce dont vous avez besoin pour commencer votre activité.</p>
                            <a href="#" className="theme_btn">Voir Plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* blog Area */}
        <section className="latest_news_area">
            <div className="container">
                <div className="tittle la">
                <h2>Ce qui se passe dans notre communauté d'entrepreneurs <span>passionnés et créatifs</span> </h2>
                    <a href="#" className="theme_btn">Voir toutes nos actualités</a>
                </div>
                <div className="row">
                    {/* latest_news */}
                    <div className="col-lg-4 col-md-6 latest_news wow fadeIn" data-wow-delay="0.6s">
                        <a href="#" className="latest_img"><img src="/assets/blog.jpg" alt="" /></a>
                        <a href="#" className="heding">Les aventures de Noel</a>
                        <h6>25 Decembre 2024</h6>
                        <p>Celebrons noel ensemble avec l'equipe de Kta Academy dans nos locaux a partir de 10h.</p>
                        <a href="#" className="red_more">Plus de details</a>
                    </div>
                </div>
            </div>
        </section>
        {/* blog Area */}


        {/* Testimonial Area */}
        <section className="testimonial_area">
            <div className="container">
                <div className="tittle">
                    <h2>Ce que disent nos partenaires <span>Temoignages</span></h2>
                </div>
                <Carousel nextLabel='' prevLabel='' className="testimonial col-md-12">
                    <div className="row">
                    <div className="item col-md-6">
                        <a href="#">Benjamin Muthamu ( EASYGO SARL )</a>
                        <div className="client_info fast_i">
                            <img src="/assets/default-user.png" alt="" />
                            <h4>Financial health</h4>
                            <p>The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute </p>
                        </div>
                        </div>
                        <div className="item col-md-6">
                        <a href="#">John Smith ( CTO )</a>
                        <div className="client_info">
                            <img src="/assets/default-user.png" alt="" />
                            <h4>Financial health</h4>
                            <p>The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute </p>
                        </div>
                    </div>
                    </div>
                </Carousel>
            </div>
        </section>
        {/* End Testimonial Area */}

        {/* Get started */}
        <section className="get_started_area">
            <div className="container">
                <h2>Avec M-hub votre partenaire d'affaire,</h2>
                <p>Développez votre startup technologique en bénéficiant de notre expertise, de notre réseau et de notre espace de coworking dédié. Nous vous accompagnons à chaque étape de votre croissance pour transformer votre idée en succès</p>
                <a href="#" className="theme_btn">Contactez-nous </a>
            </div>
        </section>
        {/* End get started */}

    </>
}

export default HomePage