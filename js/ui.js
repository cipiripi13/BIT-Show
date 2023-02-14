var buttonLoad = document.querySelector('.btn');
//console.log(buttonLoad);


//fja za dugme gde ucitamo jos vise filmova
//ista kao za prvobitno ucitavanje
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