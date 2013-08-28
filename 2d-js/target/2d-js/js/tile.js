function Tile(left, top, id, type, sprite) {
    this.sprite = sprite;
    this.left = left;
    this.top = top;
    this.w = sprite.tileW;
    this.l = sprite.tileL;
    this.id = id;
    this.type = type;
    this.sourceX = 0;
    this.sourceY = 0;
}
;

Tile.prototype.update = function() {
    this.posX = this.left * this.w + (Game.screen.world.camera.x * -2) + (Game.screen.width / 2) - (this.w / 2);
    this.posY = this.top * this.l + (Game.screen.world.camera.y * -2) + (Game.screen.height / 2) - (this.l / 2);
    this.zoomW = this.w / Game.screen.world.camera.zoom;
    this.zoomL = this.l / Game.screen.world.camera.zoom;
};

Tile.prototype.draw = function(ctx) {
    ctx.drawImage(this.sprite.image, this.sourceX, this.sourceY, this.w, this.l, this.posX, this.posY, this.zoomW, this.zoomL);
};