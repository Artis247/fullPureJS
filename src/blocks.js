import {col, css, row} from './utils'


class Block {
  constructor(value, options,count) {
    this.value = value
    this.options = options
    this.count=count
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {

    super(value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}><strong>${this.value}</strong></${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options,count) {
    // this.value = value
   // this.options = options  
    // this.count=count
    super(value, options,count)
    
  }

  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    
    return row(`<img src="${this.value}" alt="${alt}" id=img style="${css(is)}" />`, css(styles))
  
  }
}
  

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class SelectorBlock extends Block {
  constructor(value,count) {
    //   this.value = value
    
    //  this.count=count
    super(value,count)
  }

  toHTML() {
    
    return row(`    
    <form>
    <p><strong>${this.value[0]}</strong></p>
    
        <p></p>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="One" value=1 checked>
        <label class="form-check-label" for="${this.value[1]}">
                ${this.value[1]}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="Two" value=2>
        <label class="form-check-label" for="exampleRadios2">
                ${this.value[2]}
      </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="Three" value=3 >
        <label class="form-check-label" for="exampleRadios3">
                ${this.value[3]}
      </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="Four" value=4 >
        <label class="form-check-label" for="exampleRadios4">
                ${this.value[4]}
      </label>
      </div>
      <div class="col-auto my-1">
      <button type="submit" class="btn btn-success">ANSWER</button>
      </div>
     
    </form>
    <pre id="log">
    </pre>
  `)
  
  }
}
export class FinishBlock extends Block {
  constructor(value, options) {

    super(value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}><strong>Your test result : ${this.value} good answers from 10 questions</strong></${tag}>`), css(styles))
  }
}