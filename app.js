const btn = document.querySelector('.b');
const btn1 = document.querySelector('.b1');
const btn2 = document.querySelector('.b2');
const btn3 = document.querySelector('.b3');
const body = document.querySelector('body');
btn.classList.add('border-1', 'w-20', 'h-10', 'm-5');
btn1.classList.add('border-1', 'w-20', 'h-10', 'm-5');
btn2.classList.add('border-1', 'w-20', 'h-10', 'm-5');
btn3.classList.add( 'border-1', 'w-20', 'h-10', 'm-5',  'hidden' , 'flex' , 'justify-center' , 'items-center');
const something = () => {
    body.classList.remove('bg-red-400', 'bg-green-400', 'bg-blue-400', 'text-white');
    body.classList.add('bg-red-400', 'text-white');
    btn.classList.add('hidden');
    btn3.classList.remove('hidden');
    btn2.classList.remove('hidden');
    btn1.classList.remove('hidden');    

    
}
const something1 = () => {
    body.classList.remove('bg-red-400', 'bg-green-400', 'bg-blue-400', 'text-white');
    body.classList.add('bg-green-400', 'text-white');
    btn1.classList.add('hidden');
    btn3.classList.remove('hidden');
    btn3.classList.add('flex')
    btn.classList.remove('hidden');
    btn2.classList.remove('hidden');
}
const something2 = () => {
    body.classList.remove('bg-red-400', 'bg-green-400', 'bg-blue-400', 'text-white');
    body.classList.add('bg-blue-400', 'text-white');
    btn2.classList.add('hidden');
     btn3.classList.add('flex')
     btn3.classList.remove('hidden');
     btn.classList.remove('hidden');
     btn1.classList.remove('hidden');
}
const something3 = () => {
    body.classList.remove('bg-red-400', 'bg-green-400', 'bg-blue-400', 'text-white');
    btn3.classList.add('hidden');
    btn.classList.remove('hidden');
    btn1.classList.remove('hidden');
    btn2.classList.remove('hidden');
}
