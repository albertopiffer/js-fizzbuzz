let valoreInput = document.getElementById('container')

for (let i = 1; i <= 100; i++) {
    
    if (i % 15 == 0){
        console.log('FizzBuzz')
        valoreInput.innerHTML += 'FizzBuzz' + "<br>";
    }
    else {
        
        if (i % 5 == 0 || i % 3 == 0) {
            
            if (i % 5 == 0){
                console.log('Buzz')
                valoreInput.innerHTML += 'Buzz' + "<br>";
            }

            if (i % 3 == 0){
                console.log('Fizz')
                valoreInput.innerHTML += 'Buzz' + "<br>";
            }

        }
        else {
            console.log(i)
            valoreInput.innerHTML += i + "<br>";
        }
    }
}
