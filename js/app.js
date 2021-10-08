document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript has loaded");

    const formAppointment = document.querySelector('#form-id');
    formAppointment.addEventListener('submit', handleSubmit);
});

const list = document.querySelector('ul')
const buttons = document.querySelector('.buttons')
var deleteAllTest = 0

const handleSubmit = function(event){
    event.preventDefault();
    createName(event);
    createDate(event);
    createTime(event);
    createDelete(event);
    document.querySelector('#form-id').reset()
}

const createName = function(event){
    event.preventDefault();
    const newName = document.createElement('h1')
    newName.textContent = `${event.target.nameOfList.value}`
    newName.classList.add('name')
    newName.classList.add('all-results')
    list.appendChild(newName)
}
const createDate = function(event){
    const newDate = document.createElement('h2')
    newDate.textContent = `${event.target.dateToGo.value}`
    newDate.classList.add('date')
    newDate.classList.add('all-results')
    list.appendChild(newDate)
}
const createTime = function(event){
    const newTime = document.createElement('p')
    newTime.textContent = `${event.target.timeToGo.value}`
    newTime.classList.add('time')
    newTime.classList.add('all-results')
    list.appendChild(newTime)
}

const createDelete = function(){
    if (deleteAllTest > 0){
    } else {
        const deleteAll = document.createElement('button')
        deleteAll.innerHTML = 'Delete All'
        deleteAll.classList.add('delete')
        buttons.appendChild(deleteAll)
        deleteAllTest = 1
    }
    const deleteAllButton = document.querySelector('.delete');
    deleteAllButton.addEventListener('click', handleDelete)
}

const handleDelete = function(event){
    event.preventDefault();
    const processDelete = document.querySelectorAll('.all-results')
    for (result of processDelete){
        result.innerHTML = ""
    }
}


