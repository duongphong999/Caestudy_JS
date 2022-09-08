class Obstacle{
    constructor(img, x, y, w, h){
        this.img = createImg(img);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.active = true;
    }
    update(){
        if (!this.active) return;
        // Chướng ngại vật sẽ di chuyển từ phải qua trái
        this.x -= 10;
        if (this.x <= -this.w) {
          this.active = false;
        }
        ctx.drawImage(this.img, this.x, 720 - this.y - this.h, this.w, this.h);
      }
    
}
function genObstacle() {
    // Nếu chưa đến thời gian tạo chướng ngại vật mới thì return luôn
    if (game.nextObstacleTmp > new Date().getTime()) return;
    // Tạo sỗ ngẫu nhiên 0 hoặc 1
    const randomNum = Math.floor(Math.random() * 2);
    // Nếu số là 0 thì tạo nấm
    if (randomNum == 0) {
      const newObstacles = new Obstacle('image/shit.png', 1280, 0, 200, 200);
      game.obstacles.push(newObstacles);
    } else {
      // Nếu không thì tạo con rùa
      const newObstacles = new Obstacle('image/Mario_Kart_Blue_Shell.png', 1280, 0, 220, 275);
      game.obstacles.push(newObstacles);
    }
    // Cập nhật thời gian sinh chướng ngại vật tiếp theo
    game.nextObstacleTmp = new Date().getTime() + Math.floor(Math.random() * 2000) + 1000;
  }