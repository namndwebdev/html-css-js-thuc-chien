const ul = document.querySelector('ul'),
	input = document.querySelector('input')

let tags = ['nodejs', 'reactjs']

createTag()

function createTag() {
	ul.querySelectorAll('li').forEach((li) => li.remove())
	tags.slice().reverse().forEach((tag) => {
		let liTag = `
            <li>${tag}
            <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i>
            </li>
            `
		ul.insertAdjacentHTML('afterbegin', liTag)
	})
    input.focus()
}

function removeTag(element, tag) {
	let index = tags.indexOf(tag)
	tags.splice(index, 1)
	element.parentElement.remove()
	input.focus()
}

function addTag(e) {
	if (e.key == 'Enter') {
		let tag = e.target.value.trim()
		if (tag != '' && !tags.includes(tag)) {
			tags.push(tag)
			createTag()
		}
		e.target.value = ''
	}
}

input.addEventListener('keyup', addTag)

const removeBtn = document.querySelector('.btn-removeAll')
removeBtn.addEventListener('click', () => {
	tags.length = 0
	ul.querySelectorAll('li').forEach((li) => li.remove())
    input.focus()
})
