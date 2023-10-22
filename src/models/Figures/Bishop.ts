import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteBishop from '../../assets/white-bishop.png'
import BlackBishop from '../../assets/black-bishop.png'

class Bishop extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.name = Figures.BISHOP
      this.logo = this.color === 'black'  ? BlackBishop : WhiteBishop
    }
    canMove(target: Cell): boolean {
      if(!super.canMove(target))
        return false;
      if(this.cell.isEmptyDiagonal(target))
        return true
      return false
    }
    
    
}

export default Bishop