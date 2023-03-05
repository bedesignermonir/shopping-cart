
document.getElementById('mobile-added-button').addEventListener('click', function () {
    const mobileCount = document.getElementById('mobile-count');
    const mobileCountNum = parseInt(mobileCount.value);
    const mobileCountIncrease = mobileCountNum + 1;
    mobileCount.value = mobileCountIncrease;


    const mobilePrice = document.getElementById('mobile-price');
    const mobilePriceNum = parseFloat(mobilePrice.innerText);
    const doubleprice = mobileCountIncrease * 1219;


    mobilePrice.innerText = doubleprice;
    console.log(doubleprice)


});
document.getElementById('mobile-substract-button').addEventListener('click', function () {
    const mobileCount = document.getElementById('mobile-count');
    const mobileCountNum = parseInt(mobileCount.value);
    const mobileCountIncrease = mobileCountNum - 1;
    mobileCount.value = mobileCountIncrease;


    const mobilePrice = document.getElementById('mobile-price');
    const mobilePriceNum = parseFloat(mobilePrice.innerText);
    const doubleprice = mobileCountIncrease * 1219;


    mobilePrice.innerText = doubleprice;
    console.log(doubleprice)


})