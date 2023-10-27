import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-rook.png'
import BlackLogo from '../../assets/black-rook.png'

export class Rook extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.ROOK
   }

   canMove(target: Cell): boolean {
   if(!super.canMove(target)){
     return false;
   }
   if(this.cell.isVerticalEmpty(target)){
     return true
   }
   if(this.cell.isHorizontallEmpty(target)){
      return true
    }
   return false
  }
}