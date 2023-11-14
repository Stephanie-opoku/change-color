const btnClick = document.querySelector('#btnclick')
// colors
 const colors = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
btnClick.addEventListener('click', ()=>{
  let color = '#'
// loop
  for(let i=0; i <3; i++){
   //  document.body.style.backgroundColor = 'blue'

  //  generate a random number
  let generatedIndex = Math.floor(Math.random()*colors.length)

   //   corresponding color from the generated index
  let generatedColor = colors[generatedIndex]
  color += generatedColor

} 

//   set the body tag backgroudcolor
  document.body.style.backgroundColor = color
})

// input
const btnColor = document.querySelector('#btncolor')
btnColor.addEventListener('input',()=>{
  document.body.style.backgroundColor = btnColor.value
})
