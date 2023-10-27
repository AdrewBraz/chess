import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-queen.png'
import BlackLogo from '../../assets/black-queen.png'

export class Queen extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.QUEEN
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
     if(this.cell.isDiagonalEmpty(target)){
      return true
     }
    return false
  }
}