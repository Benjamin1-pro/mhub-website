import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../routes/MainContext"
import Carousel from 'react-bootstrap/Carousel';
import { getAboutData, getEventsData, getPartnersData, getTeamData, getTemoignageData } from "../../controllers/MainController";

function AboutPage() {
    const { setLoader } = useContext(MainContext);
    const [aboutData, setAboutData] = useState({})
    const [teamData, setTeamData] = useState([])
    const [eventData, setEventData] = useState([])
    const [testimonialData, setTestimonialData] = useState([])
    const [partnersData, setPartnersDataData] = useState([])

    const formatDate = (isoString) => {
        const date = new Date(isoString);

        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        return formattedDate;
    }

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const [aboutDatas, teamDatas, testimonialDatas, eventDatas, partnersDatas] = await Promise.all([
                getAboutData(),
                getTeamData(),
                getTemoignageData(),
                getEventsData(),
                getPartnersData()
            ]);
            setAboutData(aboutDatas);
            setTeamData(teamDatas);
            setTestimonialData(testimonialDatas);
            setEventData(eventDatas.data);
            setPartnersDataData(partnersDatas)
            setLoader(false)
        } catch (error) {
            console.error("Error fetching abouts data:", error);
            setLoader(false)
        }
    }

    useEffect(() => {
        getAllDatas();
    }, [])

    return <>
        {/* Banner Area */}
        <section className="banner_area">
            <div className="container">
                <h6>A propos de nous</h6>
                <h2>De l'idée à l'impact : <span>le parcours de M-Hub</span></h2>
                <ol className="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about" className="active">A propos de nous</a></li>
                </ol>
            </div>
        </section>
        {/* Banner Area */}

        {/* Achieve your financial */}
        <section className="achieve_financial_area">
            <div className="container">
                <div className="row achieve_inner">
                    <div className="col-lg-12 col-md-12 wow fadeIn">
                        <div className="achieve">
                            <a href="#" style={{ textAlign: 'center' }}>M-hub Startup Center</a>
                            <p style={{ maxWidth: '100%', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.</p>
                            <p style={{ maxWidth: '100%', textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.
                                Lorem ipsum distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.</p>
                            <p style={{ maxWidth: '100%', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.</p>
                            <p style={{ maxWidth: '100%', textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in repellat quo corrupti facilis, distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.
                                Lorem ipsum distinctio eligendi, voluptas dolor consequatur provident nisi sed qui ratione ducimus? Temporibus optio ad quod alias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Achieve your financial */}

        {/* Previous Record */}
        <section className="previous_record_area pra_2">
            <div className="previous_right">
                <div className="previous_content">
                    <div className="alons_text">
                        <h2>SERVICES MUTUALISÉS</h2>
                        <h4>M-Hub : Des services mutualisés pour propulser les startups. </h4>
                        <p>Pour réduire les coûts opérationnels des PME et offrir un soutien essentiel,
                            le StartUp Center M-Hub propose des services mutualisés qui permettent
                            aux entreprises de partager des ressources tout en accédant à des services professionnels de haute qualité.</p>
                        <a href="/contact" className="theme_btn">Contactez-nous</a>
                    </div>
                    <div className="projects_done row">
                        <div className="col-md-4 col-sm-6 counter_items">
                            <h4>Propulsées</h4>
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

                <div className="previous_img_2">
                    <img src="assets/service_mutualiser.jpg" alt="" />
                </div>
            </div>
        </section>
        {/* Previous Record */}

        <section className="required_documents" style={{ marginBottom: 90 }}>
            <div className="container">
                <div className="table-responsive">
                    <div className="tittle la">
                        <h2 className="pt-0"><span className="text-white">LOCATION DES ESPACES</span></h2>
                    </div>
                    <p className="text-white mt-3 mb-3">Le Startup Centre M-hub propose une variété d'options de location
                        d'espaces pour répondre aux besoins spécifiques des entreprises, qu’elles soient en phase de démarrage ou déjà établies.</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Location de Bureau Privé</td>

                            </tr>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Location d’Espace de Travail partagé</td>

                            </tr>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Location d’Espace d’Exposition</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Auditorium (payant pour les non-résidents)</td>

                            </tr>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Salle de Réunion(payant pour les non-résidents)</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-check-circle"></i></td>
                                <td>Salle Informatique(payant pour les non-résidents)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* Our Purpose Area */}
        <section className="purpose_area">
            <div className="container">
                <p className="tittle_p">Espaces de coworking équipés: Bureaux individuels ou partagés, salles de réunion, espaces détente...</p>
                <div className="media mission">
                    <img src="assets/service_partage.jpg" alt="" style={{ width: 500, marginBottom: 25 }} />
                    <div className="media-body getting_loan_area pt-0">
                        <div className="tittle la">
                            <h2 className="pt-0"><span>SERVICES COLLECTIFS PARTAGÉS</span></h2>
                        </div>
                        <div className="row getting_inner">
                            <div className="col-lg-12 getting_first" style={{ paddingTop: 30 }}>
                                <div className="getting_items gi_f wow fadeInUp">
                                    <span></span>
                                    <h3>Accès au Financement</h3>
                                    <p>Assistance pour l’obtention de financements via des partenariats avec des banques,
                                        des fonds d’investissement et des programmes de subventions. Le centre offre des services
                                        de préparation de dossiers, de conseil en financement, et de mise enrelation avec des investisseurs.</p>
                                </div>
                                <div className="getting_items wow fadeInUp" data-wow-delay="0.3s">
                                    <span></span>
                                    <h3>Comptabilité et Fiscalité</h3>
                                    <p>Services de comptabilité partagée, incluant la gestion des livres
                                        comptables, les déclarations fiscales, et les audits financiers.
                                        Les PME peuvent également bénéficier de conseils en optimisation fiscale.</p>
                                </div>
                                <div className="getting_items gi_f fadeInUp" data-wow-delay="0.6s">
                                    <span></span>
                                    <h3>Marketing</h3>
                                    <p>Accès à des services de marketing digital et traditionnel, incluant la gestion des réseaux
                                        sociaux, la création de campagnes publicitaires, et le développement de stratégies de marque.</p>
                                </div>
                                <div className="getting_items wow fadeInUp" data-wow-delay="0.9s">
                                    <span></span>
                                    <h3>Ressources Humaines(RH)</h3>
                                    <p>Services partagés de gestion des ressources humaines, incluant le recrutement,
                                        la gestion des performances, la formation continue, et le conseil en gestion du personnel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="eligibility_criteria_area">
                    <div className="eligibility_criteria">
                        <div className="eligibility">
                            <h3>INFRASTRUCTURE PARTAGEE</h3>
                            <ul>
                                <li><strong>Électricité et Internet :</strong> Ces deux éléments sont essentiels pour le fonctionnement quotidien des startups. Un accès fiable et à haut débit à l'électricité et à Internet permet aux entrepreneurs de travailler efficacement et de rester connectés à leurs clients et partenaires.</li>
                                <li><strong>Assainissement et eau : </strong>Des installations sanitaires propres et un accès à l'eau potable sont non seulement des exigences de base, mais ils contribuent également à créer un environnement de travail sain et agréable pour les entrepreneurs.</li>
                                <li><strong>Sécurité : </strong>Un environnement sécurisé est primordial pour attirer et retenir les talents. Des systèmes de surveillance, des accès contrôlés et des assurances adaptées permettent de protéger les personnes et les biens.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="holidaying">
                        <h3 className="text-white">SERVICES ADDITIONNELS</h3>
                        <ul>
                            <li><strong>MENTORAT ET COACHING : </strong> Le StartUp Center met à disposition un réseau de mentors
                                expérimentés pour accompagner les entrepreneurs dans le développement de leurs compétences en leadership, gestion d’entreprise, et innovation.</li>
                            <li><strong>ACCOMPAGNEMENT À L’INNOVATION : </strong> Soutien aux entreprises dans l’intégration de nouvelles technologies etpratiques innovantes. Le StartUp Center M-Hub
                                propose des ateliers sur l’innovation, des partenariats avec des centres de recherche, et des programmes de R&D.</li>
                            <li><strong>NETWORKING ETÉVÉNEMENTS : </strong>Organisation régulière de forums, de conférences, et d’ateliers
                                pour favoriser les échanges entre entrepreneurs, investisseurs, et autres acteurs clés de l’écosystème entrepreneurial.
                                Les événements incluent des sessions de pitch, des journées portes ouvertes, et des foires aux start-ups pour mettre en valeur les entreprises locales.</li>
                            <li><strong>SUPPORT JURIDIQUE : </strong>Assistance juridique pour les entreprises résidentes et non-résidentes, incluant la rédaction de contrats,le conseil en propriété intellectuelle, et l'accompagnement dans les démarches de création d’entreprise.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
        {/* End Our Purpose Area */}

        {/* Testimonial Area */}
        <section className="testimonial_area">
            <div className="container">
                <div className="tittle">
                    <h2>Ce que disent nos partenaires <span>Temoignages</span></h2>
                </div>
                <Carousel nextLabel='' prevLabel='' className="testimonial col-md-12">
                    <div className="row">
                        <div className="item col-md-6">
                            <a href="#">Benjamin Muthamu ( CTO )</a>
                            <div className="client_info fast_i">
                                <img src="/assets/default-user.png" alt="" />
                                <p>M-hub, c'est bien plus qu'un simple incubateur. C'est une véritable communauté d'entrepreneurs passionnés par la santé. Les échanges avec les autres startups et les événements organisés régulièrement m'ont permis de développer mon réseau et d'acquérir de nouvelles compétences. Je me sens privilégié de faire partie de cette aventure.</p>
                            </div>
                        </div>
                        <div className="item col-md-6">
                            <a href="#">John Smith ( CTO )</a>
                            <div className="client_info">
                                <img src="/assets/default-user.png" alt="" />
                                <p>J'ai rejoint M-hub avec une idée de startup en santé, mais sans réelle expérience dans ce domaine. Grâce à l'accompagnement personnalisé et aux conseils avisés de leurs experts, j'ai pu affiner mon projet, trouver les bons partenaires et lancer mon entreprise avec succès. M-hub m'a fourni tous les outils nécessaires pour réussir.</p>
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
                <a href="/contact" className="theme_btn">Contactez-nous </a>
            </div>
        </section>
        {/* End get started */}
    </>
}

export default AboutPage