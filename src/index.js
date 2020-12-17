let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  loadToys();
});

function loadToys() {
  console.log('hi')
  // fetch('http://localhost:3000/toys')
  //   .then(function(response) {
  //     response.json();
  //   })
  //   .then(function(json) {
  //     console.log(json.message);
      // const toysContainer = document.getElementById('toy-collection')
      
      // for (const el of json) {
      //   let newCard = document.createElement('div')
      //   let h2 = document.createElement('h2')
      //   newCard.className = "card"
      //   toysContainer.appendChild(newCard)
      //   h2.innerHTML = el.name
      //   newCard.appendChild = h2
      // }
      // 
    // })
}