document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('-').addEventListener("click", subtract)
  document.getElementById('+').addEventListener("click", add)
  document.getElementById('pause').addEventListener("click", pause)
  document.getElementById('<3').addEventListener("click", like)

// COUNTER

  const counter = document.querySelector('#counter')
  let seconds = 0;
  let paused = 0;

  let timer = setInterval(incrementSeconds, 1000);
  function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
  }
  function subtract(){
    seconds = seconds - 1;
    counter.innerHTML = seconds;
  }
  function add(){
    seconds = seconds + 1;
    counter.innerHTML = seconds;
  }
  function pause() {
    if(paused === 0) {
      timer = clearInterval(timer);
      document.querySelectorAll("button").forEach(function (b) {
        if(b.id !== 'pause') {
          b.disabled = true;
        }
      })
      document.getElementById('pause').innerText = "resume"
      paused++;
      return
    } else if(paused === 1) {
      timer = setInterval(incrementSeconds, 1000);
      document.querySelectorAll("button").forEach(function (b) {
        if(b.id !== 'pause') {
          b.disabled = false;
        }
      })
      document.getElementById('pause').innerText = "pause"
      paused--;;
    }
  }

// SECOND LIKES

  let hearts = document.querySelector('.likes')

  counter_likes = {};

  function like() {

    if(counter_likes[seconds]) {
      counter_likes[seconds] += 1
      element = document.getElementById(seconds)
      element.innerText = element.id + " has been liked " + counter_likes[seconds] + " times"
    } else {
      counter_likes[seconds] = 1
      let li = document.createElement('li')
      li.id = seconds
      li.innerText = li.id + " has been liked " + counter_likes[seconds] + " times"
      hearts.appendChild(li)
    }
  }

// COMMENTS

  const form = document.getElementById('comment-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    let p = document.createElement('p')
    p.innerText = document.getElementsByTagName("input")[0].value
    document.getElementById('list').appendChild(p)
    document.getElementsByTagName("input")[0].value = ""
  })

})
