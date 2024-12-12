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
        <section class="banner_area">
            <div class="container">
                <h6>Departements</h6>
                <h2>GLS Inovation</h2>
                <ol class="breadcrumb">
                    <li><a href="index-2.html">Accueil</a></li>
                    <li><a href="#">Departements</a></li>
                    <li><a href="/gls-inovation" class="active">GLS Inovation</a></li>
                </ol>
            </div>
        </section>
        {/* Banner Area */}

        {/* Blog Area */}
        <section class="blog_area" style={{paddingTop:30}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 blog_list">

                        {/* Blog_Single */}
                        <div class="blog_single">
                            <div class="blog_heding">
                                <h2>Great Lakes Services Inovation</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda in. Recusandae et ipsam commodi neque doloremque ut nostrum in vero nihil aperiam officiis, iure veniam aliquam vitae quas ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem quos voluptates dicta voluptatibus debitis deserunt eum, quia consequatur, nisi necessitatibus id velit animi aut eaque magni. Repellat, obcaecati vero.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda in. Recusandae et ipsam commodi neque doloremque ut nostrum in vero nihil aperiam officiis, iure veniam aliquam vitae quas ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem quos voluptates dicta voluptatibus debitis deserunt eum, quia consequatur, nisi necessitatibus id velit animi aut eaque magni. Repellat, obcaecati vero.</p>
                            <img src="assets/images/blog/blog-single-1.jpg" alt="" class="single_img" />
                            <p>Under legislation the FCA is required to formally consult on rules it proposes to introduce. Consultations must be open and transparent, and the FCA cannot prejudge the result. In order to consult, the FCA must have a sufficient evidence base to build its proposals and develop a cost-benefit analysis, </p>
                            <h3>Overdrafts</h3>
                            <p>The FCA believes that the way banks operate and charge for overdrafts needs fundamental reform. In 2016, firms made an estimated £2.3bn in revenue from overdrafts; 30% of this was from unarranged overdrafts.</p>
                            <img src="assets/images/blog/blog-single-2.jpg" alt="" class="single_img" />
                            <p>The FCA is putting forward some immediate proposals today for overdrafts that it believes will save customers up to £140mn a year. Beyond that, the FCA will consider more radical options to ban fixed fees and end the distinctions around unarranged overdraft prices.</p>
                            <p>The conceptual assortment plan is a list of products, or product placeholders, that are planned for a future selling period. The DAS helps planners start building their assortments based on attributes, current styles, or even products still in development with the PLM system. Deloitte’s solution lets marketers develop one integrated assortment representing multiple channel needs, speeding the decision process that surrounds product exposure timing.</p>
                            <div class="bg_text">
                                <p>A better solution is needed, one that defines the assortment process and gives retailers the tools they need to optimize assortments.</p>
                                <a href="#" class="theme_btn">Free Signup</a>
                            </div>
                            <p>Once deployed, retailers begin realizing operational benefits that include optimized assortments, assortment visibility, improved inventory, data-driven decision making, and improved efficiency. In addition to operational improvements, we’re seeing an impact in financial results, such as improved sell-through rate, increased sales,</p>
                            <div class="comments_area">
                                <h4>0 Comments <span>Barisal Blog</span><a href="#">login</a></h4>
                                <div class="media">
                                    <img src="assets/images/blog/author-2.jpg" alt="" />
                                    <div class="media-body">
                                        <input type="text" class="form-control" placeholder="Start the discussion" />
                                        <h6>Login With</h6>
                                        <ul class="social_login">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" class="google"><i class="fa fa-google"></i></a></li>
                                            <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="relevent_post row">
                                <h3 class="col-12">Other relevent post </h3>
                                <div class="col-md-4 col-sm-6">
                                    <div class="post_item">
                                        <img src="assets/images/blog/relevent-post-1.jpg" alt="" />
                                        <a href="#">Know the Most Important Secret of Workplace Motivation?</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="post_item">
                                        <img src="assets/images/blog/relevent-post-2.jpg" alt="" />
                                        <a href="#">Want to Know How Great Managers Motivate Their Employees at Work?</a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="post_item">
                                        <img src="assets/images/blog/relevent-post-3.jpg" alt="" />
                                        <a href="#">Learn the Best Talent Management Practices for a Better Workforce</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Sidebar */}
                </div>
            </div>
        </section>
        {/* Blog Area */}

        {/* Get started */}
        <section class="get_started_area">
            <div class="container">
                <h2>Ready to get started?</h2>
                <p>Would recommend Money Me to a friend</p>
                <a href="#" class="theme_btn">Apply for business loan </a>
            </div>
        </section>
    </>
}

export default GlsInnovation;