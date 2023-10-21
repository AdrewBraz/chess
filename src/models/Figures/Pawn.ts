import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhitePawn from '../../assets/white-pawn.png'
import BlackPawn from '../../assets/black-pawn.png'

class Pawn extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.logo = this.color === 'black' ? BlackPawn : WhitePawn
    }
    
}

export default Pawn;