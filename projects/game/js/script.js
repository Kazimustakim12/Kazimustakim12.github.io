const Score = document.querySelector(".scoreBoard");
const startScreen = document.querySelector(".startScreen");
const Gamearea = document.querySelector(".GameArea");
// console.log(Score);

// click to start game
startScreen.addEventListener("click", Start);

// for keypress acess
let Player = {
  speed: 5,
  score: 0,
};

let ArrowKey = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

document.addEventListener("keydown", KeyDown);
document.addEventListener("keyup", KeyUp);

function KeyDown(e) {
  e.preventDefault();
  ArrowKey[e.key] = true;
  //   console.log(e.key);
  //   console.log(ArrowKey);
}
function KeyUp(e) {
  e.preventDefault();
  ArrowKey[e.key] = false;
  //   console.log(e.key);
}

// colide check
function Iscollide(a, b) {
  aRect = a.getBoundingClientRect();
  bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
// moves road Line
function MovesLine() {
  let Lines = document.querySelectorAll(".Line");
  Lines.forEach((Lineitem) => {
    if (Lineitem.y >= 620) {
      Lineitem.y -= 650;
    }
    Lineitem.y += Player.speed;
    Lineitem.style.top = Lineitem.y + "px";
  });
}

// function for End game
function EndGame() {
  Player.Start = false;
  startScreen.classList.remove("hide");
  startScreen.innerHTML = ` Game Over 
                            </br>
                            Your Final Score Is <span style="color:green">${Player.score}</span>
                            </br>
                            Please Click Again to Start Over
                            `;

  Player.speed = 5;
}

// move Obstracle car
function MovesEnemy(Car) {
  let MovesEnemy = document.querySelectorAll(".Enemy");
  MovesEnemy.forEach((enemyitem) => {
    if (Iscollide(Car, enemyitem)) {
      console.log("Boom Hit");
      EndGame();
    }
    if (enemyitem.y >= 650) {
      enemyitem.y = -300;
      enemyitem.style.left = Math.floor(Math.random() * 350) + "px";
    }
    enemyitem.y += Player.speed;
    enemyitem.style.top = enemyitem.y + "px";
  });
}

// start GamePlay
function gamePlay() {
  let Car = document.querySelector(".car");
  let roadArea = Gamearea.getBoundingClientRect();
  //   console.log(roadArea);
  //   console.log("i ma click");

  if (Player.Start) {
    MovesLine();
    MovesEnemy(Car);
    if (ArrowKey.ArrowUp && Player.y > roadArea.top + 100) {
      Player.y -= Player.speed;
    }
    if (ArrowKey.ArrowDown && Player.y < roadArea.bottom - 70) {
      Player.y += Player.speed;
    }
    if (ArrowKey.ArrowLeft && Player.x > 0) {
      Player.x -= Player.speed;
    }
    if (ArrowKey.ArrowRight && Player.x < roadArea.width - 100) {
      Player.x += Player.speed;
    }

    Car.style.top = Player.y + "px";
    Car.style.left = Player.x + "px";
    window.requestAnimationFrame(gamePlay);

    Player.score++;
    // Player.speed++;
    console.log(Player.speed);
    let Tscore = Player.score++ - 1;
    Score.innerHTML = "score : " + Tscore;
    if (Tscore % 300 == 0) {
      Player.speed++;
    }
  }
}

// start Game To play game
function Start() {
  startScreen.classList.add("hide");
  Gamearea.innerHTML = "";
  Player.Start = true;
  Player.score = 0;
  window.requestAnimationFrame(gamePlay);

  for (x = 0; x < 5; x++) {
    let RoadLine = document.createElement("div");
    RoadLine.setAttribute("class", "Line");
    RoadLine.y = x * 150;
    RoadLine.style.top = RoadLine.y + "px";
    Gamearea.appendChild(RoadLine);
  }

  let Car = document.createElement("div");
  Car.setAttribute("class", "car");
  //   Car.innerText = "hello";
  Gamearea.appendChild(Car);

  Player.x = Car.offsetLeft;
  Player.y = Car.offsetTop;

  for (x = 0; x < 5; x++) {
    let EnemyCar = document.createElement("div");
    EnemyCar.setAttribute("class", "Enemy");
    EnemyCar.y = (x + 1) * 350 * -1;
    EnemyCar.style.top = EnemyCar.y + "px";
    EnemyCar.style.backgroundColor = "transperent";
    EnemyCar.style.left = Math.floor(Math.random() * 350) + "px";
    Gamearea.appendChild(EnemyCar);
  }
}

// function randomColor() {
//   function c() {
//     let Hex = Math.floor(Math.random() * 256).toString(16);
//     return ("0" + String(Hex)).substr(-2);
//   }
//   return "#" + c() + c() + c();
// }

function moveup() {
  buttonMove = true;
  Player.y -= 50;
}

function movedown() {
  buttonMove = true;
  Player.y += 1;
}

function moveleft() {
  buttonMove = true;
  Player.x -= 50;
}

function moveright() {
  buttonMove = true;
  Player.x += 50;
}

function clearmove() {
  Player.x.speedX = 0;
  Player.y.speedY = 0;
}
