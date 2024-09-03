
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('butnn');
    const ajouter = document.getElementById('ajout');
    const tableau = document.querySelector('#tabe tbody');

    button.addEventListener('click', function () {
        const texte = ajouter.value;
        if (texte) {
            const row = document.createElement('tr');
            row.classList.add('tache');

            row.innerHTML = `
                <td>${texte}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn  btn-danger " onclick="action(this, 'bg-danger')">To Do</button>
                        <button class="btn  btn-warning " onclick="action(this, 'bg-warning')">Doing</button>
                        <button class="btn  btn-success " onclick="action(this, 'bg-success')">Done</button>
                    </div>
                </td>
            `;

            tableau.appendChild(row);
            ajouter.value = '';
        }
    });
});

function action(button, colorClass) {
    const row = button.closest('tr');
    row.classList.remove('bg-danger', 'bg-warning', 'bg-success');
    row.classList.add(colorClass);
}
