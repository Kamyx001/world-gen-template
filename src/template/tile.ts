import { Vec2 } from "./vec2";


export class Tile {
  
  private txt = new Image();
 
  constructor(
    private readonly pos: Vec2,
    private readonly texture:string
  ) {
    this.txt.src = this.texture;
  }

  public render(ctx:CanvasRenderingContext2D, tileSize: number) {
    ctx.drawImage(
      this.txt,
      this.pos.x * tileSize,
      this.pos.y * tileSize,
      tileSize,
      tileSize,
    );
  }

  public get position() {
    return this.pos;
  }
}