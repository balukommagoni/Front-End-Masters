const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");
var breed = document.querySelector(".breed");
console.log(breed);
var i;
function addNewDoggo() {
  const prom= fetch(DOG_URL);
  prom
    .then(function(respon) {
      const processingPromise =respon.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
    img.src = processedResponse.message;
    
      img.alt = "Cute doggo";
      doggos.appendChild(img);
     });
}
document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);