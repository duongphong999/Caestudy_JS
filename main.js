const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');
const game = {}; // Object này để chứa dữ liệu game

function createText(x, y, style, align, content) {
    ctx.textAlign = align;
    ctx.font = style;
    ctx.fillText(content, x, y);
  }

function createImg(src) {
    const image = new Image();
    image.src = src;
    return image;
  }

function resizeCanvas() {
    if ((window.innerWidth / window.innerHeight) >= (1280 / 720)) {
      canvas.style.width = "";
      canvas.style.height = "100%";
    } else {
      canvas.style.width = "100%";
      canvas.style.height = "";
    }
  }
  function checkCollision(obj1, obj2) {
    if (obj1.x > obj2.x + obj2.w
      || obj1.x + obj1.w < obj2.x
      || obj1.y > obj2.y + obj2.h
      || obj1.y + obj1.h < obj2.y) {
      return false;
    } else {
      return true;
    }
  }

  function updateScore() {
    game.score = Math.floor((new Date().getTime() - game.startTime) / 100);
    createText(1280 - 50, 50, "28px Arial", "right", `Score: ${game.score}`);
  }