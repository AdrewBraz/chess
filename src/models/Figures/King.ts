import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhiteKing from '../../assets/white-king.png'
import BlackKing from '../../assets/black-king.png'

class King extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.logo = this.color === 'black'  ? BlackKing : WhiteKing
    }
    
}

export default King;