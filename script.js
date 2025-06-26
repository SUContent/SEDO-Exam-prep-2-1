const refs = {
  input: '#task-input',
  addBtn: '#add-btn',
  list: '#task-list',
  clearBtn: '#clear-completed-btn'
};

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

<<<<<<< chore/refactor-handlers
// Add task
$(refs.addBtn).addEventListener('click', () => {
  const text = $(refs.input).value.trim();
  if (!text) return alert('Cannot add an empty task');
=======
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) {
    alert('Cannot add an empty task');
    return;
  }
>>>>>>> main
  const li = document.createElement('li');
  li.textContent = text;
  $(refs.list).appendChild(li);
  $(refs.input).value = '';
});

// Delegate toggles & deletes
$(refs.list).addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

$(refs.list).addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

<<<<<<< chore/refactor-handlers
// Clear completed
if ($(refs.clearBtn)) {
  $(refs.clearBtn).addEventListener('click', () => {
    $all(`${refs.list} li.completed`).forEach(li => li.remove());
  });
}
=======
// Clear all completed tasks
const clearBtn = document.getElementById('clear-completed-btn');
clearBtn.addEventListener('click', () => {
  document.querySelectorAll('#task-list li.completed')
    .forEach(li => li.remove());
});
>>>>>>> main
