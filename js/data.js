var divPicture = document.querySelector('.main');
//console.log(divPicture);



class Show{
    constructor(id, title, cover){
        this.id = id;
        this.title = title;
        this.cover = cover;
    }
}

function showCreate(){
    return new Show(id,title, cover)
};


// function fetchShows(){
//     $.ajax({
//         methode: 'GET',
//         url: 'http://api.tvmaze.com/shows'
//     }).done(function(data){
//         console.log(data);
//     })
// }

$.get('http://api.tvmaze.com/shows', function(data){
    console.log(data);
    console.log(data[0]);
  for(var i=0; i<20; i++){
    //console.log(data[i].image.medium);
    console.log(data[i].name);
   
    
    
    var img = document.createElement('img');
    var title = document.createElement('h3');
    var div = document.createElement('div');
    var imgLink = document.createElement('a');
    imgLink.setAttribute('href', `profile.html?id=${data[i].id}`);
    img.setAttribute("src", data[i].image.medium);
    img.style.width = '400px';
    img.style.marginBottom = '50px';
    imgLink.appendChild(img);
    divPicture.appendChild(img);

    // title.textContent = data[i].name;
   
    // div.appendChild(title);
    // divPicture.appendChild(div)
    
  }

})