document.getElementById('mobile-added-button').addEventListener('click', function () {
    const mobileCount = document.getElementById('mobile-count');
    const mobileCountNum = parseInt(mobileCount.value);
    const mobileCountIncrease = mobileCountNum + 1;
    mobileCount.value = mobileCountIncrease;


    const mobilePrice = document.getElementById('mobile-price');
    const mobilePriceNum = parseFloat(mobilePrice.innerText);
    console.log(mobilePriceNum);

})