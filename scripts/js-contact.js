 const form = document.querySelector('.form-data');
        const fields = [
            { el: document.getElementById('fullName'), name: 'Full Name' },
            { el: document.getElementById('email'), name: 'Email' },
            { el: document.getElementById('subject'), name: 'Subject' },
            { el: document.getElementById('message'), name: 'Message' }
        ];

        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

            // Clear previous errors
            fields.forEach(f => {
                f.el.classList.remove('invalid');
                const errorSpan = f.el.nextElementSibling; // Get the corresponding error span
                errorSpan.innerHTML = ''; // Clear error message
            });

            let hasErrors = false;

            // Validate each field
            fields.forEach(f => {
                const errorSpan = f.el.nextElementSibling; // Get the corresponding error span
                if (!f.el.value.trim()) {
                    hasErrors = true;
                    errorSpan.innerHTML = `${f.name} is required`; // Set error message
                    f.el.classList.add('invalid');
                }
            });

            // Additional email validation
            const emailField = fields.find(f => f.name === 'Email').el;
            if (emailField.value.trim() && !emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                hasErrors = true;
                const errorSpan = emailField.nextElementSibling; // Get the corresponding error span
                errorSpan.innerHTML = 'Please enter a valid email address'; // Set error message
                emailField.classList.add('invalid');
            }

            if (hasErrors) {
                return false; // Prevent submission if there are errors
            }

            // If validation passes
            alert('Form submitted successfully!');
            form.reset(); // Reset form after successful submission
            return false;
        });

        // Clear error message when user starts typing
        fields.forEach(field => {
            field.el.addEventListener('input', () => {
                const errorSpan = field.el.nextElementSibling; // Get the corresponding error span
                if (field.el.classList.contains('invalid')) {
                    field.el.classList.remove('invalid');
                    errorSpan.innerHTML = ''; // Clear error message
                }
            });
        });