const getAboutData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllAboutData`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("About DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getTeamData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllTeamData`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Teams DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getTemoignageData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllTestimonialData`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Temoignage DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getEventsData = async (page=0) => {
    try {
        const response = await fetch(`${BaseUrl}/getAllEventsData?page=${page}`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Events DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getSingleEventData = async (id) => {
        
    try {
        const response = await fetch(`${BaseUrl}/getSingleEventData/${id}`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Single Event DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getCourseData = async (page) => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllCoursesData?page=${page}`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Course DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getSlideData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllSlidesData`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Slides DATA:", res.data)
        if (res.data) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

const getCountElementsData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getCountProject`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Count project DATA:", res)
        if (res) {
            return {
                project:res.project,
                events:res.events,
                partner:res.partner
            }
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}


const getPartnersData = async () => {
        
    try {
        const response = await fetch(`${BaseUrl}/getAllPartnersData`, {
            method: 'GET',
            headers: headerRequest
        });
        const res = await response.json();
        console.log("Count partners DATA:", res)
        if (res) {
            return res.data
        }else{
            return []
        }
    } catch (error) {
        console.error("ERROR:", error);
    }
}

export {
    getAboutData, 
    getTeamData, 
    getTemoignageData, 
    getEventsData, 
    getCourseData,
    getSlideData, 
    getCountElementsData,
    getSingleEventData,
    getPartnersData
}