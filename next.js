const nextModalButtons = document.querySelectorAll('[data-modal-target]');


nextModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		nextModal(modal);
	});
});

function nextModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
}
