'use strict';

// Khai báo các element để sử dụng
const btnsShowModal = document.querySelectorAll('.show-modal');
const modalEle = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlayEle = document.querySelector('.overlay');

//Gắn sự kiện để mở Modal(Khai báo hàm và xóa Hidden)
const openModal = function () {
  modalEle.classList.remove('hidden');
  overlayEle.classList.remove('hidden');
};

//Gắn sự kiện để đóng odal(Khai báo hàm và add hidden lại)
const closeModal = function () {
  modalEle.classList.add('hidden');
  overlayEle.classList.add('hidden');
};

//Dùng vòng lắp "for" để gắn sự kiện cho từng phần tử trong btnsShowModel
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);

//Gắn sự kiện CloseModal cho nút ấn Esc tren bàn phím
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
