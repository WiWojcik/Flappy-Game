let block = document.getElementById('block')
let hole = document.getElementById('hole')
let character = document.getElementById('character')
let jumping = 0;
let pointCounter = 0;
let  isAlive = true
hole.classList.add('animation')
block.classList.add('animation')

hole.addEventListener('animationiteration', () =>{
  let random = Math.floor((Math.random() * 400) + 200)
  let holePosition = getComputedStyle(hole).getPropertyValue('top')
  hole.style.top = `-${random}px`
})

setInterval(() =>{
  let characterTop = parseInt(getComputedStyle(character).getPropertyValue('top'))
  let holeTop = parseInt(getComputedStyle(hole).getPropertyValue('top'))
  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue('left'))
  let cTop = parseInt(`${characterTop -600}`)

/*   console.log(cTop)
  console.log(holeTop) */
  if((cTop > 0 )||((blockLeft <= 50)&&(blockLeft >-50))&&((cTop < holeTop)||(cTop > holeTop + 200))){  
    console.log("Game Over")
    hole.classList.remove('animation')
    block.classList.remove('animation')
    jumping = 1
    clearInterval(scoreInterval)
    isAlive = false  
  }
  if(jumping == 1){
    null
  }else{
     character.style.top = `${characterTop +3}px` 
 }
},10)
let game = document.getElementById('game')
let score = document.createElement('h2')
game.insertBefore(score, world)

let scoreInterval = setInterval(()=>{
  pointCounter++
  score.textContent= pointCounter
},100)




function jump(){
  let jumpCount = 0
  jumping = 1
  let timeAction = setInterval(() =>{
    let characterTop = parseInt(getComputedStyle(character).getPropertyValue('top'))
    character.style.top = `${characterTop - 5}px`  
    if(jumpCount >10){
      clearInterval(timeAction)
      jumping = 0
    }
    jumpCount++
  },10  )
}


window.addEventListener('keypress',jump)
