// selection of Dom element
const input = document.querySelector(".srch");
const srchbtn = document.querySelector(".SearchBtn");
const card = document.querySelector(".card");
const Nbtn = document.querySelector(".button");
const audiosrc = document.querySelector(".audioplayer");
let isplaying = false;
//
let mainURl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

srchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let UserInput = input.value;
  console.log(UserInput);
  fetch(mainURl + UserInput, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c501483659msha19926282ae5e09p18db78jsnedca9925bcac",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Urlnext = data.next.slice(30);
      console.log(Urlnext);

      Showdata(data); // store data
    })
    .catch((err) => {
      console.error(err);
    });
});

// start show data dyanamic
let Showdata = (data) => {
  const container = document.querySelector(".music_container");

  for (let i = 0; i < data.data.length; i++) {
    const att = document.createAttribute("class"); // this to give class attribute
    // const file = document.createAttribute("src");
    att.value =
      "col-12 col-md-3 col-lg-3 output justify-content-center d-flex mt-5";

    // class create to loop all data
    const output = document.createElement("div");
    output.ad;
    const listMusic = data.data[i];
    let MusicTitle, MusicImg, MusicArtist, MusicPreview;
    [MusicTitle, MusicImg, MusicArtist, MusicPreview] = [
      listMusic.title,
      listMusic.album.cover_medium,
      listMusic.artist.name,
      listMusic.preview,
    ];
    // file.value = `${MusicPreview}`;
    // musicTitle = listMusic.title;
    // musicImg =
    output.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${MusicImg}" alt="Card image cap">
    <div class="card-body">
        <h3 class="card-title font-weight-bold">${MusicTitle}</h3>
        <h6 class="card-title font-weight-light "> <i> Artist:</i> ${MusicArtist}</h6>
        
        <div class="musicControls">

        <!-- <i class="fas fa-backward " id="prev" title="previous"></i> -->
        <div class="play_btn">
        <i class=" fas fa-play play"  data-image="${MusicImg}" data-title="${MusicTitle}" data="${MusicPreview}" title="play"></i> 
        </div>

        <!-- <i class="fas fa-forward" id="next" title="Next"></i> -->
       <!--<audio src="${MusicPreview}" class="audioplayer" conyrols></audio>-->

    </div>

    </div>
    </div> 
   `;
    // audiosrc.setAttributeNode(file);
    // console.log(file);
    output.setAttributeNode(att);
    // show data on dom
    container.appendChild(output);
    console.log(MusicTitle);
  }

  // start this is for to play music on click
  let allPlayBtn = document.querySelectorAll(".play");
  for (let i = 0; i < allPlayBtn.length; i++) {
    // allPlayBtn[i].addEventListener("click", function() {
    //   allPlayBtn[i].classList.toggle("red");
    // });

    // start play and function pause
    const playMusic = () => {
      isplaying = true;
      var y = event.target.getAttribute("data");
      audiosrc.setAttribute("src", y);
      event.stopPropagation();
      audiosrc.play();

      allPlayBtn[i].classList.replace("fa-play", "fa-pause");
    };

    const pauseMusic = () => {
      console.log("paused music");
      isplaying = false;
      audiosrc.pause();

      allPlayBtn[i].classList.replace("fa-pause", "fa-play");
    };
    // end play and function pause
    allPlayBtn[i].addEventListener("click", (event) => {
      console.log("All set to play Music");
      isplaying ? pauseMusic() : playMusic();
      // console.log("playing music");
    });
  }
  // end this is for to play music on click
}; // end  show data dyanamic

//  strat this sectio for load more data bellow down
Nbtn.addEventListener("click", (e) => {
  // this is for to load more on same page
  e.preventDefault();

  fetch(mainURl + Urlnext, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c501483659msha19926282ae5e09p18db78jsnedca9925bcac",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Showdata(data);
      Urlnext = data.next.slice(30);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(Urlnext);
});
//  end this sectio for load more data bellow down
