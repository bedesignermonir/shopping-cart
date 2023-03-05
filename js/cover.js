document.getElementById('cover-add').addEventListener('click', function () {
    const coverCount = document.getElementById('cover-number');
    const coverCountNum = parseInt(coverCount.value);
    const increaseCoverCount = coverCountNum + 1;
    const coverCountIncrease = coverCount.value = increaseCoverCount;

    const coverPrice = document.getElementById('cover-price');
    const doubleprice = coverCountIncrease * 59;

    coverPrice.innerText = doubleprice;
});
document.getElementById('cover-minus').addEventListener('click', function () {
    const coverCount = document.getElementById('cover-number');
    const coverCountNum = parseInt(coverCount.value);
    const increaseCoverCount = coverCountNum - 1;
    const coverCountIncrease = coverCount.value = increaseCoverCount;


    const coverPrice = document.getElementById('cover-price');
    const doubleprice = coverCountIncrease * 59;

    coverPrice.innerText = doubleprice;
})


