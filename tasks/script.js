let x1 = document.querySelector('.x1')
let x2 = document.querySelector('.x2')
let y1 = document.querySelector('.y1')
let y2 = document.querySelector('.y2')
let res = document.querySelector('.result')


//Слон
function B38(){
    if (Math.abs(x1.value-x2.value) == Math.abs(y1.value-y2.value)) {
        res.value = 'Можно перейти'
    } else {
        res.value = 'Нельзя перейти'
    }
}

//Ферзь
function B39(){
    if (x1.value == x2.value || y1.value == y2.value  || Math.abs(x1.value-x2.value) == Math.abs(y1.value-y2.value)) {
        res.value = 'Можно перейти'
        console.log(typeof(x1.value))
    } else {
        res.value = 'Нельзя перейти'
    }
}


//Конь
function B40(){
    if ((Math.abs(x1.value-x2.value) == 1 && Math.abs(y1.value-y2.value) == 2) || (Math.abs(x1.value-x2.value) == 2 && Math.abs(y1.value-y2.value) == 1)) {
        res.value = 'Можно перейти'
    } else {
        res.value = 'Нельзя перейти'
    }
}

let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let num4 = document.querySelector('.num4')
let num5 = document.querySelector('.num5')
let num6 = document.querySelector('.num6')
let resIf = document.querySelector('.resultIf')

function taskIf18 () {
    if (num1.value == num2.value) {
        resIf.value = 3
    }   else {
    if (num1.value == num3.value) {
        resIf.value = 2
    }
    else{
        resIf.value = 1
    }
            }
}

function taskIf19 () {
    if(num1.value == num2.value) {
        if (num2.value == num3.value) {
            resIf.value = 4
        }
        else{
            resIf.value = 3
        }
    } else{
        if (num1.value == num3.value) {
            resIf.value = 2
        }
        else{
            resIf.value = 1
        }
    }
}

function taskIf20() {
    if(Math.abs(num1.value - num2.value) < Math.abs(num1.value - num3.value)){
        resIf.value = 'B AB=' + Math.abs(num1.value - num2.value)
    } else {
        resIf.value = 'C AC=' + Math.abs(num1.value - num3.value)
    }
}

function taskIf21() {
    if (num1.value == 0){
        if (num2.value == 0) {
            resIf.value = 0
        }
        else {
            resIf.value = 2
        }
    } else {
        if (num2.value == 0) {
            resIf.value = 1
        }
        else{
            resIf.value = 3
        }
    }
    
}

function taskIf22() {
    if (num1.value > 0){
        if (num2.value > 0) {
            resIf.value = '1 четверть'
        }
        else {
            resIf.value = '4 четверть'
        }
    } else {
        if (num2.value > 0) {
            resIf.value = '2 четверть'
        }
        else{
            resIf.value = '3 четверть'
        }
    }
    
}

function taskIf23() {
    if (num1.value == num3.value) {
        num7 = num5.value
    }
    else if (num1.value == num5.value) {
        num7 = num3.value
    } else{
        num7 = num1.value
    }
    if (num2.value == num4.value) {
        num8 = num6.value
    }
    else if (num2.value == num6.value) {
        num8 = num4.value
    } else{
        num8 = num2.value
    }
    resIf.value = 'x=' + num7 +' y=' + num8
}


function taskIf24() {
    if (num1.value > 0) {
        resIf.value = 2*Math.sin(num1.value)
    } else{
        resIf.value = 6 - num1.value
    }
}

function taskIf25() {
    if (num1.value > 2 || num1.value < -2) {
        resIf.value = 2*num1.value
    } else{
        resIf.value = -3*num1.value
    }
}

function taskIf26() {
    if (num1.value <= 0) {
        resIf.value = -num1.value
    } else{
        if(num1.value >= 2) {
            resIf.value = 4
        } else {
            resIf.value = Math.pow(num1.value, 2)
        }
       
    }
}

function taskIf27() {
    if (num1.value < 0) {
        resIf.value = 0
    } else{
        if(Math.trunc(num1.value)%2 == 0) {
            resIf.value = 1
        } else {
            resIf.value = -1
        }
       
    }
}


