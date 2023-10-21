import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhiteQueen from '../../assets/white-queen.png'
import BlackQueen from '../../assets/black-queen.png'

class Queen extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.logo = this.color === 'black'  ? BlackQueen : WhiteQueen
    }
    
}

export default Queen;