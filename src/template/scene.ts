import { Tile } from "./tile";
import { Vec2 } from "./vec2";


export class Scene {
  private tiles: Tile[][] = []

  constructor(
    private ctx: CanvasRenderingContext2D,
    private tileSize: number,
    private onTileRequest: (pos: Vec2) => Tile,
  ) { }

  public addTile(tile: Tile) {
    const row = this.tiles[tile.position.x];
    if (!row) {
      this.tiles[tile.position.x] = [];
    }
    this.tiles[tile.position.x][tile.position.y] = tile;
  }

  public render(cameraPos: Vec2) {
    this.ctx.clearRect(cameraPos.x, cameraPos.y, innerWidth, innerHeight);
    const borderX = Math.floor((innerWidth + cameraPos.x) / this.tileSize);
    const borderY = Math.floor((innerHeight + cameraPos.y) / this.tileSize);

    for (
      let x = Math.floor(cameraPos.x / this.tileSize); x <= borderX; x++)
      for (let y = Math.floor(cameraPos.y / this.tileSize); y <= borderY; y++) {
        if (!this.tiles[x]) this.tiles[x] = [];
        if (!this.tiles[x][y]) this.tiles[x][y] = this.onTileRequest({ x, y });

        this.tiles[x][y].render(this.ctx, this.tileSize);
      }
  }
} 