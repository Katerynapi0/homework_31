'use strict';
//масив картинок
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];
//лічильник для відображення поточної картинки
let currentIndex = 0;
//отримання посилань на картинки та кнопки
const sliderImg = document.querySelector('.slider-img');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
//функція для оновлення відображення поточної картинки
function updateImage() {
    //шлях до поточного зображення
    sliderImg.src = images[currentIndex];
    //перевірка на відображення кнопок
    if(currentIndex === 0){
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else if(currentIndex === images.length - 1){
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}
//обробник подій для відображення наступної картинки
nextBtn.addEventListener('click', function() {
    if(currentIndex < images.length - 1){
        currentIndex++;
        updateImage();
    }
})
//обробник подій для відображення попередньої картинки
prevBtn.addEventListener('click', function() {
    if(currentIndex > 0){
        currentIndex--;
        updateImage();
    }
});

updateImage(); //виклик функції для відображення початкової картинки при оновленні сторінки, без виклику даної функції першу картинка не відобразиться 