// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function changeHeart() {
  const heart = document.querySelectorAll('span.like-glyph')
  heart.forEach(heart => {
    heart.addEventListener('click',function () {
      mimicServerCall()
      .then(() => {
        if (heart.classList.contains('activated-heart')) {
          heart.innerText = EMPTY_HEART
          heart.classList.toggle('activated-heart')
        }
        else {
          heart.innerText = FULL_HEART
          heart.classList.add('activated-heart')
        }
      })
      .catch(() => {
        setTimeout(() => document.getElementById('modal').classList.remove('hidden'), 3000)
      })
  }
  )})
}
changeHeart()



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
