

const box = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event){

  switch(event.key){
    case "ArrowDown":
      y+=10;
      box.style.top = y + "px";
      break;

    case "ArrowUp":
      y-=10;
      box.style.top = y + "px";
      break;

    case "ArrowLeft":
      x+=10;
      box.style.right = x + "px";
      break;

    case "ArrowRight":
      x-=10;
      box.style.right = x + "px";
      break;
      
    default:
      break
  }
 
}