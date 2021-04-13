import {model,textOfTest,arrayTest,totalOfTest} from './model'
import {FinishBlock} from './blocks'
import {rezultatSite} from './site'

export function row(content, styles = '') {
  return `<div class="row" style="${styles}" id="row">${content} </div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
      
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      
    </form>
    <hr />
 `
}

export function counter(output,answer){
  var rezultat=rezultatSite
  var count=localStorage.length
  
  model[1].count++

  if ( model[1].count< totalOfTest-2) {
    var c= model[1].count
     rezultat = (Number(output)==answer[count])
          ?rezultat=1
          :rezultat=0
  
    var key=answer[count]
    localStorage.setItem(key, output)     
    
    count++
    model[1].value=arrayTest[c]
    model[2].value=textOfTest[c]
        
     return rezultat

  }else{
    
    
    model.splice(2,1)
    model[1].value=arrayTest[totalOfTest-1]
    
    model[2]=new FinishBlock(
      rezultatSite , {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(#ffff00, #9198e5)',
        color: 'green',
        padding: '1.5rem',
        'text-align': 'center'
      }
    })
  
  return rezultatSite
   }
  }
