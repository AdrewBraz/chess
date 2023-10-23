import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figures } from "../Figure";
import WhiteLogo from '../../assets/white-knight.png'
import BlackLogo from '../../assets/black-knight.png'

export class Knight extends Figure{
   constructor(color: Colors, cell: Cell){
    super(color, cell)
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
    this.name = Figures.KNIGHT
   }   
}