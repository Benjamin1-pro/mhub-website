import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../routes/MainContext";
import { getCourseData, getTeamData, getTemoignageData } from "../../../controllers/MainController";
import Pagination from "../../../pagination/Pagination";

function KtaAcademy() {
    const { setLoader } = useContext(MainContext);
    const [courseData, setCourseData] = useState([])
    const [entries, setEntries] = useState([]);
    const [teamData, setTeamData] = useState([])
    const [testimonialData, setTestimonialData] = useState([])

    const getAllDatas = async (page=0) => {
        try {
            setLoader(true)
            const [courseDatas,teamDatas,testimonialDatas] = await Promise.all([
                getCourseData(page),
                getTeamData(),
                getTemoignageData(),
            ])
            setCourseData(courseDatas.data);
            setEntries(courseDatas)
            setTeamData(teamDatas);
            setTestimonialData(testimonialDatas);
            setLoader(false)
        } catch (error) {
            setLoader(false)
            console.log(error)
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

    const getResult = (pages) => {
		
		if (!pages) {
			pages = 0;
		}
		getAllDatas(pages);
	}

    useEffect(() => {
        getAllDatas()
    }, [])

    return <>

        <section className="breadcrumb-wrap bg-f br-bg-1">
            <div className="overlay op-6 bg-black"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <div className="breadcrumb-title">
                            <h2>Nos formations</h2>
                            <ul className="breadcrumb-menu">
                                <li><a href="/">Accueil </a></li>
                                <li>Cours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="project-wrap pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title style1 text-center mb-40">
                            <span>Meilleurs cours
                            </span>
                            <h2>Nos meilleurs cours de l'année</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {courseData.map((item, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="course-card style1">
                                <div className="course-img" style={{height:200}}>
                                    <a href="#"><img src={`${ImageUrl}/${item.image}`} style={{width:'100%', height:'100%'}} alt="Image" /></a>
                                </div>
                                <div className="course-info">
                                    <h3><a href="#">{item.title}</a></h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="row mt-20">
                    <div className="col-lg-12 text-center">
                        <div className="paginate mt-3">
                            <Pagination data={entries} limit={5} onPageChange={getResult} />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="ds-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-wrap style2 ptb-100">
                            <h2>Offre de réduction pour s'inscrire aujourd'hui</h2>
                            <p>Investissez dans votre avenir en profitant de notre réduction exceptionnelle. Nos formations vous apporteront les connaissances et les outils nécessaires pour réussir vos projets. Inscrivez-vous dès maintenant !</p>
                            <a href="/events" className="btn v1 mb-10"> <i className="ri-logout-circle-r-line"></i> Formations en cours</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-wrap style1 right  ptb-100">
                            <h2>Transformez votre vie grâce à l'éducation</h2>
                            <p>Notre offre de formations vous permettra d'acquérir de nouvelles compétences, de développer votre réseau professionnel et d'ouvrir de nouvelles perspectives d'emploi. Transformez votre vie professionnelle dès aujourd'hui.</p>
                            <a href="/events" className="btn v1 mb-10"> <i className="ri-logout-circle-r-line"></i> Formations en cours</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="team-wrap pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title style1 text-center mb-40">
                            <span>Faire de la communication</span>
                            <h2>Notre Equipe</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamData.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-member">
                                <div className="team-member-img">
                                    <img src="assets/default-user.png" alt="Image" />
                                    <ul className="social-profile style1">
                                        <li><a target="_blank" href={item.facebook}><i className="ri-facebook-fill"></i>
                                        </a></li>
                                        <li><a target="_blank" href={item.linkedin}> <i
                                            className="ri-linkedin-fill"></i> </a></li>
                                        <li><a target="_blank" href={item.twitter}> <i className="ri-twitter-fill"></i>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="team-member-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        <section className="testimonial-wrap bg-f testimonial-bg-1 ptb-100">
            <div className="overlay bg-midnight op-8"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title style2 mb-40 text-center">
                            <span>Temoignages</span>
                            <h2>Ce que les gens disent de nous</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonial-slider-one swiper-container">
                            <div className="swiper-wrapper">
                                {testimonialData.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="client-img">
                                                <img src="assets/default-user.png" alt="Image" />
                                            </div>
                                            <div className="client-name">
                                                <h5>{item.name}</h5>
                                                <ul className="rating">
                                                    <li> <i className="ri-star-fill"></i> </li>
                                                    <li> <i className="ri-star-fill"></i> </li>
                                                    <li> <i className="ri-star-fill"></i> </li>
                                                    <li> <i className="ri-star-fill"></i> </li>
                                                    <li> <i className="ri-star-line"></i> </li>
                                                </ul>
                                            </div>
                                            <div className="client-quote">
                                                <p>{item.testimonial}</p>
                                            </div>
                                            <div className="quote-icon">
                                                <i className="ri-double-quotes-r"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>

                            <div className="testimonial-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default KtaAcademy;