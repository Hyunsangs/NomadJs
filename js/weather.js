const API_KEY = "f160ea55c31057458cf10a16d0499584";
function onGeoOK(position) {
    const lat = position.coords.latitude;  //  유저 위치 찾기
    const lon = position.coords.longitude;  // `` 
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response =>  response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })  //크롬 네트워크 통해 자바스크립트가 브라우저를 알아서 해주게 만듬.
                // fetch는 promise이다. 당장 일어나지 않고 시간이 걸린 뒤 일어남.
}
function onGeoError(){
    alert("Can't find you. no Weather for you.");

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); 


// f160ea55c31057458cf10a16d0499584