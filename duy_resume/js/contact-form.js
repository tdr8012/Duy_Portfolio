document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately

    // Get form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
        return;
    }

    // Send data to server (for now, this example just logs it to the console)
    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Show success message
    document.getElementById('success').style.display = 'block';
    document.getElementById('error').style.display = 'none';

    // Reset form
    document.getElementById('contact-form').reset();
});

// Correctly define the target element you want to observe
const targetElement = document.getElementById('contact-form'); // or any other selector

// Check if the element exists
if (targetElement) {
    const observer = new MutationObserver(function(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.removedNodes.forEach(removedNode => {
                    if (removedNode === targetElement) {
                        // Handle node removal
                        console.log('The target element was removed:', removedNode);
                    }
                });
            }
        }
    });

    // Start observing the target element for child list mutations
    observer.observe(document.body, { childList: true, subtree: true });

} else {
    console.error('Target element not found!');
}
