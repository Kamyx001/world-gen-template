import { Camera } from "./camera";
import { Scene } from "./scene";


export class Renderer {
  constructor(
    private scene: Scene,
    private camera: Camera, 
  ) {}

  public render() {
    const pos = this.camera.position;
    this.scene.render(pos);
  }
}