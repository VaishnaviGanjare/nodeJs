
const form=document.querySelector('form');
//const form=document.querySelector('form');
const newInput=document.createElement('input');
newInput.id='description';
//const placeFor_newInput=form.lastElementChild;
//form.insertBefore(newInput,placeFor_newInput);

const fruitItems=document.getElementsByClassName('fruit');
const fruitDesc=['Banana is yellow','Apple is red', 'Orange is orange', 'Kiwi is green','king of fruit'];
let i=0;
for(i=0;i<fruitItems.length;i++){
    const para=document.createElement('p');
    para.setAttribute('style','font-style:italic');
    para.setAttribute('class','fruit-desc');
    const textFor_para=document.createTextNode(fruitDesc[i]);
    para.appendChild(textFor_para);

    const placefor_para=fruitItems[i].lastElementChild;
    fruitItems[i].insertBefore(para, placefor_para);
    //console.log(fruitItems[i].lastElementChild);
}

//const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById('fruit-to-add');
  const newLi=document.createElement('li');

  newLi.innerHTML = fruitToAdd.value+'<p style="font-style:italic" class="fruit-desc">King of fruit</p>'+'<button class="delete-btn">x</button>';
  newLi.className='fruit';
  fruits.appendChild(newLi);

  // for(let j=0;j<fruitItems.length;j++){
  //   console.log(fruitItems[j]);
  // }

const newInput=document.createElement('input');
newInput.id='description';
///const placeFor_newInput=form.lastElementChild;
//form.insertBefore(newInput,placeFor_newInput);

});

const search=document.getElementById('filter');
search.addEventListener('keyup', function(event){

      const textEntered=event.target.value.toLowerCase();
      const fruitItems=document.getElementsByClassName('fruit');
      const fruitDesc=document.getElementsByClassName('fruit-desc');


      for(let i=0;i<fruitItems.length;i++)
      {
        const currentFruit=fruitItems[i].firstChild.textContent.toLowerCase();
        const curDesc=fruitDesc[i].firstChild.textContent.toLowerCase();

        if(currentFruit.indexOf(textEntered)===-1 && curDesc.indexOf(textEntered)===-1){
          fruitItems[i].style.display="none"; 
        }else{
          fruitItems[i].style.display="block";
        }
      }
     /// alert('success');
    });
    