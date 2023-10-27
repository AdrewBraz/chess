import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-king.png'
import BlackLogo from '../../assets/black-king.png'

export class King extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.KING
   }   
   canMove(target: Cell): boolean {
      if(!super.canMove(target)){
        return false;
      }
      const dx = Math.abs(this.cell.x - target.x)
      const dy = Math.abs(this.cell.y - target.y)

      return dx <= 1 && dy <= 1
    }
}