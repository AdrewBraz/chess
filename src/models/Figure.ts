import { Cell } from "./Cell";
import { Colors } from "./Colors";


export enum Figures{
    FIGURE= "Фигура",
    KING= "Король",
    QUEEN= "Ферзь",
    BISHOP= "Слон",
    ROOK= "Ладья",
    PAWN= "Пешка",
    KNIGHT= "Конь",
}

export class Figure{
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: Figures;
    id: number;

    constructor(color: Colors,  cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null
        this.name = Figures.FIGURE
        this.id = Math.random()

    }

    public canMove(target: Cell){
      if(target.figure?.color === this.color){
        return false
      }
      if(target.figure?.name === Figures.KING){
        return false
      }
      return true
    }

    moveFigure(target: Cell){}
}