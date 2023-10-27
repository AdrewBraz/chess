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

    isEnemy(target: Cell){
        if(target.figure){
        return this.figure?.color !== target.figure.color
        }
    }

    isVerticalEmpty(target: Cell){
        if(this.x !== target.x){
            return false
        }
        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)
        for(let y = min + 1; y < max; y++){
            console.log(y)
            if(!this.board.getCell(this.x, y).isEmpty()){
              return false
            }
        }
        return true
    }

    isHorizontallEmpty(target: Cell){
        if(this.y !== target.y){
            return false
        }
        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)
        for(let x = min + 1; x < max; x++){
            console.log(x)
            if(!this.board.getCell(x, this.y).isEmpty()){
              return false
            }
        }
        return true
    }

    isDiagonalEmpty(target: Cell){
        const absX = Math.abs(this.y - target.y)
        const absY = Math.abs(this.x - target.x)
        if(absX !== absY){
            return false
        }
        const dx = this.x < target.x ? 1 : -1
        const dy = this.y < target.y ? 1 : -1
        for(let i = 1; i < absY; i++){
            if(!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty()){
                return false
            }
        }
        return true
    }

    // isDiagonalCheck(target: Cell){
    //     const absX = Math.abs(this.y - target.y)
    //     const absY = Math.abs(this.x - target.x)
    //     if(absX !== absY){
    //         return false
    //     }
    //     const dx = this.x < target.x ? 1 : -1
    //     const dy = this.y < target.y ? 1 : -1
    //     console.log('is diagonal ', target)
    //     for(let i = 1; i < absY; i++){
    //         console.log((this.board.getCell(this.x + dx*i, this.y + dy*i)))
    //         if(this.board.getCell(this.x + dx*i, this.y + dy*i).figure?.name === Figures.KING){
    //             console.log('King under attack')
    //         }
    //     }
    // }

    setFigure(figure: Figure){
        this.figure = figure;
        this.figure.cell = this;
    }

    addLostFigure(figure: Figure){
        figure.color === Colors.BLACK ? this.board.blackFigures.push(figure) : this.board.whiteFigures.push(figure)
    }

    moveFigure(target: Cell){
        if(this.figure && this.figure?.canMove(target)){
            this.figure.moveFigure(target)
            if(target.figure){
                this.addLostFigure(target.figure)
            }
            target.figure = this.figure
            target.setFigure(this.figure)
            this.figure = null
        }
    }

}