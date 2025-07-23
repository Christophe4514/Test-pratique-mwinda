document.addEventListener('DOMContentLoaded', function () {
    // Traitement réservation
    const formReservation = document.getElementById('formReservation');
    const confirmationReservation = document.getElementById('confirmation');
    if (formReservation) {
        formReservation.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(formReservation);
            const nom = data.get('nom');
            const telephone = data.get('telephone');
            const depart = data.get('depart');
            const destination = data.get('destination');
            const type = data.get('type');
            confirmationReservation.style.display = 'block';
            confirmationReservation.textContent = `Merci ${nom}, votre réservation (${type}) de ${depart} à ${destination} a bien été envoyée ! Nous vous contacterons au ${telephone}.`;
            formReservation.reset();
        });
    }

    // Traitement contact
    const formContact = document.getElementById('formContact');
    const confirmationContact = document.getElementById('confirmationContact');
    if (formContact) {
        formContact.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(formContact);
            const nom = data.get('nom');
            const email = data.get('email');
            const message = data.get('message');
            confirmationContact.style.display = 'block';
            confirmationContact.textContent = `Merci ${nom}, votre message a bien été envoyé ! Nous vous répondrons à l'adresse ${email}.`;
            formContact.reset();
        });
    }
});
