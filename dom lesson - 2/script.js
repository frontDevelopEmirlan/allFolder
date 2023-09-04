// // 1 Найдите все HTML-теги <em> и добавьте им класс selected.

// let em = document.querySelectorAll('em')
// em.forEach(el => {
//    el.classList.add('selected')
// });

// // 2 Найдите все HTML-теги <mark>, которые находятся в <div>
// // с классом row и задайте им класс selected.

// let mark = document.querySelectorAll('.row mark')
// mark.forEach(el=>{
//    el.classList.add('selected')
// })

// // 3 Переключите HTML-теги <strong> с классом some в состояние без этого класса,
// // а тем элементам (<strong>), у которых небыло этого класса — добавьте.

// let strong = document.querySelectorAll('strong')
// strong.forEach(el=>{
//    el.classList.toggle('some')
// })

// // 4 Среди набора элементов с классом row, удалите этот класс у второго элемента.

// let row = document.querySelectorAll('.row')
// row[1].classList.remove('row')

// // 5 Задайте третьему элементу с классом row дополнительный класс third.

// row[2].classList.add('third')

// // 6 Обратитесь к элементу с классом row-outer и задайте ему размер шрифта 20px.

// let rowOuter = document.querySelector('.row-outer')
// rowOuter.style.fontSize = '20px'

// // 7 Обратитесь к элементу с классом last и добавьте ему текст:
// // Last but not least

// let last = document.querySelector('.last')
// last.innerText = 'Last but not least'

// // 8 Поменяйте тегу <div> c классом container background-color на зеленый.

// let container = document.querySelector('.container')
// container.style.backgroundColor = 'green'

let name = prompt()
let hl = document.querySelector('p')
hl.innerHTML = `${hl.innerHTML} ${name}`

