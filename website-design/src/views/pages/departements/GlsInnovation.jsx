import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../routes/MainContext";
import { getCourseData, getTeamData, getTemoignageData } from "../../../controllers/MainController";
import Pagination from "../../../pagination/Pagination";

function GlsInnovation() {
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
                <h6>Departements</h6>
                <h2>GLS Inovation</h2>
                <ol className="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#">Departements</a></li>
                    <li><a href="/gls-inovation" className="active">GLS Inovation</a></li>
                </ol>
            </div>
        </section>
        {/* Banner Area */}

        {/* Blog Area */}
        <section className="blog_area" style={{paddingTop:30, paddingBottom:0}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 blog_list">

                        {/* Blog_Single */}
                        <div className="blog_single">
                            <div className="blog_heding">
                                <h2>Great Lakes Services Inovation</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda in. Recusandae et ipsam commodi neque doloremque ut nostrum in vero nihil aperiam officiis, iure veniam aliquam vitae quas ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem quos voluptates dicta voluptatibus debitis deserunt eum, quia consequatur, nisi necessitatibus id velit animi aut eaque magni. Repellat, obcaecati vero.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda in. Recusandae et ipsam commodi neque doloremque ut nostrum in vero nihil aperiam officiis, iure veniam aliquam vitae quas ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem quos voluptates dicta voluptatibus debitis deserunt eum, quia consequatur, nisi necessitatibus id velit animi aut eaque magni. Repellat, obcaecati vero.</p>
                            <img src="assets/gls_one.jpg" alt="" className="single_img" />
                        </div>
                    </div>
                    {/* Right Sidebar */}
                </div>
            </div>
        </section>
        {/* Blog Area */}

        <section className="achieve_financial_area" style={{paddingTop:10, paddingBottom:10}}>
            <div className="container">
                <div className="row achieve_inner">
                    <div className="col-lg-4 col-md-6 wow fadeIn">
                        <div className="achieve">
                            <a href="#">La mission de GLS</a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nihil fugit error vero perspiciatis. Deserunt consequatur veritatis quae doloribus officia est dignissimos eius ipsum. Dignissimos magnam illum esse quia obcaecati.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="achieve">
                            <a href="#">La vision de GLS</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum porro, deserunt neque consequatur ullam, ad dicta dolore vero maxime animi quo ut fuga id sapiente fugiat nihil. Esse, sit?</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="achieve">
                            <a href="#">Secteur d'activité de GLS</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi tenetur ab veritatis, iusto quod placeat eum quam quas est accusamus tempore recusandae nisi autem adipisci natus inventore fugit animi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="protfolio_details" style={{paddingTop:20}}>
    	<div className="container">
    		<div className="row">
    			<div className="col-12">
    				<img src="assets/gls_three.jpg" alt="" /> 
    			</div> 
    			<div className="col-lg-7 col-md-6"> 
					<img src="assets/gls_two.jpg" alt="" className=""/> 
    			</div>
    			<div className="col-lg-5 col-md-6">
					<img src="assets/gls_four.jpg" alt="" className=""/>  
    			</div>
    		</div>
    	</div>
    </section>

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

export default GlsInnovation;