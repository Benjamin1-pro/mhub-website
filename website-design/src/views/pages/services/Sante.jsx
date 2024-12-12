import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../routes/MainContext";
import { getCourseData, getTeamData, getTemoignageData } from "../../../controllers/MainController";
import Pagination from "../../../pagination/Pagination";

function Sante() {
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
                <h2>Santé</h2>
                <ol className="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#">Nos Services</a></li>
                    <li><a href="/sante" className="active">Santé</a></li>
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
                                <h2>L'accompagnement que nous proposons dans le domaine de la Santé</h2>
                            </div>
                            <p>Notre incubateur offre un environnement stimulant pour les startups innovantes dans le secteur de la santé. Nous accompagnons les entrepreneurs à transformer leurs idées en solutions concrètes qui répondent aux défis de santé actuels. Grâce à notre réseau d'experts médicaux, de chercheurs et d'investisseurs, nous aidons les startups à développer des produits et services innovants dans des domaines tels que la télémédecine, la santé connectée, la biotechnologie et les dispositifs médicaux. Nous proposons des programmes de formation adaptés, un accès à des infrastructures de recherche et un soutien financier pour accélérer le développement de leurs projets.</p>
                            <p>Notre approche dans le domaine de la santé se distingue par une forte orientation vers l'impact social et environnemental. Nous encourageons les startups à développer des solutions durables et accessibles à tous. Nous les aidons à naviguer dans le complexe paysage réglementaire du secteur de la santé et à établir des partenariats avec les acteurs clés de l'écosystème. Notre objectif est de contribuer à améliorer la qualité de vie des patients, à prévenir les maladies et à rendre les soins de santé plus efficaces.</p>
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

export default Sante;