const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list tbody");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the task name, date, and priority level
  const taskName = document.querySelector("#task-name").value;
  const taskDate = formatDate(document.querySelector("#task-date").value);
  const taskPriority = document.querySelector("#task-priority").value;

  // Check if the form is in add or edit mode
  const submitButton = document.querySelector(
    '#task-form button[type="submit"]'
  );
  const isEditMode = submitButton.innerText === "Update Task";
  let taskRow;
  if (isEditMode) {
    // If in edit mode, update the existing row
    taskRow = document.querySelector("#task-list tbody tr.editing");
    taskRow.cells[0].innerText = taskName;
    taskRow.cells[1].innerText = taskDate;
    taskRow.cells[2].innerText = taskPriority;
    // Remove the editing class from the row
    taskRow.classList.remove("editing");
    // Change the submit button text back to "Add Task"
    submitButton.innerText = "Add Task";
  } else {
    // If in add mode, create a new row in the table with the task information
    taskRow = document.createElement("tr");
    taskRow.innerHTML = `
      <td>${taskName}</td>
      <td>${taskDate}</td>
      <td>${taskPriority}</td>
      <td>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </td>
    `;
    // Add the new row to the table
    taskList.appendChild(taskRow);
  }

  // Add event listeners to the edit and delete buttons
  const editButton = taskRow.querySelector(".edit-button");
  editButton.addEventListener("click", (e) => {
    // When the edit button is clicked, fill the form with the task information and change the submit button text to "Update Task"
    document.querySelector("#task-name").value = taskRow.cells[0].innerText;
    document.querySelector("#task-date").value = formatDate(
      taskRow.cells[1].innerText
    );
    document.querySelector("#task-priority").value = taskRow.cells[2].innerText;
    submitButton.innerText = "Update Task";
    // Add the editing class to the row
    taskRow.classList.add("editing");
  });
  const deleteButton = taskRow.querySelector(".delete-button");
  deleteButton.addEventListener("click", (e) => {
    // When the delete button is clicked, remove the row from the table
    taskRow.remove();
  });

  // Reset the form
  taskForm.reset();
});

// Function to format a date string in the format "dd/mm/yyyy"
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}/${month}/${year}`;
}
