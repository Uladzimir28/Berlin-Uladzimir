const headerLocal= document.querySelector('.header');
window.addEventListener('scroll', function (){
    if(screen.height <= window.pageYOffset){
        headerLocal.style.background = 'red';
    }
    else{ headerLocal.style.background = 'none';}
})
const ButtonPlay = document.querySelector('.button-circle');
const VideoLocal= document.getElementById('Myvid')
ButtonPlay.addEventListener('click', function (e){

    if(myVideo.paused){
        VideoLocal.play();
    }else{
        VideoLocal.pause();
    }
})
const month = document.querySelector('.Monthly');
const year = document.querySelector('.Yearly');
month.addEventListener('click', function (e){
    month.style.background = '#50E3C2';
    month.style.borderRadius = '23px';
    year.style.background = 'none';
    console.log(12312);
})
const textYear = document.querySelectorAll('.TypeOfDollar');
const textYearAfter = document.querySelectorAll('.TypeOfAfterDollar')
year.addEventListener('click', function (e){
    year.style.background = '#50E3C2';
    year.style.borderRadius = '23px';
    month.style.background = 'none';
})