import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../routes/MainContext";
import { getCourseData, getTeamData, getTemoignageData } from "../../../controllers/MainController";
import Pagination from "../../../pagination/Pagination";

function Technologie() {
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
                <h2>Technologie</h2>
                <ol className="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#">Nos Services</a></li>
                    <li><a href="/technology" className="active">Technologie</a></li>
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
                                <h2>L'accompagnement que nous proposons dans le domaine de la technologie</h2>
                            </div>
                            <p>Notre incubateur offre un environnement propice à l'innovation et à la croissance des startups technologiques. Nous accompagnons les entrepreneurs dans la concrétisation de leurs projets les plus ambitieux, en leur fournissant les ressources, les compétences et le réseau nécessaires. Grâce à nos mentors issus du monde de la tech, à nos programmes de formation pointus et à nos partenariats avec des acteurs majeurs de l'écosystème numérique, nous aidons les startups à développer des solutions innovantes et à conquérir de nouveaux marchés. Nous les soutenons dans la conception de leur produit minimum viable, la levée de fonds, le développement commercial et la mise en place de leur stratégie de croissance.</p>
                            <p>Notre approche dans le domaine de la technologie se caractérise par une grande flexibilité et une adaptation constante aux évolutions du marché. Nous couvrons un large spectre de domaines technologiques, tels que l'intelligence artificielle, la blockchain, l'internet des objets, la cybersécurité et les fintech. Nous mettons à disposition des startups des infrastructures technologiques de pointe, des espaces de coworking collaboratifs et un accès à des communautés de développeurs et d'investisseurs. Notre objectif est de favoriser l'émergence de champions technologiques français et de contribuer à renforcer la position de la France dans l'économie numérique mondiale.</p>
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

export default Technologie;