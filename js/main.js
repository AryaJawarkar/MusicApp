const slides = document.querySelectorAll(".slider");
const newSongName = document.getElementById('newSongName');
const newSongImg = document.getElementById('newSongImg');
const newSongTime = document.getElementById('newSongTime');
const currentSongTime = document.getElementById('currentSongTime');
let volume = document.querySelector("#volume-control");

var count = 0;

slides.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});

document.getElementById("n").addEventListener("click", () => {
  count++;
  slideImage();
});
document.getElementById("p").addEventListener("click", () => {
  count--;
  slideImage();
});

const slideImage = () => {
  slides.forEach((slider) => {
    slider.style.transform = `translateX(-${count * 100}%)`;
  });
};

document.getElementById("ham").addEventListener("click", () => {
  document.getElementById("bug").classList.toggle("change");
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("bug").classList.toggle("change");
});

document.getElementById("inv").addEventListener("click", () => {
  document.body.classList.toggle("inverses");
  document.querySelectorAll(`.dark`).classList.toggle("inverses");
});

document.getElementById("quu").addEventListener("click", () => {
  document.getElementById("qvis").classList.toggle("queuechange");
});
document.getElementById("auq").addEventListener("click", () => {
  document.getElementById("audq").classList.toggle("audc");
});
document.getElementById("vudc").addEventListener("click", () => {
  document.getElementById("vudc1").classList.toggle("volchange");
});
document.getElementById("lip").addEventListener("click", () => {
  document.getElementById("lic").classList.add("logChange");

  document.body.style.filter = "brightness(1px)";
});

document.getElementById("clog").addEventListener("click", () => {
  document.getElementById("lic").classList.remove("logChange");
  document.body.style.backgroundColor = "1";
});

/**
 *!SLIDER FOR SONG CARDS 
 **/

 const Slides = document.querySelectorAll(".song-card");
 let count1 = 0;
 
 Slides.forEach((song, index) => {
   song.style.left = `${index * 100}%`;
 });
 
 document.getElementById("s_b").addEventListener("click", () => {
   count1++;
   SlideImage();
 });
 document.getElementById("s_a").addEventListener("click", () => {
   count1--;
   SlideImage();
 });

 const SlideImage = () => {
   Slides.forEach((song) => {
     song.style.transform = `translateX(-${count1 * 100}%)`;
   });
 };


 /***
  * !section second of songs
  * 
  */ 
 const Slides1 = document.querySelectorAll(".song-card1");
 let count2 = 0;
 Slides1.forEach((song1, index) => {
   song1.style.left = `${index * 100}%`;
  });
  
  document.getElementById("_b").addEventListener("click", () => {
    count2++;
    SlideImage1();
  });
  document.getElementById("_a").addEventListener("click", () => {
    count2--;
    SlideImage1();
  });
 
  const SlideImage1 = () => {
    Slides1.forEach((song1) => {
      song1.style.transform = `translateX(-${count2 * 100}%)`;
    });
  };
 /***
  * !section third of songs
  */

 const Slides2 = document.querySelectorAll(".song-card2");
 let count3 = 0;
 Slides2.forEach((song2, index) => {
   song2.style.left = `${index * 100}%`;
  });
  
  document.getElementById("s_b3").addEventListener("click", () => {
    count3++;
    SlideImage2();
  });
  document.getElementById("s_a3").addEventListener("click", () => {
    count3--;
    SlideImage2();
  });
 
  const SlideImage2 = () => {
    Slides2.forEach((song2) => {
      song2.style.transform = `translateX(-${count3 * 100}%)`;
    });
  };


 /***
  * !section fourth of songs
  */

 const Slides3 = document.querySelectorAll(".song-card3");
 let count4 = 0;
 Slides3.forEach((song3, index) => {
   song3.style.left = `${index * 100}%`;
  });
  
  document.getElementById("s_b4").addEventListener("click", () => {
    count4++;
    SlideImage3();
  });
  document.getElementById("s_a4").addEventListener("click", () => {
    count4--;
    SlideImage3();
  });
 
  const SlideImage3 = () => {
    Slides3.forEach((song3) => {
      song3.style.transform = `translateX(-${count4 * 100}%)`;
    });
  };

/**
 * !GENERATING SONG CARDS  ON QUEUE
 */
let musicItems = [
  {
    id: "1",
    name: "A Thousand Years",
    audio: "audio/0.mp3",
    img: "simages/0.jpg",
    dur :"4:47",
  },
  {
    id: "2",
    name: "On My Way",
    audio: "audio/1.mp3",
    img: "simages/1.jpg",
    dur :"3:36",

  },
  {
    id: "3",
    name: "Faded",
    audio: "audio/2.mp3",
    img: "simages/2.jpg",
    dur :"3:32",

  },
  {
    id: "4",
    name: "Cartoon",
    audio: "audio/3.mp3",
    dur :"3:28",
    img: "simages/3.jpg",
  },
  {
    id: "5",
    name: "Agar Tum Saath",
    audio: "audio/4.mp3",
    dur :"5:41",
    img: "simages/4.jpg",
  },
  {
    id: "6",
    name: "Dilbar",
    audio: "audio/5.mp3",
    dur :"3:04",
    img: "simages/5.jpg",
  },
  {
    id: "7",
    name: "Duniya",
    audio: "audio/6.mp3",
    img: "simages/6.jpg",
    dur :"3:42",

  },
  {
    id: "8",
    name: "Lagdi Lahore Di",
    audio: "audio/7.mp3",
    img: "simages/7.jpg",
    dur :"3:35",

  },
  {
    id: "9",
    name: "Vaaste",
    audio: "audio/8.mp3",
    img: "simages/8.jpg",
    dur :"3:16",

  },
  {
    id: "10",
    name: "Lut Gaye",
    audio: "audio/9.mp3",
    img: "simages/9.jpg",
    dur :"4:57",

  },
];
 
