let count = 0

const value = document.querySelector(`#value`)
const btns = document.querySelectorAll(`.btn`)


btns.forEach(btn => {
    btn.addEventListener(`click`, (evt) => {
        const update = evt.target.classList;
        if(update.contains('decrease')) {
            count--
        }else if(update.contains('increase')){
            count++
        }else {
            count = 0
        }

        if(count > 0) {
            value.style.color = `green`
        }

        if(count < 0) {
            value.style.color = `red`
        }

        if(count === 0) {
            value.style.color = `#222`
        }

        value.innerText = count
    })
})



























// btns.forEach(btn => {

//     btn.addEventListener(`click`, (evt) => {
//         const update = evt.currentTarget.classList;
//         if(update.contains(`decrease`)) {
//             count--
//         }else if(update.contains(`increase`)) {
//             count++
//         }else {
//             count = 0
//         }
//         if (count > 0) {
//             value.style.color = "green";
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#222";
//         }
        
//         value.innerText = count;
//     })
// })