function taskIf28() {
    if (num1.value%4 != 0 || (num1.value%100 == 0 && num1.value%400 != 0)  ) {
        resIf.value = 365
    } else{
        resIf.value = 366
    }
}




let N = document.querySelector('.numForN')
let A = document.querySelector('.numForA')
let resFor = document.querySelector('.resultFor')

function taskFor12() {
    let multiply = 1
    let num = 1.1
    for (let index = 0; index < N.value; index++) {
        multiply *= num
        num += 0.1
    }
    resFor.value = multiply.toFixed(3)
}


function taskFor13() {
    let multiply = 0
    let num = -1
    for (let index = 1; index <= N.value; index++) {
        num = -num
        multiply += num*(1+0.1*index)
        
    }
    resFor.value = multiply.toFixed(1)
}


function taskFor14() {
    let num = 1
    let sum = 1
    for (let index = 1; index < N.value; index++) {
        num += 2 
        sum += num
    }
    resFor.value = sum
}

function taskFor15() {
    let multiply = 1
    for (let index = 0; index < N.value; index++) {
       multiply *= A.value 
    }
    resFor.value = multiply
}

function taskFor16() {
    for (let index = 1; index <= N.value; index++) {
       console.log(Math.pow(A.value, index))
    }
}

function taskFor17() {
    let sum = 1
    for (let index = 1; index <= N.value; index++) {
        sum += Math.pow(A.value, index)
    }
    resFor.value = sum
}

function taskFor18() {
    let sum = 1
    for (let index = 1; index <= N.value; index++) {
        sum += Math.pow(-1,index)*Math.pow(A.value, index)
    }
    resFor.value = sum
}

function taskFor19() {
    let factorial = 1
    for (let index = 1; index <= N.value; index++) {
        factorial*=index
    }
    resFor.value = factorial
}

function taskFor20() {
    let factorial = 1
    let sum = 0
    for (let index = 1; index <= N.value; index++) {
        factorial*=index
        sum +=factorial
    }
    resFor.value = sum
}

function taskFor21() {
    let factorial = 1
    let sum = 0
    for (let index = 1; index <= N.value; index++) {
        factorial*=index
        sum +=1/factorial
    }
    resFor.value = sum.toFixed(3)
}

function taskFor22() {
    let factorial = 1
    let sum = 1
    for (let index = 1; index <= N.value; index++) {
        factorial*=index
        sum +=Math.pow(A.value, index)/factorial
    }
    resFor.value = sum.toFixed(3)
}


let P = document.querySelector('.numWhileP')
let nWhile = document.querySelector('.numWhileN')
let aWhile = document.querySelector('.numWhileA')
let bWhile = document.querySelector('.numWhileB')
let resWhile = document.querySelector('.resultWhile')
function taskWhile16() {
    let count = 1
    let lenth = 10
    let s = 10
    while (s<=200) {
        count++
        lenth = lenth*(1+P.value/100)
        s += lenth
    }
    resWhile.value = count 
    console.log('s='+s)
}


function taskWhile17() {
    let num = +nWhile.value
    while (num > 0) {
        console.log(num%10)
        num = (num - num%10)/10
    }
    
}

function taskWhile18() {
    let count = 0
    let s = 0
    let num = +nWhile.value
    while (num > 0) {
        count++
        s +=num%10
        num = (num - num%10)/10
    }
    resWhile.value = s 
    console.log('count='+count)
}


function taskWhile19() {
    let s =""
    let num = +nWhile.value
    while (num > 0) {
        s +=String(num%10)
        num = (num - num%10)/10
    }
    resWhile.value = s 
}

function taskWhile20() {
    let count = 0
    let num = +nWhile.value
    while (num > 0) {
        if (num%10 == 2){
            count++
        }
        num = (num - num%10)/10
    }
    resWhile.value = Boolean(count) 
}

function taskWhile21() {
    let count = 0
    let num = +nWhile.value
    while (num > 0) {
        if (num%2 != 0){
            count++
        }
        num = (num - num%10)/10
    }
    resWhile.value = Boolean(count) 
}

function taskWhile22() {
    let count = 2
    let num = +nWhile.value
    let answer = true
    while (count < num ) {
        if (num%count == 0){
            answer = false
        }
        count++
    }
    resWhile.value = answer 
}

