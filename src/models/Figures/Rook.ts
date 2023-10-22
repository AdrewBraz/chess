import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhiteRook from '../../assets/white-rook.png'
import BlackRook from '../../assets/black-rook.png'

class Rook extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.logo = this.color === 'black'  ? BlackRook : WhiteRook
    }

    canMove(target: Cell): boolean {
      if(!super.canMove(target)){
        return false
      }
      if(this.cell.isEmptyHorizontal(target)){
        return true
      }
      if(this.cell.isEmptyVertical(target)){
        return true
      }
      return false
    }
    
}

export default Rook;