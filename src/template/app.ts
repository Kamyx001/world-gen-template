import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { Tile } from "./tile";
import { Vec2 } from "./vec2";

export interface AppConfig {
  readonly tileSize: number;
  readonly cameraSpeed: number;
}

export class App {
  private ctx: CanvasRenderingContext2D;
  private scene: Scene;
  private camera: Camera;
  private renderer: Renderer;

  constructor(
    private canvas: HTMLCanvasElement,
    private config: AppConfig,
    onTileRequest: (pos: Vec2) => Tile,
  ) {
    window.onresize = () => this.onResize();
    this.onResize();
    this.ctx = canvas.getContext('2d')!;
    this.scene = new Scene(this.ctx, config.tileSize, onTileRequest);
    this.camera = new Camera(this.ctx, config.cameraSpeed);
    this.renderer = new Renderer(this.scene, this.camera);
    this.renderFrame();
  }

  private renderFrame() {
    this.renderer.render();
    requestAnimationFrame(() => this.renderFrame());
  }
  
  private onResize() {
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
  }
}