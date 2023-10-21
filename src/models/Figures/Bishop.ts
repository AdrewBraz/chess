import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhiteBishop from '../../assets/white-bishop.png'
import BlackBishop from '../../assets/black-bishop.png'

class Bishop extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)

      this.logo = this.color === 'black'  ? BlackBishop : WhiteBishop
    }
    
}

export default Bishop