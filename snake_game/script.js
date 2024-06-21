let snake = document.querySelector('.snake');
let food = document.querySelector('.food');
let window_x = window.innerWidth;
let window_y = window.innerHeight;
console.log(window_x)
console.log(window_y);
let position = snake.getBoundingClientRect();
console.log("snake position", snake.getBoundingClientRect())

// //For me to move the snake I will have to place it in perpetual motion
let distance = 0;
function animate() {
    position = snake.getBoundingClientRect();
    if (window_x == Math.floor(position.x)) {
        console.log('reached')
        snake.style.top = 0;
        snake.style.left = 0;
    }
    function draw() {
        snake.animate(
            [
                { transform: `translate(${distance}px,0px)` },
                { transform: `translate(${distance + 1}px,0px)` }
            ],
            {
                duration: 1000,
            }
        )
    }

    draw()

    function update() {
        distance++
    }

    update()
    console.log("This is the point of the snake", Math.floor(position.x))
    requestAnimationFrame(animate)

}

requestAnimationFrame(animate)

// console.log('This is the food blounding client', distanceX)
// let step = 0;
// let stepdown = 0;

// function eatFood() {
//     if ((distanceX - 10) == (snake.getBoundingClientRect().x)) {
//         food.style.display = 'none';
//         snake.style.width = '40px'
//     }
// }

// eatFood()
// document.addEventListener('keydown', (e) => {
//     if ((distanceX - 10) == (snake.getBoundingClientRect().x)) {
//         food.style.display = 'none';
//         snake.style.width = '40px'
//     }
//     console.log("This is the key that has been pressed", e.key)
//     switch (e.key) {
//         case 'ArrowRight':
//             step = step + 1;
//             console.log('step', step)
//             snake.style.setProperty('--move', `${step}px`)
//             console.log(snake.getBoundingClientRect())
//             break;

//         case 'ArrowLeft':
//             step = step - 1;
//             console.log('step', step)
//             snake.style.setProperty('--move', `${step}px`)
//             break;

//         case 'ArrowUp':
//             stepdown = stepdown - 1;
//             console.log('step', stepdown)
//             snake.style.setProperty('--y', `${stepdown}px`)
//             break;

//         case 'ArrowDown':
//             stepdown = stepdown + 1;
//             console.log('step', stepdown)
//             snake.style.setProperty('--y', `${stepdown}px`)
//             break;

//     }
// })

// let windowSize = window.innerHeight;
// let windowWidth = window.innerWidth;
// console.log('This is the inner window size', windowSize)
// let speed = 0