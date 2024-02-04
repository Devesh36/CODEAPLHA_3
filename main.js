document.getElementById('issue-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const assignedTo = document.getElementById('assignedTo').value;

    // Send the issue data to the server using fetch or AJAX (not implemented here)

    // After creating the issue, update the UI or redirect to the updated issue list
});
