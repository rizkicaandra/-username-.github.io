let slider = document.getElementById("myRange");
let output = document.getElementById("result");
let hasil = document.getElementById("passwordacak");
let checkBox1 = document.getElementById("huruf");
let checkBox2 = document.getElementById("angka");
let checkBox3 = document.getElementById("symbol");
let info = document.getElementById("infokekuatan");

output.innerHTML = slider.value;
hasil.innerHTML = "Geser Slider Untuk Mendapatkan Password"

let flagAlphabet = false;
let flagAngka = false;
let flagSymbol = false;

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTU'
let angka ='0123456789'
let symbol = '!@#$%^*()_+~?='

let randomAlphabet = Math.floor(Math.random() * alphabet.length)
let randomAngka = Math.floor(Math.random() * angka.length)
let randomSymbol = Math.floor(Math.random() * symbol.length)
let randomPilihan;

slider.oninput = function() {

let total = ''

    if(checkBox1.checked == true){
        flagAlphabet = true
    }else{
        flagAlphabet = false
    }

    if(checkBox2.checked == true){
        flagAngka = true
    }else{
        flagAngka = false
    }

    if(checkBox3.checked == true){
        flagSymbol = true
    }else{
        flagSymbol = false
    }

    for(let i = 0; i < slider.value; i++){

        if(flagAlphabet && flagAngka && flagSymbol){
            randomPilihan = Math.floor(Math.random() * 3 )
    
            if(randomPilihan === 0){
                randomAlphabet = Math.floor(Math.random() * alphabet.length)
                total += alphabet[randomAlphabet]
            } else if (randomPilihan === 1) {
                randomAngka = Math.floor(Math.random() * angka.length)
                total += angka[randomAngka]
            } else if (randomPilihan === 2) {
                randomSymbol = Math.floor(Math.random() * symbol.length)
                total += symbol[randomSymbol]
            }
        } 
        
        if (flagAlphabet && flagAngka && !flagSymbol){
            randomPilihan = Math.floor(Math.random() * 2 )
    
            if(randomPilihan === 0){
                randomAlphabet = Math.floor(Math.random() * alphabet.length)
                total += alphabet[randomAlphabet]
            } else if (randomPilihan === 1) {
                randomAngka = Math.floor(Math.random() * angka.length)
                total += angka[randomAngka]
            } 
        } 
        
        if (flagAlphabet && !flagAngka && flagSymbol){
            randomPilihan = Math.floor(Math.random() * 2 )
    
            if(randomPilihan === 0){
                randomAlphabet = Math.floor(Math.random() * alphabet.length)
                total += alphabet[randomAlphabet]
            } else if (randomPilihan === 1) {
                randomSymbol = Math.floor(Math.random() * symbol.length)
                total += symbol[randomSymbol]
            }
        } 
        
        if (!flagAlphabet && flagAngka && flagSymbol){
            randomPilihan = Math.floor(Math.random() * 2 )
    
           
            if(randomPilihan === 0){
                randomAngka = Math.floor(Math.random() * angka.length)
                total += angka[randomAngka]
            } else if (randomPilihan === 1) {
                randomSymbol = Math.floor(Math.random() * symbol.length)
                total += symbol[randomSymbol]
            }
        } 
        
        if (!flagAlphabet && !flagAngka && flagSymbol){
            randomPilihan = Math.floor(Math.random() * 1 )
    
           if (randomPilihan === 0) {
                randomSymbol = Math.floor(Math.random() * symbol.length)
                total += symbol[randomSymbol]
            }
        } 
        
        if (flagAlphabet && !flagAngka && !flagSymbol){
            randomPilihan = Math.floor(Math.random() * 1 )
           
            if(randomPilihan === 0){
                randomAlphabet = Math.floor(Math.random() * alphabet.length)
                total += alphabet[randomAlphabet]
            } 
    
        } 
        
        if (!flagAlphabet && flagAngka && !flagSymbol){
            randomPilihan = Math.floor(Math.random() * 1 )
    
            if(randomPilihan === 0){
                randomAngka = Math.floor(Math.random() * angka.length)
                total += angka[randomAngka]
            } 
        }
    }

   
    if(flagAlphabet || flagAngka || flagSymbol){
        if(output.innerHTML < 1){
            hasil.style.color = "#ff414d";
            info.innerHTML = "Belum ada info";
            info.style.color = "#ff414d";
        } else if (output.innerHTML > 0 && output.innerHTML < 8){
            hasil.style.color = "#ff414d"
            info.innerHTML = "Password lemah"
            info.style.color = "#ff414d";
        } else if (output.innerHTML >= 8 && output.innerHTML < 12){
            hasil.style.color = "#fd8c04"
            info.innerHTML = "Password cukup kuat"
            info.style.color = "#fd8c04";
        } else if (output.innerHTML >= 12){
            hasil.style.color = "#009975"
            info.innerHTML = "Password kuat"
            info.style.color = "#009975";
        }

    }
    hasil.innerHTML = total; 
    output.innerHTML = slider.value;
}


