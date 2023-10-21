import { Cell } from './Cell'
import { Colors } from './Colors'
import { Figure, Figures } from './Figure';
import Queen from './Figures/Queen';
import King from './Figures/King';
import Rook from './Figures/Rook';
import Bishop from './Figures/Bishop';
import Knight from './Figures/Knight';
import Pawn from './Figures/Pawn';

export class Board {
    cells: Cell[][] = []

    public initializeCells(){
        for(let x = 0; x < 8; x++){
            const row = [];
            for(let y = 0; y < 8; y++){
                if((x + y )% 2 !== 0){
                    row.push(new Cell(this, x, y, Colors.BLACK, null))
                } else {
                    row.push(new Cell(this, x, y, Colors.WHITE  , null))
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x:number, y: number){
        return this.cells[y][x]
    }

    private getRooks(){
      new Rook(Colors.BLACK, this.getCell(7, 0))
      new Rook(Colors.BLACK, this.getCell(0, 0))
      new Rook(Colors.WHITE, this.getCell(0, 7))
      new Rook(Colors.WHITE, this.getCell(7, 7))
    }
    private getKnights(){
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
    }

    private getBishops(){
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }
    private getKings(){
        new King(Colors.BLACK, this.getCell(3, 0))
        new King(Colors.WHITE, this.getCell(3, 7))
    }
    private getQueens(){
        new Queen(Colors.BLACK, this.getCell(4, 0))
        new Queen(Colors.WHITE, this.getCell(4, 7))
    }

    private getPawns(y: number, color: Colors){
      for(let x = 0; x < 8; x++){
        new Pawn(color, this.getCell(x, y))
      }
    }

    public addFigures(){
        this.getBishops();
        this.getKings();
        this.getKnights();
        this.getRooks();
        this.getQueens();
        this.getPawns(1, Colors.BLACK)
        this.getPawns(6, Colors.WHITE)
    }
    

}