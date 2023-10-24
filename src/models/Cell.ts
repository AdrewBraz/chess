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

}