const search = document.querySelector(".search input");
const addform = document.querySelector(".addtodo");
const list = document.querySelector(".todos");
const clock = document.querySelector (".clock");

console.log(search);
const NewTemplate = (newtodo =>{
  const html = `
  <li class="list-group-item d-flex align-items-center justify-content-between">
  <span> ${newtodo} </span>
  <i class="fas fa-trash-restore-alt delete"></i>
  </li>
  `;
   list.innerHTML += html;

});

addform.addEventListener('submit',e=>{
  e.preventDefault();
  const newtodo = addform.add.value.trim();
  if (newtodo.length){
      NewTemplate(newtodo);
  }
});

list.addEventListener('click',e=>{
    if (e.target.classList.contains("delete") ){
       e.target.parentElement.remove();
};
})

const filtertodos = (term) =>{
  Array.from(list.children)
  .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filtered'))

  Array.from(list.children)
  .filter((todo)=>todo.textContent.toLowerCase().includes(term))
  .forEach((todo)=> todo.classList.remove('filtered'))

};

search.addEventListener('keyup', ()=>{
const term = search.value.trim().toLowerCase();
filtertodos(term);
});



const time = () =>{

const dat = new Date();
const hour = dat.getHours();
const mins = dat.getMinutes();
const secs = dat.getSeconds();


 const html = 
  `<span>${hour}</span> : 
   <span>${mins}</span> :
   <span>${secs}</span>
`;

clock.innerHTML = html;

};
setInterval(time, 1000);