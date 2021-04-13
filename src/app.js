import { model} from './model'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock,SelectorBlock} from './blocks'
import {Site} from './site'
import {col, css, row} from './utils'

localStorage.clear()   
export class App {
  constructor(model) {
   this.model=model
   
  }
  init() {
   
   const countCallback = () => {
    
    site.render(model)
    }
  
    const site = new Site('#site',countCallback)
    
  }
}