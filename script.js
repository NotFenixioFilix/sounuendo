console.log("Welcome to Sounuendo-The home of Music");

let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let eq = document.getElementById('eq');
let songSubtitle=document.getElementById('songSubtitle');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
      {songname: "Disfigure-Blank", filepath: "2.mp3",coverPath: "images/.jpg" },
      {songname: "Martin Garrix-Animals", filepath: "2.mp3",coverPath: "images/2.jpg" },
      {songname: "Elektronomia-Sky High", filepath: "3.mp3",coverPath: "images/3.jpg" },
      {songname: "TheFatRat-JackPot", filepath: "4.mp3",coverPath: "images/4.jpg" },
      {songname: "Amadeus-Legendary", filepath: "5.mp3",coverPath: "images/5.jpg" },
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
    
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        eq.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',() =>{
     console.log('timeupdate');
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
     progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

let songPlay1=document.querySelector('.songPlay1')
songPlay1.addEventListener("click",e =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.src='1.mp3';
        songSubtitle.innerText='Disfigure-Blank';
        songPlay1.classList.remove('fa-circle-play');
        songPlay1.classList.add('fa-circle-pause');
        songPlay2.classList.remove('fa-circle-pause');
        songPlay2.classList.add('fa-circle-play');
        songPlay3.classList.remove('fa-circle-pause');
        songPlay3.classList.add('fa-circle-play');
        songPlay4.classList.remove('fa-circle-pause');
        songPlay4.classList.add('fa-circle-play');
        songPlay5.classList.remove('fa-circle-pause');
        songPlay5.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=1;
    }
    else{
        audioElement.pause();
        songPlay1.classList.remove('fa-circle-pause');
        songPlay1.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
let songPlay2=document.querySelector('.songPlay2')
songPlay2.addEventListener("click",e =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.src='2.mp3';
        songSubtitle.innerText='Martin Garrix-Animals';
        songPlay1.classList.remove('fa-circle-pause');
        songPlay1.classList.add('fa-circle-play');
        songPlay2.classList.remove('fa-circle-play');
        songPlay2.classList.add('fa-circle-pause');
        songPlay3.classList.remove('fa-circle-pause');
        songPlay3.classList.add('fa-circle-play');
        songPlay4.classList.remove('fa-circle-pause');
        songPlay4.classList.add('fa-circle-play');
        songPlay5.classList.remove('fa-circle-pause');
        songPlay5.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=1;
    }
    else{
        audioElement.pause();
        songPlay2.classList.remove('fa-circle-pause');
        songPlay2.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
let songPlay3=document.querySelector('.songPlay3')
songPlay3.addEventListener("click",e =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.src='3.mp3';
        songSubtitle.innerText='Elektronomia-Sky High';
        songPlay1.classList.remove('fa-circle-pause');
        songPlay1.classList.add('fa-circle-play');
        songPlay2.classList.remove('fa-circle-pause');
        songPlay2.classList.add('fa-circle-play');
        songPlay3.classList.remove('fa-circle-play');
        songPlay3.classList.add('fa-circle-pause');
        songPlay4.classList.remove('fa-circle-pause');
        songPlay4.classList.add('fa-circle-play');
        songPlay5.classList.remove('fa-circle-pause');
        songPlay5.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=1;
    }
    else{
        audioElement.pause();
        songPlay3.classList.remove('fa-circle-pause');
        songPlay3.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
let songPlay4=document.querySelector('.songPlay4')
songPlay4.addEventListener("click",e =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.src='4.mp3';
        songSubtitle.innerText='TheFatRat-JackPot';
        songPlay1.classList.remove('fa-circle-pause');
        songPlay1.classList.add('fa-circle-play');
        songPlay2.classList.remove('fa-circle-pause');
        songPlay2.classList.add('fa-circle-play');
        songPlay3.classList.remove('fa-circle-pause');
        songPlay3.classList.add('fa-circle-play');
        songPlay4.classList.remove('fa-circle-play');
        songPlay4.classList.add('fa-circle-pause');
        songPlay5.classList.remove('fa-circle-pause');
        songPlay5.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=1;
    }
    else{
        audioElement.pause();
        songPlay4.classList.remove('fa-circle-pause');
        songPlay4.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
let songPlay5=document.querySelector('.songPlay5')
songPlay5.addEventListener("click",e =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.src='5.mp3';
        songSubtitle.innerText='Amadeus-Legendary';
        songPlay1.classList.remove('fa-circle-pause');
        songPlay1.classList.add('fa-circle-play');
        songPlay2.classList.remove('fa-circle-pause');
        songPlay2.classList.add('fa-circle-play');
        songPlay3.classList.remove('fa-circle-pause');
        songPlay3.classList.add('fa-circle-play');
        songPlay4.classList.remove('fa-circle-pause');
        songPlay4.classList.add('fa-circle-play');
        songPlay5.classList.remove('fa-circle-play');
        songPlay5.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        eq.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        songPlay5.classList.remove('fa-circle-pause');
        songPlay5.classList.add('fa-circle-play');
        eq.style.opacity=0;
    }
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=4;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime=0;
    audioElement.classList.remove('fa-circle-play');
    audioElement.classList.add('fa-circle-pause');
   
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    songSubtitle.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.classList.remove('fa-circle-play');
    audioElement.classList.add('fa-circle-pause');
})


