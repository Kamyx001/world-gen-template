import './style.css'
import { App } from './template/app'
import { Tile } from './template/tile';
import { Vec2 } from './template/vec2';
import oceanTxt from './assets/ocean.png';

const canvas = document.querySelector('canvas')!;
new App(canvas, {
  tileSize: 30,
  cameraSpeed: 20,
}, ( pos: Vec2 ) => {
  return new Tile(pos, oceanTxt);
});