const refs = {
  input: '#task-input',
  addBtn: '#add-btn',
  list: '#task-list',
  clearBtn: '#clear-completed-btn'
};

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }


// Test commit 1
// Add task
$(refs.addBtn).addEventListener('click', () => {
  const text = $(refs.input).value.trim();
  if (!text) return alert('Cannot add an empty task');

// Commit test 1
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) {
    alert('Cannot add an empty task');
    return;
  }
  const li = document.createElement('li');
  li.textContent = text;
  $(refs.list).appendChild(li);
  $(refs.input).value = '';
});


// Delegate toggles & deletes
$(refs.list).addEventListener('click', e => {
// Commit test 2
// Toggle complete
list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

// Test commit 2
$(refs.list).addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});


// Clear completed
if ($(refs.clearBtn)) {
  $(refs.clearBtn).addEventListener('click', () => {
    $all(`${refs.list} li.completed`).forEach(li => li.remove());
  });
}

// Test commit
// Clear all completed tasks
const clearBtn = document.getElementById('clear-completed-btn');
clearBtn.addEventListener('click', () => {
  document.querySelectorAll('#task-list li.completed')
    .forEach(li => li.remove());
});
