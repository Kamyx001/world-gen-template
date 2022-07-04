
export class CMath {
  public static randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}