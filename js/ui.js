//uredjujemo stranicu o pojedinacnim filmovima ili serijama


let posterImage = document.querySelector('.poster');

//let description = document.querySelector('.description');
let row = document.querySelector('.row');
var image = document.getElementsByClassName('imgborder');
console.log(image);
let h1 = document.querySelector('.title');
console.log(h1);



   
//f-ja u kojoj postavljamo podatke o svakom filmu pojedinacno
  function singlePage(event){
    console.log(event.target);
    console.log(event.target.classList.contains('imgborder'));
    if(event.target.classList.contains('imgborder')){
      console.log(event.target.id);
      var id = event.target.id;
    }
    
    $.get(`https://api.tvmaze.com/shows/${id}?embed=cast`, function(data){
     
        console.log(data);
        console.log(data.name);
        console.log(data.summary);
    
   let movieName = document.createElement('h2');
   movieName.textContent = data.name;
   row.textContent = '';
   h1.textContent = '';
   row.appendChild(movieName);
   
   posterImage = document.createElement('img');
   posterImage.setAttribute('src', data.image.medium);
   posterImage.setAttribute = ("class","imgborder");
   posterImage.className = "col-lg-6 col-md-6 col-sm-12";
   
   
   row.appendChild(posterImage);
   let description = document.createElement('div');
   description.innerHTML = data.summary;
   row.appendChild(description);

  
  })
  }
 
 
  row.addEventListener('click', singlePage)



  // f-ja koja ucitava ponovo celu stranu kada se klikne na BitShow
var bitheading = document.querySelector('.navbar-brand');

function refresh(){
  if(bitheading){
    location.reload();
  }
}
bitheading.addEventListener('click', refresh)

