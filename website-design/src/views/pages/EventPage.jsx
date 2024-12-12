import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../routes/MainContext";
import { getEventsData } from "../../controllers/MainController";
import Pagination from "../../pagination/Pagination";

function EventPage() {
    const [eventData, setEventData] = useState([])
    const { setLoader } = useContext(MainContext);
    const [entries, setEntries] = useState([]);

    const formatDate = (isoString) => {
        const date = new Date(isoString);

        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        return formattedDate;
    }

    const getAllDatas = async (page = 0) => {
        try {
            setLoader(true)
            const [eventDatas] = await Promise.all([
                getEventsData(page),
            ])
            setEventData(eventDatas.data);
            setEntries(eventDatas)
            setLoader(false)
        } catch (error) {
            setLoader(false)
            console.log(error)
        }
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

        <section class="banner_area">
            <div class="container">
                <h6>Actualités</h6>
                <h2>Liste de nos Actualités</h2>
                <ol class="breadcrumb">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#">Actualités</a></li>
                    <li><a href="/events" class="active">Liste de nos Actualités</a></li>
                </ol>
            </div>
        </section>
        {/* Banner Area */}

        {/* Blog Area */}
        <section class="blog_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 blog_list">
                        {/*  blog_items*/}
                        <div class="blog_items">
                            <a href="#" class="blog_heding m-0">Les aventures de Noel</a>
                            <img src="assets/blog.jpg" alt="" />
                            <h6>25 Decembre 2024 </h6>
                            <p>Les aventures de Noël sont des récits enchanteurs qui célèbrent la magie de cette période festive. Elles nous transportent souvent dans des mondes féériques où des personnages hauts en couleur vivent des expériences extraordinaires. Qu'il s'agisse du voyage du Père Noël à travers le monde, de contes de fées mettant en scène des créatures magiques, ou d'histoires plus réalistes mettant en avant les valeurs de partage et de générosité, ces récits ont pour but de nous émerveiller et de nous rappeler l'esprit de Noël. Ces aventures, souvent teintées de nostalgie, nous permettent de renouer avec notre enfant intérieur et de croire en la magie de l'impossible. Elles sont un moyen de nous évader du quotidien et de nous plonger dans un univers où tout est possible.</p>
                        </div>
                        <nav class="pagination_area">
                            <ul class="pagination">
                                <li class="page-item disabled"><a class="page-link active" href="#" tabindex="-1">01</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* Right Sidebar */}
                    <div class="blog_rightsidebar col-lg-3">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                        </div>
                        <div class="categories post_widget">
                            <h3>Actualites recentes</h3>
                            <ul>
                                <li>
                                    <h6>25 Dec 2025 : </h6>
                                    <a href="#" class="heding">Les aventures de noel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default EventPage;