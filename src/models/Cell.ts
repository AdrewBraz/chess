import { Colors } from "./Colors";
import { Figure, Figures } from "./Figure";
import { Board } from "./Board";

export class Cell {
    readonly x : number;
    readonly y: number;
    readonly color: Colors
    board: Board
    figure: Figure | null
    available: boolean
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random()
    }

    isEmpty(){
        return this.figure === null
      }
  
      isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
          return false;
        }
        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
          if(!this.board.getCell(this.x, y).isEmpty()) {
            return false
          }
        }
        return true;
      }
    
      isEmptyHorizontal(target: Cell): boolean {
        console.log(target.y, this.y)
        if (this.y !== target.y) {
          return false;
        }
    
        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
          console.log(x, max, min)
          if(!this.board.getCell(x, this.y).isEmpty()) {
            return false
          }
        }
        return true;
      }

    moveFigure(target: Cell){
        if(this.figure && this.figure?.canMove(target)){
            target.figure = this.figure;
            this.figure = null
        }
    }
}