import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output })

rl.question('Insira um número maior ou igual a 20\n', function (resposta) {
    const numberOfLines = validateInput(resposta)
    drawHourglass(numberOfLines)
    rl.close()
})

function validateInput(userInput) {
    const inputAsNumber = Number(userInput)
    if(isNaN(inputAsNumber)) {
        throw new Error("Por favor, rode o programa de novo e insira um número")
    }

    if(inputAsNumber < 20) {
        throw new Error("Por favor, rode o programa de novo e insira um número maior ou igual a 20")
    }

    return inputAsNumber
}

function drawHourglass(n) {
    for(let i = 0; i < n; i++) { 
        // preenchendo a linha toda que será usada na metade superior da ampulheta com '#'
        const upperHalfLine = Array(n).fill('#')
        // criando a linha da metade inferior da ampulheta
        const lowerHalfLine = Array(n).fill(' ')
        // preenchendo as bordas da ampulheta
        lowerHalfLine[0] = '#'
        lowerHalfLine[n - 1] = '#'

        if(i === 0 || i === 1 || i === n - 1) {
            console.log(upperHalfLine.join(''))
            continue
        }

        if(i + 1 <= n / 2) {
            // preenchendo da segunda posição do array até a i - 1 com ''
            upperHalfLine.fill(' ', 1, i)
            // preenchendo da posição n - 1 do array até penúltima com ''
            upperHalfLine.fill(' ', n - i, n - 1)

            console.log(upperHalfLine.join(''))
            continue
        }

        lowerHalfLine[-i + n - 1] = '#'
        lowerHalfLine[i] = '#'

        console.log(lowerHalfLine.join(''))
        continue
    }
}