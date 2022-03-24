const d = new Date();
let year = d.getFullYear();
let finalyear = year - 2007;
document.getElementById("age").innerHTML =
  "<strong>Yosh: </strong>" + finalyear;
