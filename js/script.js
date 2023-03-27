const btnArr = document.getElementsByTagName('button');
const defaultMsg = document.querySelector('.frame-slider .frame-display>p');
const frame = document.querySelector('iframe');
console.log(btnArr, frame);
const frameList = [
  './jSnack-5/snack-5.html',
  './jSnack-6/snack-6.html',
  './jSnack-7/snack-7.html',
  './jSnack-8/snack-8.html'
];

for (let i = 0; i < btnArr.length; i++){
  btnArr[i].addEventListener('click', function(){

    defaultMsg.classList.add('d-none');
    frame.classList.remove('d-none');
    
    frame.src = frameList[i];

  });
}