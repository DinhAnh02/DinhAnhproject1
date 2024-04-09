var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.sort-desc')
var visibility = document.querySelector('.vidibity span')
var wind = document.querySelector('.wind span')
var sunCloud = document.querySelector('.cloud-sun span')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function  changeWetaher(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=2a1ab1d8df38d508340b2b4952a4ac41`
    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200) {
    content.classList.remove('hide')
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility +'(m)'
    wind.innerText = data.wind.speed +'m/s'
    sunCloud.innerText = data.main.humidity + '%'
    let temp = Math.round((data.main.temp - 273.15))
    value.innerText = temp
    shortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
    time.innerText = new Date().toDateString('vi')

       body.setAttribute('class','hot')
       if(temp <= 20) {
       body.setAttribute('class','cold')
       }



    }else{
      content.classList.add('hide')
    }
}   

  search.addEventListener('keypress', function(e){
    if(e.code === 'Enter') {
        let capitalSearch = search.value.trim()
        changeWetaher(capitalSearch)
    }
  })

  changeWetaher('Hanoi')