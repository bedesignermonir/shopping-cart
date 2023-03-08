document.getElementById('cover-add').addEventListener('click', function () {
    const coverCount = document.getElementById('cover-number');
    const coverCountNum = parseInt(coverCount.value);
    const increaseCoverCount = coverCountNum + 1;
    const coverCountIncrease = coverCount.value = increaseCoverCount;

    const coverPrice = document.getElementById('cover-price');
    const doubleprice = coverCountIncrease * 59;

    coverPrice.innerText = doubleprice;

    const subTotal = document.getElementById('sub-total');
    const newSub = parseInt(subTotal.innerText);
    subTotal.innerText = newSub + doubleprice;
});
document.getElementById('cover-minus').addEventListener('click', function () {
    const coverCount = document.getElementById('cover-number');
    const coverCountNum = parseInt(coverCount.value);
    const increaseCoverCount = coverCountNum - 1;
    const coverCountIncrease = coverCount.value = increaseCoverCount;


    const coverPrice = document.getElementById('cover-price');
    const doubleprice = coverCountIncrease * 59;

    coverPrice.innerText = doubleprice;

    const subTotal = document.getElementById('sub-total');
    const newSub = parseInt(subTotal.innerText);
    subTotal.innerText = doubleprice - newSub;
})


