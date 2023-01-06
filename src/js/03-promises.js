import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);
// const deley = e.target.elements.deley.value;

function onFormSubmit(event) {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  console.log(delay);
  console.log(step);
  console.log(amount);

  for (let index = 0; index < amount; index++) {
    console.log(index);
    createPromise(index, delay + step * index)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position + 1} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position + 1} in ${delay}ms`
        );
      });

    //  (console.log(`❌ Rejected promise ${position} in ${delay}ms`));
    //   }
  }
}
//   }
// }
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// if (shouldResolve) {
//   resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
// } else {
//   reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
// }
