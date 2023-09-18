// creating To Do App 



var getul = document.getElementById('ul')

function foo1(){
    var ca = document.getElementById('inp2')
    var li = document.createElement('li')
    var litext= document.createTextNode(ca.value)
    li.appendChild(litext)
    getul.appendChild(li)
    ca.value = ''
    var deletebtn = document.createElement('button');
    var deletebtnText = document.createTextNode("Delete");
    deletebtn.appendChild(deletebtnText);
    li.appendChild(deletebtn);
    deletebtn.setAttribute('onclick', 'del(this.parentNode)');
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick','editfun(this)' )
    deletebtn.setAttribute('class', 'btn btn-danger');
    editBtn.setAttribute('class', 'btn btn-info aaa')
}

function deleteall(){
    getul.innerHTML = ''
}

  

function del(e){
   e.parentNode.remove()

}


function editfun(e){
    var a = prompt('Enter edit value', e.parentNode.firstChild.nodeValue);
    if (a !== null) {
        e.parentNode.firstChild.nodeValue = a;
    }
}


document.getElementById('inp2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        foo1();
    }
});





