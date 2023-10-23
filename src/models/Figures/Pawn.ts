import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-pawn.png'
import BlackLogo from '../../assets/black-pawn.png'

export class Pawn extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.PAWN
   }   
}