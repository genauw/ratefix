var categoryArr = ["Bird","Well-known athlete","Potted plant","Insect","Space travel terms","Celestial bodies","Business or profession","Newspaper or magazine","Nickname","Actor or actress","Famous sights","Pieces of furniture","Craftsman","Tree or shrub","Mountain range or mountain","Poet or writer","Film or theatre play","Car Brand","City in another country","Drink","Sport or sport equipment","Male first name","Food","Language","Festival or celebration","Country","Flower","Wild Animal","Word ending with \‘ing\’","Musical Instrument","Water vehicle","A Building","City in your current country","River or lake","Inventor, discoverer or scholar","Comic or kids book character","House pet","Clothing articles","Female first name","Machine","Vehicle","Colour","Sea animal","Technology term","Toy","Body part","Hand tool","Fruit","Painter or sculptor","Composer or singer","Type of material","Word ending with \‘ness\’"];

//Fisher-Yates (knuth) shuffle
function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//console.log(shuffle(categoryArr));

$(document).ready(function(){
    $("#categoryButton").click(function(){
        console.log("category button click");
        //$("#category").html("Click worked");
    });
    $("#letterButton").click(function(){
        console.log("letter button click");
        //$("#letter").html("A example");
    });
});
