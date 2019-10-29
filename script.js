window.addEventListener('load',show)
window.addEventListener('load',countries)
var input = document.querySelector('input')
input.addEventListener('keyup', type)

function show(){
	fetch("https://restcountries.eu/rest/v2/all")
	.then(res=>res.json())
	.then(update)
	.then(details)
}

var container = document.querySelector('.content')

function update(e){
	container.innerHTML=``
	for(var c = 0; c<10/*e.length*/;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital

		container.innerHTML+= `<div class="div">
		<a href="#" class="link" data-key="${e[c].alpha3Code}"><img src="${flag}" alt="${name}"></a>
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
	
}/*fdsafsfdsafdafdsafdsfdddddddd*/
var country =``
var filter = document.querySelectorAll('.filter')
function countries(){
		var link = `https://restcountries.eu/rest/v2/region`
		if(filter[0].innerHTML==='All'){
			filter[0].addEventListener('click',function query(){
			country=``
			fetch(`https://restcountries.eu/rest/v2/all`)
			.then(res=>res.json())
			.then(show)
			})	
		}
		 if(filter[1].innerHTML==='Africa'){
			filter[1].addEventListener('click',function query(){
			country=`africa`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			.then(details)
			})	
		}
		if(filter[2].innerHTML==='America'){
			filter[2].addEventListener('click',function query(){
			country=`americas`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			.then(details)
			})	
		}
		if(filter[3].innerHTML==='Asia'){
			filter[3].addEventListener('click',function query(){
			country=`asia`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			.then(details)
			})	
		}
		if(filter[4].innerHTML==='Europe'){
			filter[4].addEventListener('click',function query(){
			country=`europe`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			.then(details)
			})	
		}
		if(filter[5].innerHTML==='Oceania'){
			filter[5].addEventListener('click',function query(){
			country=`oceania`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			.then(details)
			})
		}
	}

function updateFilter(e){
	var content = document.querySelector('.content')
	content.innerHTML=``
	for(var c=0;c<10/*e.length*/;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital
		content.innerHTML+=`<div class="div">
		<a href="#" class="link" data-key="${e[c].alpha3Code}"><img src="${flag}" alt="${name}"></a>
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
}	
function type(e){
	var h3 = document.querySelectorAll('h3')
	var value = input.value.toUpperCase()
	var div = document.querySelectorAll('.div')
	for(var c= 0; c<div.length;c++){
		if(h3[c].innerHTML.toUpperCase().indexOf(value.toUpperCase())>-1){
		div[c].style.display=""
	}
	else{
		div[c].style.display="none"
	}
	}
}


var button = document.querySelector('.button1')
button.addEventListener('click',function(){
	alert('fdlkj')
})


function details(e){
	var link = document.querySelectorAll('a.link')
	link.forEach(a=>{
		a.addEventListener('click',function(e){
			var name =a.getAttribute('data-key')
			console.log(name)
			document.querySelector('.main').style.display="none"
			var detailsContent= document.querySelector('.details')
			detailsContent.style.display='block'
			fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
			.then(res=>res.json())
			.then(detailsUpdate)
		})
	})
}
function detailsUpdate(e){
	console.log(e)
	var languages = e.languages.map(a=>{
		return a.name
	})
	document.querySelector('.details').innerHTML=`
	<div class="wrapper">
		<section class="detailsUpdate">
			<button class="goBack">Back</button>
			<!--line-break-->
				<div class="break"></div>
			<!--line-break-->
			<img src="${e.flag}">
			<div class="divDetails">
			<div class="div1">
				<h3 class="title">${e.name}</h3>
				<span class="block"><span class="bold">Native Name: </span>${e.nativeName}</span>
				<span class="block"><span class="bold">Population: </span>${e.population}</span>
				<span class="block"><span class="bold">Region: </span>${e.region}</span>
				<span class="block"><span class="bold">Sub Region: </span>${e.subregion}</span>
				<span class="block"><span class="bold">Capital: </span>${e.capital}</span>
			</div>
			<div class="div2">
				<span class="block"><span class="bold">Top Level Domain: </span>${e.topLevelDomain}<span>
				<span class="block"><span class="bold">Currencies: </span>${e.currencies[0].name}<span>
				<span class="block"><span class="bold">Languages: </span>${languages}<span>
			</div>
			<div class="div3">
				<h3>Border Countries:</h3>
				
			</div>
		</div>
			

		</section>
	</div>`
	var border = e.borders.forEach(a=>{
		console.log(a)
		var button = document.createElement('button')
		button.setAttribute('data-key',`${a}`)
		fetch(`https://restcountries.eu/rest/v2/alpha/${a}`)
		.then(res=>res.json())
		.then(a=>{
			button.innerHTML=`${a.name}`
			button.addEventListener('click',function(e){
				var name = button.getAttribute('data-key')
				console.log(name)
				fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
			.then(res=>res.json())
			.then(detailsUpdate)
			})
		})
		document.querySelector('.div3').appendChild(button)
	})
}