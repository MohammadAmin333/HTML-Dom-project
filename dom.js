document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting  

    // Accessing values from input fields  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Displaying the user info on the page  
    document.getElementById('userInfo').innerHTML = `  
        <p><strong>Name:</strong> ${name}</p>  
        <p><strong>Age:</strong> ${age}</p>  
        <p><strong>Email:</strong> ${email}</p>  
    `;

    // Optionally, you can clear the form after submission  
    document.getElementById('userForm').reset();
});  