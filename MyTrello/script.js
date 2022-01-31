const lists = document.querySelectorAll('.list')
const button = document.querySelector('.button')



    const btn = document.querySelector('.add-btn')
    const addBtn = document.querySelector('.add__item-btn')
    const cancelBtn = document.querySelector('.cancel__item-btn')
    const textarea = document.querySelector('.textarea')
    const endDate = document.querySelector('.end-date')
    const startDate = document.querySelector('.start-date')
    const form = document.querySelector('.form')

    let value
    let sDate
    let eDate
    btn.addEventListener('click', () => {
        form.style.display = 'block'
        btn.style.display = 'none'
    })
    textarea.addEventListener('input', e =>{
        value = e.target.value
        if (value){
            addBtn.style.display = 'block'
        } else{
            addBtn.style.display = 'none'
        }
    })
    startDate.addEventListener('input', e =>{
        sDate = e.target.value
    })
    endDate.addEventListener('input', e =>{
        eDate = e.target.value
    })
    cancelBtn.addEventListener('click', () =>{
        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'flex'
        
    })
    const render = (array, field) => {
        field.innerHTML = ''
    
        array.forEach(() => {
            const newItem = document.createElement('div')
             newItem.classList.add('list-item')
             newItem.draggable = true
             newItem.innerHTML = `Task: ${value}     Start: ${sDate}     End: ${eDate}`
             lists[0].append(newItem)
            form.style.display ='none'
            btn.style.display = 'flex'
        })
    }
    addBtn.addEventListener('click', ()=>{
        creator(value, sDate, eDate)
        render(tasks, lists)
        dragNdrop()
    })
    




function addBoard () {
    const boards = document.querySelector('.boards')
    const board = document.createElement('div')
    board.classList.add('boards-item')
    board.innerHTML = `
    <span class="title" contenteditable="true">Enter name board</span>
    <div class="list">
    </div>`
    boards.append(board)
    changeTitle()
    dragNdrop()
}

const updateLocal =() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const creator = (textValue, startDateValue, endDateValue) => {
    const taskItem = {
        text: textValue,
        start: startDateValue,
        end: endDateValue
    }
    tasks.push(taskItem)
    updateLocal()
    console.log(tasks)
}

button.addEventListener('click', addBoard)

function changeTitle(){
    const titles = document.querySelectorAll('.title')

    titles.forEach(title => {
        title.addEventListener('click', e => e.target.textContent = '')
        
    });
}
changeTitle()

let draggedItem = null

function dragNdrop(){
    const listItems = document.querySelectorAll('.list-item')
    const lists = document.querySelectorAll('.list')
    
    for(let i = 0; i < listItems.length; i++){
        const item = listItems[i]
        item.addEventListener('dragstart', () => {
            draggedItem = item
            setTimeout(() => {
                item.style.display = 'none'
            },  0)
        })

        item.addEventListener('dragend', () =>{
            setTimeout(() => {
            item.style.display = 'block'
            draggedItem = null
            },0)       
        })

        item.addEventListener('dblclick', () => {
            item.remove()
        })

        for (let j = 0; j < lists.length; j++){
            const list = lists[j]

            list.addEventListener('dragover', e => e.preventDefault())

            list.addEventListener('dragenter', function (e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0, 0, 0, .5)'
            })

            list.addEventListener('dragleave', function (e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            })

            list.addEventListener('drop', function (e){
                this.style.backgroundColor = 'rgba(0, 0, 0, 0)'
                this.append(draggedItem)
            })
        }

    }
}
dragNdrop()

let tasks = []

if (localStorage.getItem('tasks') != null) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    render(tasks, lists)
}


// buttonClr = document.querySelector('.button-clear')
// buttonClr.addEventListener('click', clearField())
// function clearField() {
//     tasks = []
//     lists.innerHTML=''
//     localStorage.clear()
// }