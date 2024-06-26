import {fakeNetwork} from './utils.js'

export async function fetchApiMovie() {
    let answer = await fetch('http://localhost:8080/api/movie');
    let data = await answer.json();
    return data; 
}

export async function fetchMovieByType(typeId) {
    let answer = await fetch(`http://localhost:8080/api/movie/type/${typeId}`);
    let data = await answer.json();
    return data; 
}

export async function fetchMovieBySearch(Search) {
    let answer = await fetch(`http://localhost:8080/api/searchContent?search=${Search}`);
    let data = await answer.json();
    return data; 
}


export async function fetchOurTeams(teamName){
    await fakeNetwork();
    let answer = await fetch('/src/lib/data/teams-data.json');
    let data = await answer.json();
    return data[teamName];
}

export async function fetchTestimonialData(teamName){
    let answer = await fetch('/src/lib/data/testimonial-data.json');
    let data = await answer.json();
    data = data[teamName];
    // choose 3 random testimonies
    let testimonies = [];
    for(let i=0; i<3; i++){
        let index = Math.floor(Math.random() * data.length); // random index
        testimonies.push(data[index]); // add to testimonies
        data.splice(index, 1); // remove from data to avoid duplicates
    }
    return testimonies;
}

export async function fetchPricingData(){
    let answer = await fetch('/src/lib/data/pricing-data.json');
    let data = await answer.json();
    return data;  
}

export async function login(username, password) {
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    return await response.json();
}
