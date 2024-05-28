// Add the Edit Button:
const editButton = document.createElement('button');
const btnText=document.createTextNode('Edit');
editButton.appendChild(btnText);

const li=document.getElementsByClassName('fruit');
for(let i=0;i<li.length;i++){
  li[i].appendChild(editButton);
  li[i].className='edit-btn';
}


const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById('fruit-to-add');
  const newLi=document.createElement('li');
  const newLiText=document.createTextNode('fruitToAdd.value');
  newLi.appendChild(newLiText);
  newLi.className='fruit';
  
  const deleteButton = document.createElement('button');
  const delbtnText=document.createTextNode('x');
  deleteButton.appendChild(btnText);
  deleteButton.className='delete-btn';
  newLi.appendChild(deleteButton);

  const editButton = document.createElement('button');
  const edibtnText=document.createTextNode('Edit');
  editButton.appendChild(btnText);
  editButton.className='edit-btn';
  newLi.appendChild(editButton);
  

fruits.appendChild(newLi);
});

//delete function

fruits.addEventListener('click', function(event){
    if(fruits.target.classList.contains('delete-btn')){
        const fruitToDelete=evvent.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
    
});

//task
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function(event){

  const textEntered=event.target.value.toLowerCase();
  const fruitItems=document.getElementsByClassName('fruit');
  for(let i=0;i<fruitItems;i++){
    const currentFruit=fruitItems[i].firstChild.textContent.toLowerCase();
    if(currentFruitText.indexOf(textEntered===-1)){
      fruitItems[i].computedStyleMap.display="none"; 
    }else{
      fruitItems[i].computedStyleMap.display="flex";
    }
  }
});

//first
const inputDes=document.createElement('input');
const inputDesText=document.createTextNode('input.value');
inputDes.appendChild(inputDesText);
const formIn=document.getElementsByTagName('form');
const button=document.getElementsByTagName('button');
const firstForm = formIn[0];

firstForm.insertBefore(inputDes, button);
inputDes.id='description';