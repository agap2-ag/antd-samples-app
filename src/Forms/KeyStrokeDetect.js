import moment from 'moment';

let lastKeyTime = moment();

export function KeyPickRange(event) {
  // prevent multiple key presses in a short time
  if (moment() - lastKeyTime < 1000) return;
  lastKeyTime = moment();

  const antTagsList = document.getElementsByClassName('ant-tag');
  // when there's no ant-tag generated, there's no range to pick
  if(! antTagsList.length) return;
  
  //TODO::: detect locale to adjust charList
  let charList = 'dyt';
  switch(this.firstElementChild.attributes.lang.value) {
    case 'pt':
      charList = 'oha';
      break;
    default:
      // english
      // charList = 'dyt';
  }
  const key = event.key.toLowerCase();
  if (charList.indexOf(key) === -1) return;

  let btn2ClickIdx = 0;
  switch(key) {
    // today
    case 'd':
    case 'h':
      btn2ClickIdx = 1;
      break;
    // today
    case 't':
    case 'a':
      btn2ClickIdx = 2;
      break;
    // yesterday
    case 'y':
    case 'o':
    default:
      // btn2ClickIdx = 0;
  }
  antTagsList[btn2ClickIdx].click();
  // console.log(key);
};