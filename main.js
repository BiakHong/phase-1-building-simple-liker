// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");
const modal = document.getElementById("modal");
modal.style.visibility='hidden';
modal.ariaHidden;
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){

      if(heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART;
      }
      else{
        heart.innerText = EMPTY_HEART;
      }
      
      
      
    })
    .catch(function(error) {
      
      setTimeout(() => {
        modal.removeAttribute("hidden")
      modal.append(error);
      }, "30000")
    });
}

for (const glyph of hearts) {
  glyph.addEventListener("click", likeCallback);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
