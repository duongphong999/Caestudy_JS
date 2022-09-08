class Player{
    constructor(img, x, y, w, h){
        this.img = createImg(img);
      this.x = x; 
      this.y = y;
      this.w = w; 
      this.h = h; 
      this.maxJump = 500; 
      this.jumpStatus = "None"; 
    }
    update(){
        if (this.jumpStatus === "Up") {
            this.y += 10;
            if (this.y >= this.maxJump) {
              this.y = this.maxJump;
              this.jumpStatus = "Down";
            }
          }
          // Nếu trạng thái nhảy là down thì giảm tọa độ y
          if (this.jumpStatus === "Down") {
            this.y -= 10;
            if (this.y <= 0) {
              this.y = 0
              this.jumpStatus = "None";
            }
          }
        
         ctx.drawImage(this.img, this.x, 720 - this.y - this.h, this.w, this.h);
        }
     
}