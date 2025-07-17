const container = document.querySelector('.container');

function createGridLayout(gridValue){
    container.innerHTML=''
    container.style.width = '980px'; 
    for (let i=0; i<(gridValue*gridValue); i++){
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add("gridChild");
        div.style.width = 980/gridValue + 'px'; 
        div.style.height = 980/gridValue + 'px'; 
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

container.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("gridChild")){
        event.target.style.backgroundColor = getRandomColor();
  }
});

createGridLayout(16);

const body = document.querySelector('body');
const button = document.createElement('button');
button.classList.add("button");
body.insertBefore(button, container);
button.innerHTML = 'Click to change grid size!'

button.addEventListener("click", ()=>{
    let gridSize = prompt('Enter grid size:');
    if(gridSize>0 && gridSize<101)
        createGridLayout(gridSize);
    else
        alert('Enter number between 1 to 100')
})

      
