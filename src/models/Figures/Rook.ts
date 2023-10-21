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
    
}

export default Rook;