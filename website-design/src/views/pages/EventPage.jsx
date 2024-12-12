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

    const getAllDatas = async (page=0) => {
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

        <section className="breadcrumb-wrap  bg-f br-bg-1">
            <div className="overlay op-6 bg-black"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <div className="breadcrumb-title">
                            <h2>Actualités</h2>
                            <ul className="breadcrumb-menu">
                                <li><a href="/">Accueil </a></li>
                                <li>Actualités</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="event-wrap pt-100 pb-100">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-12">
                        <div className="section-title style1 text-center mb-40">
                            <span>Actualités</span>
                            <h2>Dernières nouvelles</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {eventData.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="course-card style3">
                                <div className="course-img">
                                    <a href={`/single-event/${item.id}`}>
                                    <img src={`${ImageUrl}/${item.image}`} style={{width:'100%'}} alt="Image" /></a>
                                    <div className="event-date">
                                        <i className="las la-calendar-week"></i>{formatDate(item.date_start)}
                                    </div>
                                </div>
                                <div className="course-info">
                                    <h3><a href={`/single-event/${item.id}`}>{item.title}</a></h3>
                                </div>
                                <div className="course-metainfo">
                                    <div className="course-metainfo-left">
                                        <p><i className="las la-map-marker-alt"></i>{item.location}</p>
                                    </div>
                                    <div className="course-metainfo-right">
                                        <a href={`/single-event/${item.id}`} className="btn v4">Voir plus</a>
                                    </div>
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
    </>
}

export default EventPage;