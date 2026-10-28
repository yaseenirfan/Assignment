 let itemInput = document.getElementById('itemInput');
let addBtn = document.getElementById('addBtn');
let itemList = document.getElementById('itemList');

function addItem() {
  let textValue = itemInput.value.trim();

  if (textValue === '') {
    alert('Please enter a valid item!');
    return;
  }

  let li = document.createElement('li');
  
  // Create a span for the task text
  let textSpan = document.createElement('span');
  textSpan.textContent = textValue;

  // Create the delete/remove button
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.cursor = 'pointer';

  // Add click event to remove the item when clicked
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  // Append text and delete button to the list item
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  itemInput.value = '';
}

addBtn.addEventListener('click', addItem);

itemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});