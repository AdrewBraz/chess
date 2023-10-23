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

export class Figure {
    color: Colors
    logo: string | null
    cell: Cell
    name: Figures
    id: number

    constructor(color: Colors, cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.name = Figures.FIGURE
        this.logo = null
        this.id = Math.random()
    }

    canMove(target: Cell){
        return true
    }

    moveFigure(target: Cell){
        console.log(target)
    }

}