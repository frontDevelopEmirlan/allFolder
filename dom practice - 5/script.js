let input1 = document.querySelector('.inp1')
let input2 = document.querySelector('.inp2')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')

render()
btn.addEventListener('click',()=>{
   if(!input1.value.trim() || !input1.value.trim()){
      alert('заполните поле')
      return
   }

   let obj = {
      name: input1.value,
      lastName: input2.value,
   }

   let data = JSON.parse(localStorage.getItem('person')) || []
   if(data.some(el => el.name === obj.name || el.lastName === obj.lastName)){
      alert('такой данный уже есть')
      input1.value = ''
      input2.value = ''
      return
   }
   data.push(obj)
   localStorage.setItem('person',JSON.stringify(data))
   render()
   input1.value = ''
   input2.value = ''
})

function render(){
   let newData = JSON.parse(localStorage.getItem('person')) || []
   list.innerHTML = ''
   newData.forEach((el,index) => {
      let p1 = document.createElement('p')
      let p2 = document.createElement('p')
      let delBtn = document.createElement('button')
      delBtn.innerText = 'delete'
      p1.innerText = el.name
      p2.innerText = el.lastName
      list.append(p1)
      list.append(p2)
      list.append(delBtn)
      delBtn.addEventListener('click', ()=>{
      deleteTask(index)
      })
   });   
}

function deleteTask(id){
   let data = JSON.parse(localStorage.getItem('person')) || []
   data.splice(id,1)
   localStorage.setItem('person', JSON.stringify(data))
   render()
}
