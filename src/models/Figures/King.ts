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
}