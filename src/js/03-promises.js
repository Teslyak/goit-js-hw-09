import Notiflix from 'notiflix';
let formData = {};
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.form input[name="delay"]'),
  step: document.querySelector('.form input[name="step"]'),
  amount: document.querySelector('.form input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  createPromise(refs.amount.value, refs.delay.value);
  
};

function createPromise(position, delay) {
  for (i = 1; i <= position; i += 1) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
          
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          res({ position, delay });
        delay = Number(delay) + Number(refs.step.value)
        } else {
          rej({ position, delay });
        delay = Number(delay) + Number(refs.step.value)
        }
        
      }, delay);
    });
    
    promise.then(({ position, delay }) => { console.log(`✅ Fulfilled promise ${position} in ${delay}ms`) })
      .catch(({ position, delay }) => { console.log(`❌ Rejected promise ${position} in ${delay}ms`) })
    
  };

};

