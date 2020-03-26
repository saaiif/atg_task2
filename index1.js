const openModalButtons = document.querySelectorAll('[data-modal-target]');

const closeModalButtons = document.querySelectorAll('[data-close-button]');
const activeCards = document.getElementsByClassName('paid-event');
const pricing = document.getElementsByClassName('radio-items');

const overlay = document.getElementById('overlay');
var card = [ ...document.querySelectorAll('.card') ];
const nextButton = document.querySelector('.enableBtn');
const radioBtnClicked = document.querySelector('.checked');
const abc = document.querySelector('.checkedPlus');
const formTicket = document.querySelector('.ticket-counter');
const inputField = document.getElementById('number');
console.log(formTicket);

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

// Next Button

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

for (let i = 0; i < activeCards.length; i++) {
	activeCards[i].onclick = function() {
		var activate = activeCards[0];
		while (activate) {
			if (activate.tagName === 'DIV') {
				activate.classList.remove('active');
			}
			activate = activate.nextSibling;
		}
		this.classList.add('active');
	};
}

for (let i = 0; i < pricing.length; i++) {
	pricing[i].onclick = function() {
		var activeStatus = pricing[0];
		while (activeStatus) {
			if (activeStatus.tagName === 'DIV') {
				activeStatus.classList.remove('radio-area');
			}
			activeStatus = activeStatus.nextSibling;
		}
		this.classList.add('radio-area');
	};
}

nextButton.disabled = true;

radioBtnClicked.addEventListener('click', () => {
	if (radioBtnClicked) {
		nextButton.disabled = false;
	} else {
		nextButton.disabled = true;
	}
});

nextButton.disabled = true;

abc.addEventListener('click', () => {
	if (abc) {
		nextButton.disabled = false;
	} else {
		nextButton.disabled = true;
	}
});

var touched = false;
card.map((item) => {
	item.onclick = () => {
		item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-up icon"></i>';

		item.children[1].style.display = 'flex';
		if (item.children[1].classList.length == 2) {
			item.children[1].classList.remove('show');
			item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-down icon"></i>';
			touched = false;
			return;
		}
		if (touched) {
			var x = document.getElementsByClassName('show');
			item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-down icon"></i>';
			x[0].classList.remove('show');
		}
		item.children[1].classList.add('show');
		touched = false;
	};
});

window.foo = function(event) {
	event.stopPropagation();
};
