var divPicture = document.querySelector('.main');
//console.log(divPicture);
let input = document.querySelector(".form-control");

let div = document.querySelector(".row");
//console.log(div);

class Show{
    constructor(id, title, cover){
        this.id = id;
        this.title = title;
        this.cover = cover;
    }
}


// function fetchShows(){
//     $.ajax({
//         methode: 'GET',
//         url: 'http://api.tvmaze.com/shows'
//     }).done(function(data){
//         console.log(data);
//     }).fail( function (){
    //var error = 'network problems, please try later...'
//})
// }

$.get('http://api.tvmaze.com/shows', function(data){
   // console.log(data);
   // console.log(data[0]);
  for(var i=0; i<20; i++){
    //console.log(data[i].image.medium);
   // console.log(data[i].name);
//kreiramo elemente gde ce se upisivati podaci sa servera
let img = document.createElement("img");
let h3 = document.createElement("h3");
let divTitle = document.createElement("div");
let link = document.createElement("a");
let imgLink = document.createElement("a");


imgLink.setAttribute("href", `profile.html?id=${data[i].id}`)

link.setAttribute("href", `profile.html?id=${data[i].id}`);
link.setAttribute("target", "_blank");
divTitle.className = "col-sm-12 col-md-4 col-lg-3 title";
img.setAttribute("src", data[i].image.medium);
img.setAttribute('class','imgborder');
img.style.width = '250px';
img.style.marginBottom = '30px';
h3.textContent = data[i].name;
link.appendChild(h3);
imgLink.appendChild(img)
divTitle.appendChild(imgLink);
divTitle.appendChild(link);
div.appendChild(divTitle);
    
  }

});


var buttonLoad = document.querySelector('.btn');
//console.log(buttonLoad);
var searchInput = document.getElementById('searchB');
//console.log(searchInput);

//fja za dugme gde ucitamo jos vise filmova
//ista kao za prvobitno ucitavanje samo se ucitava lista do kraja
function loadMore(){
    if(buttonLoad){
        $.get('http://api.tvmaze.com/shows', function(data){
    console.log(data);
    console.log(data[0]);
  for(var i=21; i<data.length; i++){
    //console.log(data[i].image.medium);
   // console.log(data[i].name);
//kreiramo elemente gde ce se upisivati podaci sa servera
let img = document.createElement("img");
let h3 = document.createElement("h3");
let divTitle = document.createElement("div");
let link = document.createElement("a");
let imgLink = document.createElement("a");


imgLink.setAttribute("href", `profile.html?id=${data[i].id}`)

link.setAttribute("href", `profile.html?id=${data[i].id}`);
link.setAttribute("target", "_blank");
divTitle.className = "col-sm-12 col-md-4 col-lg-3 title";
img.setAttribute("src", data[i].image.medium);
img.setAttribute('class','imgborder');
h3.textContent = data[i].name;
link.appendChild(h3);
imgLink.appendChild(img)
divTitle.appendChild(imgLink);
divTitle.appendChild(link);
div.appendChild(divTitle);
    
  }})
    }
}

buttonLoad.addEventListener('click', loadMore)



//kreira se dropdown

let searchBox = document.querySelector('.form-inline');
//console.log(searchBox);
//kreiramo element gde ce upisivati rezultati pretrage
let searchResult = document.createElement('ul');
searchResult.className = 'searcher';

function search(){
    $.get(`http://api.tvmaze.com/search/shows?q=${input.value}`, function(data){
    console.log(data);
    searchBox.appendChild(searchResult);
    searchResult.textContent = ''
    for(var i= 0; i<data.length; i++){
        let liInSearch = document.createElement('li');
        let linkForLi = document.createElement('a');
        linkForLi.setAttribute('href', `profile.html?id=${data[i].id}` );
        linkForLi.setAttribute("target", "_blank");
        liInSearch.textContent = data[i].show.name;
        linkForLi.appendChild(liInSearch);
        searchResult.appendChild(linkForLi);
    }
  
});

}
search();
// dogadjaj koji ce se desiti prilkom svakog klika na tastaturi i unosa u input
input.addEventListener('keyup', search)

