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

    canCheck(target: Cell){
        console.log(target.figure)
        if(target.figure?.name === Figures.KING){
            return true
        }
        return false
    }


    canMove(target: Cell){
        if(this.color === target.figure?.color){
            return false
        }
        
        return true
    }

    moveFigure(target: Cell){
        
    }


}