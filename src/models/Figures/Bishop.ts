import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-bishop.png'
import BlackLogo from '../../assets/black-bishop.png'

export class Bishop extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.BISHOP
   }

   canMove(target: Cell): boolean {
      if(!super.canMove(target)){
        return false;
      }
       if(this.cell.isDiagonalEmpty(target)){
        return true
       }
      return false
    }
}