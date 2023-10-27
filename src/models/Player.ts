import { Colors } from "./Colors"

export class Player {
  color: Colors | null = null
  
  constructor(color: Colors | null){
    this.color = color
  }
}