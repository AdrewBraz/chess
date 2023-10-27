import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Figure, Figures } from "./Figure";
import { Bishop } from "./Figures/Bishop";
import { King } from "./Figures/King";
import { Knight } from "./Figures/Knight";
import { Pawn } from "./Figures/Pawn";
import { Queen } from "./Figures/Queen";
import { Rook } from "./Figures/Rook";

export class Board {
  cells: Cell[][] = [];
  blackFigures: Figure[] = []
  whiteFigures: Figure[] = []

  public initCells(){
    for(let i = 0; i < 8; i++){
        const row:Cell[] = []
        for(let j = 0; j < 8; j++){
            if( (i + j) % 2 === 0){
                row.push( new Cell(this, j, i, Colors.BLACK, null))
            } else {
                row.push( new Cell(this, j, i, Colors.WHITE, null))
            }
            
        }
        this.cells.push(row)
    }
  }

  public getCell(x:number, y: number){
    return this.cells[y][x]
  }
  private addRooks(){
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
    new Rook(Colors.WHITE, this.getCell(7, 7))
    new Rook(Colors.WHITE, this.getCell(0, 7))
  }
  private addKnights(){
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addBishops(){
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addKings(){
    new King(Colors.BLACK, this.getCell(3, 0))
    new King(Colors.WHITE, this.getCell(3, 7))
  }
  private addQueens(){
    new Queen(Colors.BLACK, this.getCell(4, 0))
    new Queen(Colors.WHITE, this.getCell(4, 7))
  }

  private addPawns(){
    for(let i = 0; i < 8; i++){
        new Pawn(Colors.BLACK, this.getCell(i, 1))
        new Pawn(Colors.WHITE, this.getCell(i, 6))
    }
  }

  public addFigures(){
    this.addBishops()
    this.addRooks()
    this.addKnights()
    this.addKings()
    this.addQueens()
    this.addPawns()
  }

  getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.blackFigures = this.blackFigures;
    newBoard.whiteFigures = this.whiteFigures;
    return newBoard
  }

  highlightCells(selectedCell: Cell | null){
    for(let y = 0; y < this.cells.length; y++){
        const row = this.cells[y]
        for(let x = 0; x < row.length; x++){
          const target = row[x]
          target.available = !!selectedCell?.figure?.canMove(target)
        }
    }
  }

  watchForCheck(selectedCell: Cell | null){
    for(let y = 0; y < this.cells.length; y++){
        const row = this.cells[y]
        for(let x = 0; x < row.length; x++){
          const target = row[x]
          if(target.figure?.name === Figures.KING && !!selectedCell?.figure?.canMove(target)){
            console.log(target.figure.name)
            return true
          }
        }
    }
    return false

  }

}