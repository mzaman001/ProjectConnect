function toggleEditMode() {
    const inputs = document.querySelectorAll('.details-section input');
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');

    inputs.forEach(input => {
        input.disabled = !input.disabled; // Toggle disabled state
    });

    saveButton.style.display = saveButton.style.display === 'none' ? 'inline' : 'none';
    cancelButton.style.display = cancelButton.style.display === 'none' ? 'inline' : 'none';
    editButton.style.display = editButton.style.display === 'none' ? 'inline' : 'none';
}

function saveChanges() {
    // Validate inputs here (e.g., email format, phone number)
    // Save changes to local storage or update dynamically
    toggleEditMode(); // Exit edit mode
}

function cancelEdit() {
    // Reset fields to original values if needed
    toggleEditMode(); // Exit edit mode
} 