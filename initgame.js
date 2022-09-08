function gameLoop() {
    resizeCanvas();
    ctx.clearRect(0, 0, 1280, 720);
    
    updateScore();
    
    genObstacle();// Tạo chướng ngại vật mới
    // Cập nhật vị trí khủng long
    game.pikachu.update();
    // Cập nhật vị trí các chướng ngại vật
    for (let i = 0; i < game.obstacles.length; i++) {
      game.obstacles[i].update();
      // Kiểm tra va chạm với khủng long, nếu va chạm thì game kết thúc
      if (checkCollision(game.obstacles[i], game.pikachu)) {
        createText(1280 / 2, 720 / 2, "40px Arial", "center", "GAME OVER");
        document.getElementById('play-again').style.display = "inline-block";
        return window.cancelAnimationFrame(gameLoop);
      }
    }
    window.requestAnimationFrame(gameLoop);
  }
function initGame() {

    document.getElementById('play-again').style.display = "none";
    game.score = 0;
    game.startTime = new Date().getTime();
    
    game.pikachu = new Player('image/mario1.png', 100, 0, 200, 200);
    
    game.obstacles = [];
    // Mốc thời gian tạo chướng ngại vật tiếp theo
    game.nextObstacleTmp = new Date().getTime() + Math.floor(Math.random() * 2000) + 1000;
    // Xử lý sự kiên khi ấn phím cách thì nhảy lên
    window.onkeyup = function (e) {
      if (e.keyCode == 32) {
        if (game.pikachu.jumpStatus == "None")
          game.pikachu.jumpStatus = "Up";
      }
    }
    gameLoop();
  }
  initGame();