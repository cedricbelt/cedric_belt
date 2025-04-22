document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectNumber = button.dataset.project;
            document.body.classList.add('blur');
            setTimeout(() => {
                window.location.href = `project${projectNumber}.html`;
            }, 500);
        });
    });
});
