const temp_inp = document.getElementById('w-input'),
search_btn = document.getElementById('search'),
w_place = document.getElementById('wc-name'),
w_temp = document.getElementById('w-temp'),
w_temp1 = document.getElementById('w-temp1'),
w_type = document.getElementById('w-type'),
date_in = document.getElementById('date'),
w_feels = document.getElementById('w-feels'),
w_wind = document.getElementById('w-wind'),
w_humid = document.getElementById('w-humid');
var lat,long;

window.onload=()=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date();
    date_in.innerText =  date.getDate()+"-"+monthNames[date.getMonth()]+"-"+date.getFullYear();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
            get_data_lat_long(lat,long);
        });
    }
};
temp_inp.addEventListener('keydown',(e)=>{
    if(e.code=="Enter"){
        get_data();
        temp_inp.value="";
    }
})
search_btn.addEventListener('click',()=>{
        get_data();
        temp_inp.value="";
});
function get_data()
{
    var city = temp_inp.value;
    const API_KEY = "";
    //enter your API KEY here you can get it from openweathermap website
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(URL)
        .then((response)=>response.json())
        .then((data)=>{
            w_place.innerText = data.name; 
            w_type.innerText = data.weather[0].main;
            w_temp.innerText = Math.floor(data.main.temp)+"°";
            w_temp1.innerText = Math.floor(data.main.temp)+"°";
            w_feels.innerText = data.main.feels_like+"°";
            w_wind.innerText = data.wind.speed+"km/h";
            w_humid.innerText = data.main.humidity+"%";
        }); 
}
function get_data_lat_long(lat,long)
{
    var city = temp_inp.value;
    const API_KEY = "";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(URL)
        .then((response)=>response.json())
        .then((data)=>{
            w_place.innerText = data.name; 
            w_type.innerText = data.weather[0].main;
            w_temp.innerText = Math.floor(data.main.temp)+"°";
            w_temp1.innerText = Math.floor(data.main.temp)+"°";
            w_feels.innerText = data.main.feels_like+"°";
            w_wind.innerText = data.wind.speed+"km/h";
            w_humid.innerText = data.main.humidity+"%";
        }); 
}