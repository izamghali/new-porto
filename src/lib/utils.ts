import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import gsap from "gsap"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let sentence = ['Hello', 'World!', "I'm", 'the', 'developer', 'you', 'need.', 
    'Look', 'at', 'this', 'never', 'ending', 'text!', 'I', 'can', 'type', 'this ', 'all',
    'day', 'long.', 'On', 'and', 'on', 'and ', 'on', '.', '.', '.'
]
let greetings = [
    'Hello World!', '안녕 세상!', 'Halo Dunia!', 'こんにちは世界!', 'Halo Dunya!', 'Привет, мир!', '¡Hola Mundo!',
    '你好世界！', 'Ciao mondo!', 'مرحبا بالعالم!', 'Hei maailma!'
]
let test = ['H', 'e', 'l', 'l', 'o']
// let greetingsSplit = []

// greetings.forEach(greeting => {
//     greetingsSplit.push(greeting.split(''));
// })

// let index = 0
// let count = 0
// let isPaused = false

// function clearText(comp) {
//     let word = comp.innerText;
//     let wordSplit = word.split('')
//     let index = wordSplit.length;

//     setInterval(() => {
//         if (index >= 0) {
//             comp.innerText = word.slice(0, index - 2)
//             index--
//         } else {
//             comp.innerText = ` `
//         }
//     }, 10);
// }

// function animateText(comp, letter) {

//     if (letter === ' ') { // add space
//         comp.innerText += `\xa0` + `${letter}`
        
//     } else if (index === greetingsSplit[count].length - 1) { // end of the word, clear
//         comp.innerText += `${letter}`
//         isPaused = true
//         setTimeout(() => {
//             comp.innerText = ` `
//             isPaused = false;
//             // clearText(comp)
//         }, 1000);
//     } else {
//         comp.innerText += `${letter} `
//     }
// }

// export function greet() {
//     let heading = document.getElementById('greet');
    
//     setInterval(() => {
//         if(index < greetingsSplit[count].length && !isPaused) {
//             animateText(heading, `${greetingsSplit[count][index]}`)
//             index++
//         } else {
//             if (count === greetingsSplit.length - 1) {
//                 count = 0
//             } else {
//                 count++
//             }
//             index = 0
//         }
//     }, 150);
     
// }

export function faqSlideIn() {
    const tl = gsap.timeline()

    tl.set('#faqs', {
        x: 760
    })
    tl.to('#faqs', {
        x: 0, ease: 'power2', duration: 2,
        delay: 4
    })

    tl.set('#connect-button', {
        y: 50,
    })
    tl.to('#connect-button', {
        y: 0, ease: 'power1', duration: 2, opacity: 1
    })

}

export function popUpAlert() {
    gsap.set('.alert', {
        y: -100, 
    })
    gsap.to('.alert', {
        y: 20, delay: 1.2,
    })
}

export function showContentHero() {
    const tl = gsap.timeline()
    tl.set('#profile', {
        opacity: 0
    })
    tl.to('#profile', {
        y: -100, ease: 'power1', duration: 2,
        opacity: 1, delay: 2.5
    })
}

export function badgesSlideIn() {
    const tl = gsap.timeline()
    tl.fromTo('#heading-badge', {
        y:140, 
    }, {
        y:0, delay: 7, ease: 'power1', duration: 2, opacity: 1
    })
    tl.fromTo('#badge-codecademy', {
        y:120, 
    }, {
        y:0, ease: 'expo.out', duration: 1, opacity: 1
    })
    tl.fromTo('#badge-purwadhika', {
        y:120, 
    }, {
        y:0, ease: 'expo.out', duration: 1, opacity: 1
    })
    tl.fromTo('#badge-udemy', {
        y:120, 
    }, {
        y:0, ease: 'expo.out', duration: 1, opacity: 1
    })
    
}