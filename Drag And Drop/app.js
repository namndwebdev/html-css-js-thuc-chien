const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' dragging' 
    // setTimeout(() => this.className = 'invisible', 0)
    // this.className = '0'
}

function dragEnd() {
    // this.className = 'fill'
    this.classList.remove('dragging')
}

function dragOver(e) {
    // e.preventDefault()
    const drag = document.querySelector('.dragging')
    this.appendChild(drag)
}

function dragEnter(e) {
    // e.preventDefault()
    // this.className += ' hovered'
}

function dragLeave() {
    // this.className = 'empty'
}

function dragDrop() {
    // this.className = 'empty'
    this.append(fill)
}