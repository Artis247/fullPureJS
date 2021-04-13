import tests from './testImages/*.jpg'
import {TitleBlock, ImageBlock,SelectorBlock} from './blocks'


var countOfTest=localStorage.length
export const arrayTest = Object.values(tests)

export var totalOfTest=arrayTest.length

export const textOfTest=[
  ['What will this console.log output?','Happy New Year!','This is 2021','year is not defined','undefined' ],
  ['What will this console.log output by clicking on the First Button?','This is button #1','This is button #2','TypeError:cannot read property "length" of null','TypeError:document.getElementsByTagName is not a function'],
  ['Which image will NOT be loaded by browser?', 'image-1','image-2','image-3','image-4'],
  ['Which child will be on red background? ','<span>Hello</span>','<div>World!</div>','Both of them','No one of them'],
  ['What will this console.log output?','undefined','3','NaN','4'],
  ['What will this console.log output?','1','0','undefined','ReferenceError:x is not defined'],
  ['What will this console.log output? ','undefined','2','ReferenceError','[object Object]'],
  ['Which link will be in red?','https pdf','https doc','http pdf','http doc'],
  ['What will the alert display in the first and second cases?','text,value','value,value','text,text','text,undefined'],
  ['Answer the question above','First picture-1.1 Second picture-1.2','First picture-1.2 Second picture-1.1','First picture-2.2 Second picture-1.1','First picture-1.1 Second picture-2.2']
 
]

export var answer=[1,2,3,1,2,3,2,3,3,2]

export const model = [
  new TitleBlock(
    'Test of skills JAVASCRIPT on pure Javascript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #00ff00, #493240)',
      color: 'yellow',
      padding: '1.0rem',
      'text-align': 'center',
      'font-weight': 'bold',
       height: 'auto'
    }
  }),
  new ImageBlock(
    arrayTest[countOfTest],
    {
     styles: {
      padding: '1rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '450px',
      height: 'auto'
    },
    alt: 'Это картинка'
    
    
  },
  countOfTest
  
  ),
  new SelectorBlock(textOfTest[countOfTest],countOfTest)
 
]