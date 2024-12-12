import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../routes/MainContext";
import { getCourseData, getTeamData, getTemoignageData } from "../../../controllers/MainController";
import Pagination from "../../../pagination/Pagination";

function AgroBusiness() {
    const { setLoader } = useContext(MainContext);
    const [courseData, setCourseData] = useState([])
    const [entries, setEntries] = useState([]);
    const [teamData, setTeamData] = useState([])
    const [testimonialData, setTestimonialData] = useState([])

    const getAllDatas = async (page = 0) => {
        try {
            setLoader(true)
            const [courseDatas, teamDatas, testimonialDatas] = await Promise.all([
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
        {/* Banner Area */}
        <section className="banner_area">
            <div className="container">
                <h6>Nos Services</h6>
                <h2>Agro-business</h2>
                <ol className="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#">Nos Services</a></li>
                    <li><a href="/agro-business" className="active">Agro-business</a></li>
                </ol>
            </div>
        </section>
        {/* Banner Area */}

        {/* Blog Area */}
        <section className="blog_area" style={{ paddingTop: 30 }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 blog_list">

                        {/* Blog_Single */}
                        <div className="blog_single">
                            <div className="blog_heding">
                                <h2>L'accompagnement que nous proposons dans le domaine de l'agro-business</h2>
                            </div>
                            <p>Notre incubateur offre un accompagnement sur mesure aux entrepreneurs de l'agro-business, les aidant à transformer leurs idées innovantes en projets concrets et durables. Nous mettons à leur disposition un écosystème stimulant et collaboratif, ainsi qu'une expertise reconnue dans le secteur agricole. Grâce à nos mentors expérimentés, nos programmes de formation adaptés et notre réseau de partenaires privilégiés, nous guidons les startups de l'agro-business à travers toutes les étapes de leur développement, de l'idéation à la commercialisation. Nous les aidons à affiner leurs modèles économiques, à accéder à des financements, à développer leurs réseaux et à relever les défis spécifiques du secteur agricole.</p>
                            <p>Notre accompagnement dans l'agro-business se distingue par une approche personnalisée et pragmatique. Nous proposons des solutions adaptées aux besoins spécifiques de chaque projet, en tenant compte des enjeux locaux et des tendances du marché. Nos programmes couvrent un large éventail de domaines, tels que l'agriculture de précision, l'agroécologie, l'alimentation durable, la transformation alimentaire et la distribution. En outre, nous encourageons l'innovation ouverte et la collaboration entre les startups, les chercheurs, les agriculteurs et les acteurs de la chaîne de valeur alimentaire. Notre objectif est de contribuer à la construction d'un système alimentaire plus durable, plus résilient et plus équitable.</p>
                        </div>
                    </div>
                    {/* Right Sidebar */}
                </div>
            </div>
        </section>
        {/* Blog Area */}

        {/* Get started */}
        <section className="get_started_area">
            <div className="container">
                <h2>Avec M-hub votre partenaire d'affaire,</h2>
                <p>Développez votre startup technologique en bénéficiant de notre expertise, de notre réseau et de notre espace de coworking dédié. Nous vous accompagnons à chaque étape de votre croissance pour transformer votre idée en succès</p>
                <a href="/contact" className="theme_btn">Contactez-nous </a>
            </div>
        </section>
    </>
}

export default AgroBusiness;