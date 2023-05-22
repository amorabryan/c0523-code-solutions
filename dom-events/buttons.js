function handleClick(event) {
  console.log('button clicked');
  console.log('handleClick event:', event);
  console.log('target event:', event.target);
}

const buttonClick = document.querySelector('.click-button');

buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('handleMouseover event:', event);
  console.log('target event:', event.target);
}

const mouseOver = document.querySelector('.hover-button');

mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('handleDoubleClick event:', event);
  console.log('target event:', event.target);
}

const doubleClick = document.querySelector('.double-click-button');

doubleClick.addEventListener('dblclick', handleDoubleClick);
