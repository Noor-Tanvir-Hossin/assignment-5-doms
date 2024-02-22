function seatPlan(){
    const seat = document.getElementById('seat-plan');
    seat.scrollIntoView({ behavior: "smooth" });
}

let perSeatCount=0;
let totalTicketPrice=0;
let grandTotalPrice=0;
disabledBtn('apply-btn')
disabledBtn('next-btn')

const allBtn=document.getElementsByClassName('card')

for (const btn of allBtn){
    btn.addEventListener("click",function(event){
       if(perSeatCount<4){
        setElment('hi')
        btn.classList.add('pointer-events-none');
        const selectSeat=document.getElementById('select-your-seat')
        const div=document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-between')
        div.classList.add('px-6')
        
        const seat=event.target.innerText;
        const seatTag=event.target
        seatTag.classList.add('bg-lime-500')
        const p1=document.createElement("p")
        const p2=document.createElement("p")
        const p3=document.createElement("p")
        p1.innerText=seat
        p2.innerText="economy"
        p3.innerText="550"
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        selectSeat.appendChild(div)
        const seatLeft=document.getElementById("seat-left")
        const cV=convertedVlue('seat-left')
        seatLeft.innerText=cV-1
        const seatCount=document.getElementById("seat-count")
        const cH=convertedVlue('seat-count')
        seatCount.innerText=cH+1
        const totalPrice=document.getElementById("total-price")
        const cN=convertedVlue('total-price')
        totalTicketPrice=cN+550
        totalPrice.innerText=totalTicketPrice
       
        const grandTotal=document.getElementById("grand-total")
        // const cG=convertedVlue('grand-total')
         grandTotalPrice=totalTicketPrice;
        grandTotal.innerText=grandTotalPrice;
        
        perSeatCount=perSeatCount+1;      
       }
       if ((perSeatCount === 4)) {
        enableBtn('apply-btn');
        alert('Your Highest selection is 4 tickets!');
    }     

    })
    
}
const couponBtn = document.getElementById('apply-btn');
couponBtn.addEventListener('click', function () {
    const couponCode = document.getElementById('cupon-input').value;
    if (couponCode === 'NEW15') {
        let new15 = (totalTicketPrice * 15) / 100;

        grandTotalPrice = grandTotalPrice - new15;

        setInnerText('grand-total', grandTotalPrice);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else if (couponCode === 'Couple 20') {
        const couple20 = (totalTicketPrice * 20) / 100;
        grandTotalPrice = grandTotalPrice - couple20;
        setInnerText('grand-total', grandTotalPrice);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else {
        alert('Invalid Code! Please Enter a Valid Coupon Code')
    }
})
const num = document.getElementById('number')
num.addEventListener('input', function () {
    const numberValue = parseInt(num.value)
    if (perSeatCount > 0 && numberValue > -1 ) {
        enableBtn('next-btn')
    }

});
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('popup').classList.remove('hidden');

});
const returnBtn = document.getElementById('continue-btn');
returnBtn.addEventListener('click', function () {
    location.reload()
});