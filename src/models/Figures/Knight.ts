import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import WhiteKnight from '../../assets/white-knight.png'
import BlackKnight from '../../assets/black-knight.png'

class Knight extends Figure{
    constructor(color: Colors, cell: Cell){
      super(color, cell)
      this.logo = this.color === 'black' ? BlackKnight : WhiteKnight
    }
    
}

export default Knight;