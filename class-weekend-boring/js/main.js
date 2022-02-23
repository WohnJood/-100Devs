document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day.toUpperCase()  === "TUESDAY" || day.toUpperCase() === "THURSDAY" ){
    document.getElementById("placeToSee").innerHTML = "CLASS DAY!"
  }else if(day.toUpperCase()  === "SATURDAY" || day.toUpperCase()  === "SUNDAY"){
    document.getElementById("placeToSee").innerHTML = "WEEKEND!"
  }else{
    document.getElementById("placeToSee").innerHTML = "TRY AGAIN!"
  }

}
