import Notiflix from 'notiflix';
let delay = 0;
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.form input[name="delay"]'),
  step: document.querySelector('.form input[name="step"]'),
  amount: document.querySelector('.form input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  if (refs.delay.value < 0 || refs.step.value < 0 || refs.amount.value <= 0) {
    Notiflix.Notify.failure(`❌ Please enter correct data     First delay >= 0 , Delay step >= 0, Amount > 0`);
    return
  };

  for ( let i = 1; i <= refs.amount.value; i += 1) {
    if (i === 1) {
      delay = Number(refs.delay.value);
      createPromise(i, delay);
    } else {
      delay += Number(refs.step.value)
       createPromise( i, delay);
    } 
  };
};

function createPromise(position, delay) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {  
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          res({ position, delay });
        } else {
          rej({ position, delay });
        }  
      }, delay);
    });
    promise.then(({ position, delay }) => { Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`) })
      .catch(({ position, delay }) => { Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`) })
  };


