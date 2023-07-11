let words = [
    "The quick brown fox jump over the lazy dog",
    " Lions are large and muscular animals.",
    " Adult males typically have a distinctive mane of hair around their necks, which is absent in females.",
    "The color of their fur varies from light tan to dark brown.",
    "Alexander the Great was a renowned military leader and ruler of the ancient Greek kingdom of Macedon.",
    " He ascended to the throne at the age of 20 after his father, King Philip II, was assassinated. ",
    "Imran Khan initially gained fame as a cricketer.",
    " He represented Pakistan in international cricket from 1971 to 1992.",
    "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.",
    " It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean Sea to the south.",
   

];
let message = document.getElementById('msg');
let typing = document.getElementById('text');
let button = document.getElementById('btn');
let startTime, endtime;

const play = () => {
    let number = Math.floor(Math.random() * words.length);
    message.innerText = words[number];
    let date = new Date();
    startTime=date.getTime();
    button.innerText="Done";
    

}
 const endplay=()=>{
let date=new Date();
endtime=date.getTime();
totalTime=((endtime-startTime)/1000);
console.log(totalTime); 
let totalstring = typing.value;
let wordcount = wordscounter(totalstring);
let speed= Math.round((wordcount/totalTime)*60);
let fmsg= "you type total at "+speed+" words per minutes";
fmsg+=Comparewords(message.innerText,totalstring);
message.innerText=fmsg;
  }

  const Comparewords=(str1,str2)=>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    cnt=0;

    word1.forEach(function(item,index){
        if(item==word2[index]){
            cnt++;
        }
      })
      let errorwords=(word1.length-cnt);
      

      return(cnt +" correct out of "+ word1.length +" words and the total number of error are "+errorwords+" . ");

  }

  

const wordscounter =(str)=>{
let response= str.split(" ").length;
console.log(response);
 return response;

 


}




button.addEventListener('click',function () {
    if (this.innerText == 'Start') {
        typing.disabled = false;
        play();
        
    }else if(this.innerText="Done"){
        typing.disabled = true;
        endplay();
    }
})




