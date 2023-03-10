const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];
window.addEventListener('load',dayNightMode)

input.addEventListener('keydown',function(event) {
    if(event.key ==='Enter')
    loadImg();
})

function loadImg(){
  removeImages();

  const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&client_id=RyeZ7hrHdo0eRtp8beQdu88QHWRNOrV_5yXoWkL-hpo';

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      alert(response.status)
  })

  .then(data =>{
    const imagesNodes =[];
    for(let i = 0 ;i < data.results.length;i++){
        imagesNodes[i] = document.createElement('div');
        imagesNodes[i].className = 'img';
        imagesNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        imagesNodes[i].addEventListener('dblclick',function(){
            window.open(data.results[i].links.download,'_blank');
        })
        grid.appendChild(imagesNodes[i]);
    }
  })

}
function removeImages(){
    grid.innerHTML = '';
}

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}