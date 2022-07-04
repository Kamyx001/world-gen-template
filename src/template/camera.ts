import { Vec2 } from "./vec2";


export class Camera {
  private pos: Vec2 = {
    x: 0,
    y: 0,
  }

  constructor(
    private ctx: CanvasRenderingContext2D,
    private readonly cameraSpeed: number,
  ) {
    window.onkeydown = (e) => this.onKeyDown(e.key);
  }

  public onKeyDown(key: string) {
    const { cameraSpeed } = this;
    switch (key) {
      case 'ArrowUp':
        this.moveTo({
          x: this.pos.x,
          y: this.pos.y - cameraSpeed,
        });
      break;

      case 'ArrowDown':
        this.moveTo({
          x: this.pos.x,
          y: this.pos.y + cameraSpeed,
        })
      break;

      case 'ArrowLeft':
        this.moveTo({
          x: this.pos.x - cameraSpeed,
          y: this.pos.y,
        });
      break;

      case 'ArrowRight':
        this.moveTo({
          x: this.pos.x + cameraSpeed,
          y: this.pos.y,
        }); 
      break;
    }
  }

  public moveTo( newPos: Vec2 ) {
    this.ctx.translate(
      this.pos.x - newPos.x, 
      this.pos.y - newPos.y
      );
    this.pos = newPos;
  }

  public get position() {
    return this.pos;
  }
}
