import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-queen.png'
import BlackLogo from '../../assets/black-queen.png'

export class Queen extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.QUEEN
   }   
}