import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-knight.png'
import BlackLogo from '../../assets/black-knight.png'

export class Knight extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.KNIGHT
   }

   canMove(target: Cell): boolean {
      if(!super.canMove(target)){
         return false
      }
      const dx = Math.abs(target.x - this.cell.x)
      const dy = Math.abs(target.y - this.cell.y)
      if(dx === 2 && dy === 1 || dy === 2 && dx === 1){
         return true
      }
      return false
   }
}