/**
 * ! MUSIC PLAYER MUSIC PLAYS
 * **/
const song = musicItems.map((musicItem)=>{
    return musicItem.audio;
});
console.log(song);



let Scroll = document.getElementById("scroll");
let generateCard = () => {
  return (Scroll.innerHTML = musicItems.map((x) => {
      let { id, name, audio, img,dur } = x;
      return `
       
            <ul id ="${id}" class="mItem">
            <i class="bi bi-play-circle msItem"></i>
            
                <li  class="sort">
                    <a title= "${name}">
                        <div class="load">
                            <img src=${img}
                                alt="">
                        </div>
                    </a>
                    <div class="col u_over">
                        <strong class="u_over"><span class="new_premium">Premium</span>${name}</strong>
                        <small class="v_over">${name}</small>
                    </div>
                   
                    <span title="Duration" class="_d">${dur}</span>
                </li>
            </ul>
          
      `;
    })
    .join(""));
    
};

generateCard();


//DRAG AND DROP FEATURE

const dragArea = document.querySelector(".scroll");
new Sortable(dragArea,{
Animation:350
});

//MUSUC PLAYER
let songIndex = 0;
let audio = new Audio('audio/0.mp3');

let masterPLay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
// audio.play();

const Shuffle = document.getElementById('shuffle');
Shuffle.addEventListener('click',()=>{
  let songIndex = Math.floor(Math.random()*11);
  audio.src =`audio/${songIndex}.mp3`;
  audio.currentTime=0;
audio.play();
document.getElementById('pPause').style.display='block';
    document.getElementById('pPlay').style.display='none';
})

masterPLay.addEventListener('click',()=>{
  if(audio.paused || audio.currentTime <=0){
    audio.play();
    document.getElementById('pPause').style.display='block';
    document.getElementById('pPlay').style.display='none';
   
  }
  else{
    audio.pause();
    document.getElementById('pPlay').style.display='block';
    document.getElementById('pPause').style.display='none';
    Array.from(document.getElementsByClassName('msItem')).forEach((element)=>{
      element.classList.add('bi-play-circle');
  element.classList.remove('bi-pause-circle');
      })
  }
 
})



audio.addEventListener('timeupdate',()=>{
 let progress = parseInt((audio.currentTime/audio.duration)*100);
myProgressBar.value = progress;


  const cTime = audio.currentTime;
  console.log(cTime);
  let cMin = Math.floor(cTime / 60);
  let cSec = Math.floor(cTime % 60);
  if(cSec < 10){
    cSec = `0${cSec}`;
  }
  currentSongTime.innerText = `${cMin}:${cSec}`;


audio.addEventListener('loadeddata',()=>{
  let adur = audio.duration;
  let tMin = Math.floor(adur/60);
  let tSec = Math.floor(adur%60);
  if(tSec < 10){
    tSec = `0${tSec}`;
  }
  newSongTime.innerText = `${tMin}:${tSec}`;
})


})


//VOLUME UP DOWN
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})

myProgressBar.addEventListener('change', ()=>{
  audio.currentTime = myProgressBar.value*audio.duration/100;
});

const makeAllPlays =()=>{
  Array.from(document.getElementsByClassName('msItem')).forEach((element)=>{
    element.classList.add('bi-play-circle');
element.classList.remove('bi-pause-circle');
    })
}




Array.from(document.getElementsByClassName('msItem')).forEach((element)=>{
element.addEventListener('click',(e)=>{
  makeAllPlays();
  songIndex = parseInt(e.target.parentNode.id);
  newSongName.innerText = musicItems[songIndex - 1].name;
  newSongImg.src = musicItems[songIndex - 1].img;
  newSongTime.innerText = musicItems[songIndex - 1].dur;

  console.log(songIndex);

  e.target.classList.remove('bi-play-circle');
  e.target.classList.add('bi-pause-circle');
  audio.src =`audio/${songIndex - 1}.mp3`;
  audio.currentTime=0;
audio.play();
document.getElementById('pPause').style.display='block';
document.getElementById('pPlay').style.display='none';
})
})







document.getElementById('next').addEventListener('click',()=>{
  if (songIndex >= 9) {
    songIndex=0;
  }else{
    songIndex += 1;
  }
  audio.src =`audio/${songIndex}.mp3`;
  newSongName.innerText = musicItems[songIndex].name;
  newSongImg.src = musicItems[songIndex].img;
  newSongTime.innerText = musicItems[songIndex].dur;

  audio.currentTime=0;
audio.play();
document.getElementById('pPause').style.display='block';
document.getElementById('pPlay').style.display='none';

})





document.getElementById('previous').addEventListener('click',()=>{
  if (songIndex <= 0) {
    songIndex=9;
  }else{
    songIndex -= 1;
  }
  audio.src =`audio/${songIndex}.mp3`;
  newSongName.innerText = musicItems[songIndex].name;
  newSongImg.src = musicItems[songIndex].img;
  newSongTime.innerText = musicItems[songIndex].dur;
  audio.currentTime=0;
audio.play();
document.getElementById('pPause').style.display='block';
document.getElementById('pPlay').style.display='none';
})