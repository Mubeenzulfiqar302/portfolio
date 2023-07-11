let songindex = 0;
console.log("Hello world");
let play = document.getElementById("playbutton");
let audio = new Audio("./1.mp3");
let range=document.getElementById("r");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let next = document.getElementById('Next');
let p = document.getElementById('previous');
let songName = document.getElementById("mastersongname");
let gif = document.getElementById('g');
let songs =[
    {songname:"O Bedrdeya", filepath:"./1.mp3" ,coverpath : "SMOCKE.jpg"},
    {songname:"Me wo chand", filepath:"./2.mp3" ,coverpath : "Moon.jpg"},
    {songname:"Mujhe Pyar Hua tha", filepath:"./3.mp3" ,coverpath : "kaifi.jpg"},
    {songname:"Jadu Tenu Meri Yad Auni", filepath:"./4.mp3" ,coverpath : "Alone.jpg"},
    {songname:"Rang Lgya Ishq Da", filepath:"./5.mp3" ,coverpath : "Couple photo.jpg"},
    {songname:"Zihal e Miskin", filepath:"./6.mp3" ,coverpath : "desert cover.jpg"},
]


play.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0){
        audio.play();
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
        gif.style.opacity=1;
        
    }else{
        audio.pause();
        play.classList.add('fa-circle-play')
        play.classList.remove('fa-circle-pause')
        gif.style.opacity=0;
    }
})
audio.addEventListener("timeupdate",()=>{
progress=parseInt((audio.currentTime/audio.duration)*100);
range.value=progress;
console.log(progress);
})

range.addEventListener('change',()=>{
    audio.currentTime=range.value * audio.duration /100
})

songitems.forEach((element , i)=>{
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
})

Array.from(document.getElementsByClassName('songitemplay')).forEach((elememt)=>{
elememt.addEventListener('click',(e)=>{
    allplay();
    


e.target.classList.remove('fa-circle-play')
e.target.classList.add('fa-circle-pause')

songindex = parseInt(e.target.id);
audio.currentTime = 0;
audio.src =    (`./${songindex + 1}.mp3`);
songName.innerText = songs[songindex].songname;
audio.play();

   
})
})




const allplay= () => {

        Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
           
            element.classList.remove("fa-circle-pause");
            element.classList.add("fa-circle-play");
    
    
    
        })


        
    }
    


    next.addEventListener('click',()=>{
            if(songindex>5){
                songindex=0
            }
            else{
                songindex+=1;
            }

            
            audio.src =    (`./${songindex + 1}.mp3`);
            songName.innerText = songs[songindex].songname;
            audio.play();
            audio.currentTime = 0;
            // elememt.classList.remove("fa-circle-play");
            // elememt.classList.add("fa-circle-pause");
        
        
        
        })
        p.addEventListener('click',()=>{
            if(songindex<=0){
                songindex=0
            }else{
                songindex-=1;
            }
            audio.src =    (`./${songindex + 1}.mp3`);
            songName.innerText = songs[songindex].songname;
            audio.play();
            audio.currentTime = 0;
            element.classList.remove("fa-circle-play");
            element.classList.add("fa-circle-pause");
        
        
        
        })
        
        

    // nt.addEventListener('click',()=>{
    //         if(songindex>5){
    //             songindex=0
    //         }
    //         else{
    //             songindex+=1;
    //         }
    //         // songindex = parseInt(play.target.id);
    //         audio.src =  `./${songindex +1} .mp3`;
    //         audio.currentTime = 0;
    //         audio.play();
    //         play.classList.remove("fa-circle-play");
    //         play.classList.add("fa-circle-pause");
            
            
        
        
    //     })
    //     previous.addEventListener('click',()=>{previous
    //         if(songindex<=0){
    //             songindex=0
    //         }else{
    //             songindex-=1;
    //         }
    //         audio.src =    `./${songindex + 1}.mp3`;
         
    //         audio.play();
    //         audio.currentTime = 0;
    //         play.classList.remove("fa-circle-play");
    //         play.classList.add("fa-circle-pause");
        
        
        
    //     })
        
        






























// const makeallplays = () => {

//     Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {

//         element.classList.remove("fa-circle-pause");
//         element.classList.add("fa-circle-play");



//     })
// }



// Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
//     element.addEventListener('click', (e) => {


//         makeallplays();
//         songindex = parseInt(e.target.id);
//         e.target.classList.remove("fa-circle-play");
//         e.target.classList.add("fa-circle-pause");
//         audioElement.src =   "./4.mp3"
 
//     audioElement.play();
//     audioElement.currentTime = 0;
//     element.classList.remove("fa-circle-play");
//     element.classList.add("fa-circle-pause");


       
//     })
// })
// document.getElementById("Next").addEventListener('click',()=>{
//     if(songindex>5){
//         songindex=0
//     }
//     else{
//         songindex+=1;
//     }
//     audioElement.src =  
 
//     audioElement.play();
//     audioElement.currentTime = 0;
//     element.classList.remove("fa-circle-play");
//     element.classList.add("fa-circle-pause");



// })
// document.getElementById("previous").addEventListener('click',()=>{
//     if(songindex<=0){
//         songindex=0
//     }else{
//         songindex-=1;
//     }
//     audioElement.src =    (`./${songindex + 1}.mp3`);
 
//     audioElement.play();
//     audioElement.currentTime = 0;
//     element.classList.remove("fa-circle-play");
//     element.classList.add("fa-circle-pause");



// })

