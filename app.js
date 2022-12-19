let add=document.querySelector('.add-task');
let input=document.querySelector('.input-field')
let taskContainer=document.querySelector('.task-container');

add.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');

    
    li.innerHTML=`${input.value}`;
    task.append(li);

    let doneBtn=document.createElement('button');
    doneBtn.innerHTML='<i class="fa-solid fa-check"></i>';
    doneBtn.classList.add('donebtn');
    doneBtn.classList.add('btn');
    task.append(doneBtn);

    let deleteBtn=document.createElement('button');
    deleteBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deletebtn');
    deleteBtn.classList.add('btn');
    task.append(deleteBtn);


    if(input.value ===''){
        alert('Enter A Task');
    }else{
        
        taskContainer.append(task);
    }

    input.value='';

    deleteBtn.addEventListener('click',function(){
        task.remove();
    })

    doneBtn.addEventListener('click',function(){
        li.style.textDecoration='line-through';
    })

})