const bookedSeat = document.getElementById('booked-seat');
const totalSeat = document.getElementById('total-seat');
const totalPriceEl = document.getElementById('total-price');
const haveCoupon = document.getElementById('have-coupon');
const clickBtn = document.getElementById('click-btn');
const defaultText = document.getElementById('default-text');
const grandTotal = document.getElementById('grand-total-price');
const showCouponPrice = document.getElementById('show-coupon-price');
const nextButton = document.getElementById('next-btn');
const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');
const inputEmail = document.getElementById('input-email');
let selectedSeat =[];
let totalPrice = 0;


function selectSeat(event){
const value = event.innerText;
if(selectedSeat.includes(value)){
    return alert('Seat already booked');
}else if(selectedSeat.length < 4){
    defaultText.classList.add('hidden');
bookedSeat.innerHTML += `<li class="text-base font-bold flex justify-between">
<span>${event.innerText}</span>
<span>Economy</span>
<span>550</span>
</li>`;

event.classList.add('bg-green-500');
event.classList.add('text-white');
selectedSeat.push(event.innerText);
totalSeat.innerText = selectedSeat.length;
console.log(selectedSeat);
totalPrice += 550;
totalPriceEl.innerText = totalPrice;

if(selectedSeat.length > 3){
    haveCoupon.removeAttribute('disabled');
    clickBtn.removeAttribute('disabled');
} 
}else{
    return alert('Maximum Seat booked');
}
}

document.getElementById('click-btn').addEventListener('click', function(event){
    event.preventDefault();
   const couponInputValue = haveCoupon.value;
   let couponSave = 0;
   if(couponInputValue !== "NEW50" && couponInputValue !==" coupon 20"){
    return alert('Coupon is not valid');
   }
   if(couponInputValue === "NEW50"){
    couponSave = totalPrice * .15;
   }else if(couponInputValue === "coupon 20"){
    couponSave = totalPrice * .20;
   }

   const grandTotalPrice = totalPrice - couponSave;
   grandTotal.innerText = grandTotalPrice.toFixed(2);

   showCouponPrice.innerHTML=`<p>Discount :</p><p>-BDT:<span>${couponSave.toFixed(2)}</span></p>`;

})

inputName.addEventListener('input', function(event){
const inputNameEl= event.target.value;
if(typeof inputNameEl === 'string'){
    nextButton.removeAttribute('disabled');
}
})
inputNumber.addEventListener('input', function(event){
const inputValue = event.target.value;
if(inputValue.length >= 11){
    nextButton.removeAttribute('disabled');
}
})
document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
})