let rootNode = document.getElementById('root');

const maxAmount = 10;
const two = 2;
let enterText = document.getElementById('enterText');
let addText = document.getElementById('add');
let container = document.querySelector('#container');
let roster = container.children;
let mouseDrag = null;
let barrier = document.body.children[0].children[1];
barrier.setAttribute('hidden', 'true');

function validEnterText() {
    if (roster.length === maxAmount) {
        enterText.setAttribute('disabled', 'disabled');
        barrier.removeAttribute('hidden');
    } else {
        enterText.removeAttribute('disabled');
        barrier.setAttribute('hidden', 'true');
    }
}
function validAdd() {
    if (enterText.value === '' || roster.length === maxAmount) {
        addText.setAttribute('disabled', 'disabled');
    } else {
        addText.removeAttribute('disabled');
    }
}
function createItem() {
    let item = document.createElement('div');
    item.className = 'items';
    item.draggable = 'true';
    let sub = document.createElement('div');
    sub.className = 'sub';
    let check = document.createElement('i');
    check.className = 'iconSize material-icons';
    check.innerText = 'check_box_outline_blank';    
    let p = document.createElement('p');
    let change = document.createElement('i');
    change.className = 'iconSize iconChange material-icons';
    change.innerText = 'create';    
    let iconDel = document.createElement('i');
    iconDel.className = 'iconSize material-icons';
    iconDel.innerText = 'delete';    
    let label = document.createElement('label');
    label.appendChild(check);
    label.appendChild(p);
    label.appendChild(change);    
    sub.appendChild(label);
    sub.appendChild(iconDel);
    item.appendChild(sub);
    return item;
}

function addItem() {
    let item = createItem();
    let p = item.children[0].children[0].children[1];    
    p.innerHTML = enterText.value;
    enterText.value = '';
    addText.setAttribute('disabled', 'disabled');    
    container.appendChild(item);    
    validEnterText();
    initEvents(item);
}

function delItem(event) {
    let k = -1;
    for (let i = 0; i < roster.length; i++) {
        if (roster[i].children[0].children[1] === event.target) {
            k = i;
        } 
    }
    
    if (k >= 0) {
        container.removeChild(roster[k]);
    }
    
    validEnterText();
}

function changeItem(event) {
    let box = document.createElement('div');
    box.className = 'box';
    let inpChange = document.createElement('input');
    inpChange.className = 'inputChange';
    let save = document.createElement('i');
    save.className = 'iconSize iconSave material-icons';
    save.innerText = 'save';
    box.appendChild(inpChange);
    box.appendChild(save);
    
    let k = -1;
    for (let i = 0; i < roster.length; i++) {
        if (roster[i].children[0].children[0].children[two] === event.target) {
            k = i;
        } 
    }

    if (k >= 0 && roster[k].children.length === 1) {
        roster[k].appendChild(box);
    }
}

function disabledChek(event) {
    let k = -1;
    for (let i = 0; i < roster.length; i++) {
        if (roster[i].children[0].children[0].children[0] === event.target) {
            k = i;
        } 
    }
    
    if (k >= 0) {
        event.target.innerText = 'done';
    }
}

function saveItem(event) {
    let k = -1;
    for (let i = 0; i < roster.length; i++) {
        if (roster[i].firstChild !== roster[i].lastChild) {
            if (roster[i].children[1].children[1] === event.target) {
                k = i;
            }
        } 
    }

    if (k >= 0) {
        roster[k].children[0].children[0].children[1].innerHTML = roster[k].children[1].children[0].value;
        roster[k].removeChild(roster[k].children[1])
    }
}
function handleDragStart(e) {
    mouseDrag = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    return false;
}

function handleDrop(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    if (mouseDrag !== this && mouseDrag !== null) {
        mouseDrag.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
}

function initEvents(e) {
    e.addEventListener('dragstart', handleDragStart, false); 
    e.addEventListener('dragover', handleDragOver, false);
    e.addEventListener('drop', handleDrop, false);
}

document.addEventListener('keyup', validAdd);
addText.addEventListener('click', addItem);
container.addEventListener('click', delItem);
container.addEventListener('click', disabledChek);
container.addEventListener('click', changeItem);
container.addEventListener('click', saveItem);