function refresh(){
    
let total = ''

    if(checkBox1.checked == true){
        flagAlphabet = true
    }else{
        flagAlphabet = false
    }

    if(checkBox2.checked == true){
        flagAngka = true
    }else{
        flagAngka = false
    }

    if(checkBox3.checked == true){
        flagSymbol = true
    }else{
        flagSymbol = false
    }

for(let i = 0; i < slider.value; i++){

    if(flagAlphabet && flagAngka && flagSymbol){
        randomPilihan = Math.floor(Math.random() * 3 )

        if(randomPilihan === 0){
            randomAlphabet = Math.floor(Math.random() * alphabet.length)
            total += alphabet[randomAlphabet]
        } else if (randomPilihan === 1) {
            randomAngka = Math.floor(Math.random() * angka.length)
            total += angka[randomAngka]
        } else if (randomPilihan === 2) {
            randomSymbol = Math.floor(Math.random() * symbol.length)
            total += symbol[randomSymbol]
        }
    } 
    
    if (flagAlphabet && flagAngka && !flagSymbol){
        randomPilihan = Math.floor(Math.random() * 2 )

        if(randomPilihan === 0){
            randomAlphabet = Math.floor(Math.random() * alphabet.length)
            total += alphabet[randomAlphabet]
        } else if (randomPilihan === 1) {
            randomAngka = Math.floor(Math.random() * angka.length)
            total += angka[randomAngka]
        } 
    } 
    
    if (flagAlphabet && !flagAngka && flagSymbol){
        randomPilihan = Math.floor(Math.random() * 2 )

        if(randomPilihan === 0){
            randomAlphabet = Math.floor(Math.random() * alphabet.length)
            total += alphabet[randomAlphabet]
        } else if (randomPilihan === 1) {
            randomSymbol = Math.floor(Math.random() * symbol.length)
            total += symbol[randomSymbol]
        }
    } 
    
    if (!flagAlphabet && flagAngka && flagSymbol){
        randomPilihan = Math.floor(Math.random() * 2 )

       
        if(randomPilihan === 0){
            randomAngka = Math.floor(Math.random() * angka.length)
            total += angka[randomAngka]
        } else if (randomPilihan === 1) {
            randomSymbol = Math.floor(Math.random() * symbol.length)
            total += symbol[randomSymbol]
        }
    } 
    
    if (!flagAlphabet && !flagAngka && flagSymbol){
        randomPilihan = Math.floor(Math.random() * 1 )

       if (randomPilihan === 0) {
            randomSymbol = Math.floor(Math.random() * symbol.length)
            total += symbol[randomSymbol]
        }
    } 
    
    if (flagAlphabet && !flagAngka && !flagSymbol){
        randomPilihan = Math.floor(Math.random() * 1 )
       
        if(randomPilihan === 0){
            randomAlphabet = Math.floor(Math.random() * alphabet.length)
            total += alphabet[randomAlphabet]
        } 

    } 
    
    if (!flagAlphabet && flagAngka && !flagSymbol){
        randomPilihan = Math.floor(Math.random() * 1 )

        if(randomPilihan === 0){
            randomAngka = Math.floor(Math.random() * angka.length)
            total += angka[randomAngka]
        } 
    }

   
}

if(flagAlphabet || flagAngka || flagSymbol){
    if(output.innerHTML < 1){
        hasil.style.color = "#ff414d";
        info.innerHTML = "Belum ada info";
        info.style.color = "#ff414d";
    } else if (output.innerHTML > 0 && output.innerHTML < 8){
        hasil.style.color = "#ff414d"
        info.innerHTML = "Password lemah"
        info.style.color = "#ff414d";
    } else if (output.innerHTML >= 8 && output.innerHTML < 12){
        hasil.style.color = "#fd8c04"
        info.innerHTML = "Password cukup kuat"
        info.style.color = "#fd8c04";
    } else if (output.innerHTML >= 12){
        hasil.style.color = "#009975"
        info.innerHTML = "Password kuat"
        info.style.color = "#009975";
    }

}
hasil.innerHTML = total; 
output.innerHTML = slider.value;

}