function taskWhile23() {
    let a = +aWhile.value
    let b = +bWhile.value
    while(a!=0 && b!=0) {
        if(a>b){
            a = a%b
        }
        else{
            b = b%a
        }
    }
    resWhile.value = a+b
}

function taskWhile24() {
    let num = +nWhile.value
    let f1 = 1
    let f2 = 1
    while(f2 < num) {
        f2 += f1
        f1 = f2 - f1
    }
    resWhile.value = Boolean(f2 == num)
}

function taskWhile25() {
    let num = +nWhile.value
    let f1 = 1
    let f2 = 1
    while(f2 <= num) {
        f2 += f1
        f1 = f2 - f1
    }
    resWhile.value = f2
}


function taskWhile26() {
    let num = +nWhile.value
    let f1 = 1
    let f2 = 1
    let c = 1
    let f
    while(f2 <= num) {
        f2 += f1
        f1 = f2 - f1
    }
    if(f1 != num){
        console.log ('Fk+1 = ' + f1 + ' fk-1 = ' + f2)
    }
    else{
        console.log ('Fk+1 = ' + (f2-f1) + ' fk-1 = ' + f2)
    }
}


function taskProc6(){
    function DigitCountSum(K, C, S){
        C = 0
        S = 0
        while(K > 0){
            C++
            S += K%10
            K = (K - K%10)/10
        }
        console.log('count=' + C + ' sum=' + S)
    }
    for (let index = 0; index < 5; index++) {
        let num = +prompt("enter number")
        DigitCountSum(num,0,0)
        
    }
}

function taskProc7(){
    function DigitCountSum(K){
        let s =""
        while (K > 0) {
            s +=String(K%10)
            K = (K - K%10)/10
        }
        console.log(s)
    }
    for (let index = 0; index < 5; index++) {
        let num = +prompt("enter number")
        DigitCountSum(num)
        
    }
}

function taskProc8() {
    function AddRightDigit(D, K) {
        K = K*10 + D
        console.log(K)
        return K
    }
    let num = +prompt('Enter K')
    let d1 = +prompt('Enter d1')
    AddRightDigit(d1, num)
    let d2 = +prompt('Enter d2')
    AddRightDigit(d2, num)
}

function taskProc9() {
    function AddLeftDigit(D, K) {
       let C = 0
       let N = K
        while(N > 0){
            C++
            N = (N - N%10)/10
        }
        K = K + D*(10**C)
        console.log(K)
        return K
    }
    let num = +prompt('Enter K')
    let d1 = +prompt('Enter d1')
    AddLeftDigit(d1, num)
    let d2 = +prompt('Enter d2')
    AddLeftDigit(d2, num)
}




