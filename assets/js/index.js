// Select the element
const element = document.getElementById('item2');

// Add event listeners for mouseenter and mouseleave
element.addEventListener('mouseenter', () => {
    var items = document.getElementsByClassName("item-row-selected");
    items[0].classList.remove("item-row-selected");
    element.classList.add('item-row-selected');
});

element.addEventListener('mouseleave', () => {
    element.classList.remove('item-row-selected');
    document.getElementById("item1").classList.add("item-row-selected");
});
// Select the element
const element2 = document.getElementById('item3');

// Add event listeners for mouseenter and mouseleave
element2.addEventListener('mouseenter', () => {
    var items = document.getElementsByClassName("item-row-selected");
    items[0].classList.remove("item-row-selected");
    element2.classList.add('item-row-selected');
});

element2.addEventListener('mouseleave', () => {
    element2.classList.remove('item-row-selected');
    document.getElementById("item1").classList.add("item-row-selected");
});



//  for slider


const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel__item_active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}



const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);



var count = 0;

function UpdateLSlider() {
    var myactive = document.getElementsByClassName("carousel__item")[count];
    var isItem = myactive.closest('.carousel__item');
    if (!isItem || myactive.classList.contains('carousel__item_active')) {};
    update(myactive);

    ++count;

    if (count === 5) {
        count = 0;
    }
}

setInterval(UpdateLSlider, 2000);