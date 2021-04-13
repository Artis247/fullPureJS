import { counter} from "./utils"
import {model,arrayTest,answer} from './model'
export var rezultatSite=0

export class Site {
  
    constructor(selector,countCallback) {
      this.$el = document.querySelector(selector)
      this.count = countCallback
      this.model=model
      this.render(model)
    }
      render(model){
        this.$el.innerHTML = ''
        this.model=model
        
          this.model.forEach(block => {
          this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })      
        this.$el.addEventListener('submit', this.estimate.bind(this),{once: true})
        }
    
      estimate(event) {
         event.preventDefault()
          var form = document.querySelector("form");
          var log = document.querySelector("#log");
            var data = new FormData(form);
            var output = "";
            for (const entry of data) {
              output = entry[1] + "\r";
            }
            log.innerText = output;
                  
            const step= counter(output,answer)
           
           this.count(step) 
           console.log(step)
           rezultatSite=rezultatSite+step
           
        }
        
      }