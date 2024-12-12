import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../routes/MainContext";
import { getSingleEventData } from "../../controllers/MainController";

function SingleEventPage() {
    const { id } = useParams();
    const { setLoader } = useContext(MainContext);
    const [singleEvent, setsingleEvent] = useState({})

    const getAllDatas = async () => {
        try {
            setLoader(true)
            const[singleEvents] = await Promise.all([
                getSingleEventData(id),
            ])
            setsingleEvent(singleEvents);
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

    useEffect(()=>{
        getAllDatas()
    },[])

    return<>
    <section className="breadcrumb-wrap bg-f br-bg-1">
            <div className="overlay op-6 bg-black"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <div className="breadcrumb-title">
                            <h2>{singleEvent.title}</h2>
                            <ul className="breadcrumb-menu">
                                <li><a href="/">Accueil </a></li>
                                <li><a href="/events">Actualites</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="project-details-wrap ptb-100">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                        <div className="projecct-details">
                            <div className="event-gallery bg-f" style={{ backgroundImage: `url(${ImageUrl}/${singleEvent.image})`, width:'100%' }}></div>
                            <div className="project-details-para">
                                <h4>{singleEvent.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: singleEvent.description }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                        <div className="sidebar">
                            <div className="course-details-widget sidebar-box">
                                <h5>Détails de l'événement</h5>
                                <ul>
                                    <li>
                                        <p><i className="las la-user-graduate"></i>Date debut</p>
                                        <p>{formatDate(singleEvent.date_start)}</p>
                                    </li>
                                    <li>
                                        <p><i className="las la-clock"></i>End Date</p>
                                        <p>{formatDate(singleEvent.date_end)}</p>
                                    </li>
                                    <li>
                                        <p><i className="las la-check-square"></i>Location</p>
                                        <p>{singleEvent.location}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SingleEventPage;