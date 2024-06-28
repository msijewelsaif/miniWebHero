
function increment(countId, priceId, itemTotalId) {
    let count = document.getElementById(countId);
    let price = document.getElementById(priceId).innerText;
    let itemTotal = document.getElementById(itemTotalId);

    count.value = parseInt(count.value) + 1;
    updateItemTotal(count, price, itemTotal);
}


function decrement(countId, priceId, itemTotalId) {
    let count = document.getElementById(countId);
    let price = document.getElementById(priceId).innerText;
    let itemTotal = document.getElementById(itemTotalId);

    if (count.value > 0) {
        count.value = parseInt(count.value) - 1;
        updateItemTotal(count, price, itemTotal);
    }
}


function updateItemTotal(countElement, price, itemTotalElement) {
    let quantity = parseInt(countElement.value);
    let totalPrice = quantity * parseInt(price);
    itemTotalElement.innerText = totalPrice.toString();
    

    calculateTotals();
}

function calculateTotals() {
    let itemPrice1 = parseInt(document.getElementById('price').innerText);
    let itemPrice2 = parseInt(document.getElementById('price1').innerText);
    let quantity1 = parseInt(document.getElementById('count1').value);
    let quantity2 = parseInt(document.getElementById('count2').value);
    let deliveryCharge = parseInt(document.getElementById('charge').innerText);
    let couponCode = document.querySelector('.coupon').value.trim();

    let totalPrice = (itemPrice1 * quantity1) + (itemPrice2 * quantity2);
    let grandTotal = totalPrice + deliveryCharge;
    
   
    if (couponCode === 'SUMMER25') {
        let discount = Math.round(totalPrice * 0.25); 
        grandTotal -= discount;
    }

   
    document.getElementById('pr_price').innerText = totalPrice.toString();
    document.getElementById('gd_total').innerText = grandTotal.toString();
}


document.querySelector('button').addEventListener('click', function() {
    calculateTotals(); 
});