// НЕ РАБОТАЕТ
// function taskProc10() {
//     function Swap(X, Y) {
//         let C = X
//         X = Y
//         Y = C
//         return X, Y
//     }
//     let A = +prompt('Enter a')
//     let B = +prompt('Enter b')
//     let C = +prompt('Enter c')
//     let D = +prompt('Enter d')
//     Swap(A, B)
//     Swap(C,D)
//     Swap(B,C)
//     console.log( A, B, C, D)  
// }
    // function taskProc11() {
    //     function Minmax(X,Y){
    //         if (X>Y) {
    //             X = X+Y
    //             Y = X-Y
    //             X = X-Y
    //         }
    //         return X, Y
    //     }
    //         let A = +prompt('Enter a')
    //         let B = +prompt('Enter b')
    //         let C = +prompt('Enter c')
    //         let D = +prompt('Enter d')
    //         Minmax(A,B);
    //         Minmax(C,D);
    //         Minmax(A,C);
    //         Minmax(B,D);
    //         console.log('min: ', A ,' max: ', D);
    // }


    function taskProc12() {
        function SortIt3(a, b, c) {
            let max = Math.max(a,b,c)
            let min = Math.min(a,b,c)
            let avr = a + b + c - max - min
            console.log(min, avr, max)
        }
        for (let index = 0; index < 2; index++) {
            let A = +prompt('Enter a')
            let B = +prompt('Enter b')
            let C = +prompt('Enter c')
            SortIt3(A, B, C)
        }
    }

    function taskProc24() {
        function Event(K) {
            return K%2
        }
        let count = 0
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            
            if(Event(num) == 0){
                count++
            }
           
        }
        console.log(count)
    }


    function taskProc25() {
        function IsSquare(k) {
            if ( k == ((k**(1/2))**2)){
                k = true
            }
            else{
                k = false
            }
            return k
        }
        let res = 0
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            if(IsSquare(num) == true){
                res++
            }
        }
        console.log(res)
    }


    function taskProc26(){
        function IsPower5(k) {
            let count1 = 0
            let count2 = 0
            while (k>1) {
                if(k%5 == 0){
                    count1++
                }
                k = k/5
                count2++
            }
            if (count1 == count2 && count1 != 0){
                k = true
            }
            else {
                k = false
            }
            return k
        }
        let res = 0
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            if(IsPower5(num) == true){
                res++
            }
        }
        console.log(res)
    }


    function taskProc27(){
        function IsPowerN(k, n) {
            let count1 = 0
            let count2 = 0
            while (k>1) {
                if(k%n == 0){
                    count1++
                }
                k = k/n
                count2++
            }
            if (count1 == count2 && count1 != 0){
                k = true
            }
            else {
                k = false
            }
            return k
        }
        let res = 0
        let st = +prompt('enter stepen')
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            if(IsPowerN(num, st) == true){
                res++
            }
        }
        console.log(res)
    }

    
    function taskProc28(){
        function IsPrime(k) {
            let count = 2
            let answer = true
            if(k==1){
                answer = false
            }
            else{
                while (count < k ) {
                    if (k%count == 0){
                        answer = false
                    }
                    count++
                    }
            }
            k = answer 
            return k
        }
        let res = 0
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            if(IsPrime(num) == true){
                res++
            }
            
        }
        console.log(res)
    }

    function taskProc29(){
        function DigitCount(k) {
            let count = 0
            while (k > 0) {
                count++
                k = (k - k%10)/10
            }
            k = count
            return k
        }
        for (let index = 0; index < 5; index++) {
            let num = +prompt('enter number')
            if(DigitCount(num) != 0){
                console.log(DigitCount(num))
            }
        }
    }

    // function taskProc30(){
    //     function DigitN(k,n) {
    //         let count = 0
    //         if(n > k){
    //             k = -1
    //         } else{
    //             while (k > 1) {
    //                 count++
    //                 if (count == n){
    //                     k = k%10
    //                 }
    //                 k = (k - k%10)/10
    //             }
                
    //         }
    //         console.log(k)
    //         return k
            
    //     }
    //     for (let index = 0; index < 5; index++) {
    //         let num = +prompt('enter number')
    //         for (let index1 = 1; index <= 5; index1++) {
    //             DigitN(num,index1)
    //         }
    //     }
    // }

    function taskProc31() {
        function IsPalindrome(k) {
            let s =""
            let n = k
            while (n > 0) {
                s +=String(n%10)
                n = (n - n%10)/10
            }
            if(Number(s) == k){
                k = true
            }
            else{
                k = false
            }
            return k
        }
        let res = 0
        for (let index = 0; index < 10; index++) {
            let num = +prompt('enter number')
            if(IsPalindrome(num) == true){
                res++
            }
        }
        console.log(res)
        
    }

    function taskProc32() {
        function DegToRad(d) {
            d = (d*Math.PI/180).toFixed(3)
            return d
        }
        for (let index = 0; index < 5; index++) {
            let num = +prompt('enter number')
            console.log('Deg to Rad =' + DegToRad(num))
            
        }
    }

    function taskProc33() {
        function RadToDeg(d) {
            d = (d*180/Math.PI).toFixed(3)
            return d
        }
        for (let index = 0; index < 5; index++) {
            let num = +prompt('enter number')
            console.log('Deg to Rad =' + RadToDeg(num))
            
        }
    }

    function taskProc34() {
        function Fact(n) {
            let factorial = 1
            for (let index = 1; index <= n; index++) {
                factorial*=index
            }
            n = factorial
            return n
        }
        for (let index = 0; index < 5; index++) {
            let num = +prompt('enter number')
            console.log('fact= ' + Fact(num))
            
        }
    }