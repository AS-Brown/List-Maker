document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript has loaded");

    const formAppointment = document.querySelector('#form-id');
    formAppointment.addEventListener('submit', handleSubmit);
});

const setUp = function(){
    list = document.querySelector('ul')
    buttons = document.querySelector('.buttons')
}

const handleSubmit = function(event){
    setUp()
    event.preventDefault();
    createName(event);
    createDate(event);
    createTime(event);
    createLetter(event);
    if (typeof deleteAllTest === 'undefined' || deleteAllTest === 0) {
            createDelete(event)
    }
    document.querySelector('#form-id').reset()
}

const createName = function(event){
    const newName = document.createElement('h1')
    newName.textContent = `${event.target.nameOfList.value}`
    newName.classList.add('name')
    newName.classList.add('all-submit')
    list.appendChild(newName)
}
const createDate = function(event){
    const newDate = document.createElement('h2')
    newDate.textContent = `${event.target.dateToGo.value}`
    newDate.classList.add('date')
    newDate.classList.add('all-submit')
    list.appendChild(newDate)
}
const createTime = function(event){
    const newTime = document.createElement('p')
    newTime.textContent = `${event.target.timeToGo.value}`
    newTime.classList.add('time')
    newTime.classList.add('all-submit')
    list.appendChild(newTime)
}

const createLetter = function(event){
    const newLetter = document.createElement('p')
    newLetter.textContent = `${event.target.letter_choice.value}`
    newLetter.classList.add('letter-result')
    newLetter.classList.add('all-submit')
    list.appendChild(newLetter)
}

const createDelete = function(){   
        const deleteAll = document.createElement('button')
        deleteAll.innerHTML = 'Delete All'
        deleteAll.classList.add('delete')
        buttons.appendChild(deleteAll)
        deleteAllTest = 1
    const deleteAllButton = document.querySelector('.delete');
    deleteAllButton.addEventListener('click', handleDelete)
}

const handleDelete = function(event){
    event.preventDefault();
    const processDelete = document.querySelectorAll('.name, .date, .time, .delete, .letter-result')
    for (result of processDelete){
        result.remove()
    }
    deleteAllTest = 0
}


