function start() {
  var button = document.getElementById("playBtn");
  button.innerHTML = "Click Here To Play Again";
  
  //For changing color of button while clicking(Random color )
  function getRandomColor() {
    const letters = '0123456789ABCDEF';//All colorcode comes under  0 to 9 and A to F

    let color = '#';//all colorCode starts by "#"

    for (let i = 0; i < 6; i++) { //loop goes till 6 becz colorcode consit of 6digit
      color += letters[Math.floor(Math.random() * 16)];
  /*here * 16 means '0123456789ABCDEF' which consist letters too and hexadecimal consist only 
  so choosing 16 to multiply with .random
  */
    }
    return color;
  //in every 1 complete loop 1 color generated and return that color of 6digit then again color="#"
   }

  //Now while clicking button color change by calling above func() to listener
  button.addEventListener('click',()=>{
   button.style.backgroundColor=getRandomColor();
  });




  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  /*(First math.random) will take 0 to 0.9999number
    then * to 6 it will give 0 to 5.9999 value then math.floor) will round with nearest low. integer value that will be 5
    then adding +1 will result 0-6 random number */

  console.log(randomNumber1);
  //now by clicking dice should also change for that.
  var randomDiceImage = "dice" + randomNumber1 + ".jpg"; //it will choose from (dice1.jpg -dice2.jpg)
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.jpg-dice6.jpg
  var image1 = document.querySelectorAll("img")[0]; //by retreshing it,it will change the Images
  image1.setAttribute("src", randomImageSource); //changing the source so that it can fetch images in the process of random way
  //now for 2nd player var


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var random2DiceImage = "dice" + randomNumber2 + ".jpg";
  var random2ImageSource = "images/" + random2DiceImage;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", random2ImageSource);
  
  
  //now playing and result shown process.
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🥳";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🥳";
  } else {
    document.querySelector("h1").innerHTML = "Game DRAW 😮";
  }
}

