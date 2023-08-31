//  ! API KEY: key=405e1006cf7440c4aff185525231908

const baseURL = 'http://api.weatherapi.com/v1/astronomy.json';
const apiKey = '405e1006cf7440c4aff185525231908';
let url;


// * Search/Results Box
const infoBox = document.getElementById('centralInfoBox');
const searchBtn = document.getElementById('submitB');
let content = document.getElementsByTagName("p");
const clearBtn = document.getElementById('clearB');

// * Search function
searchBtn.addEventListener('submit', apiPull);

// * Clear function
clearBtn.addEventListener('click', clearForm);

//* Pulling from weatherAPI
function apiPull(zipCode, userDate) {
    if (zipCode.value !== '' || userDate.value !=='') {
        url = baseURL + '?key=' + apiKey + '&q=' + zipCode.value + '&dt=' + userDate.value;
    } else {
        window.alert("please enter a zipcode or date in the format of YYYY-MM-DD")
        // simple data validation to check that at least both boxes are populated
    }
    fetch(url)
    .then(function(moonresponse) {
        return moonresponse.json();
    })
    .then(function(json) {
        displayResults(json);
    })
};

// ! example url for pull: baseURL + '?q=46202&dt=2020-05-19&key=405e1006cf7440c4aff185525231908'
// ? the above will pull data for zip of 46202 on date 2020/05/19

// * displaying results
function displayResults(json) {
    const response = (json.astronomy.astro);
    console.log(response);
    console.log(response.moon_phase);
    

    let moonPicture = document.getElementById('moonphase')

    switch (response.moon_phase) {
        case 'New Moon':
            moonPicture.src = "./assetts/newmoon.png"
            break;
        case 'Waxing Crescent':
            moonPicture.src = "./assetts/waxingcrescent.png"
            break;
        case 'First Quarter':
            moonPicture.src = "./assetts/firstquarter.png"
            break;
        case 'Waxing Gibbous':
            moonPicture.src = "./assetts/waxinggibbous.png"
            break;
        case 'Full Moon':
            moonPicture.src = "./assetts/fullmoon.png"
            break;
        case 'Waning Gibbous':
            moonPicture.src = "./assetts/waninggibbous.png"
            break;
        case 'Last Quarter':
            moonPicture.src = "./assetts/lastquarter.png"
            break;
        case 'Waning Crescent':
            moonPicture.src = "./assetts/waningcrescent.png"
            break;
    }


    // if response[5] = 'New Moon' {
    //     moonPicture.src = "./assetts/newmoon.png";
    // } else if (response[5] = "Waxing Crescent") {
    //     moonPicture.src = "./assetts/waxingcrescent.png";
    // } else if (response[5] = "First Quarter") {
    //     moonPicture.src = "./assetts/firstquarter.png";
    // } else if (response[5] = "Waxing Gibbous") {
    //     moonPicture.src = "./assetts/waxinggibbous.png";
    // } else if (response[5] = "Full Moon") {
    //     moonPicture.src = "./assetts/fullmoon.png";
    // } else if (response[5] = 'Waning Gibbous') {
    //     moonPicture.src = "./assetts/waninggibbous.png";
    // } else if (response[5] = "Last Quarter") {
    //     moonPicture.src = "./assetts/lastquarter.png";
    // } else if (response[5] = "Waning Crescent") {
    //     moonPicture.src = "./assetts/waningcrescent.png";
    // } else {
    //     window.alert("the code is dead, jim");
    // }

    console.log(response.moon_phase);

    // 4 display fields
    let moonTimeRise = content[0];
    let moonTimeSet = content[1];
    let infoIllum = content[2];
    let infoPhase = content[3];

    content[0].innerText += ('          ' + response.moonrise);
    content[1].innerText += ('          ' + response.moonset);
    content[2].innerText += ('          ' + response.moon_illumination + '%');
    content[3].innerText += ('          ' + response.moon_phase);
};


function clearForm (clearB) {
    content[0].innerText = "Moon Rise:"
    content[1].innerText = "Moon Set:"
    content[2].innerText = "Illumination:"
    content[3].innerText = "Phase:"
};

