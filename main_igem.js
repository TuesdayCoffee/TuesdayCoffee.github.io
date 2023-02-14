var button1 = document.getElementById('button')
var luckyNumber
button1.addEventListener('click', function(e){
    random1 = Math.floor(Math.random()*10)
    button1.innerHTML = random1
    luckyNumber = parseInt(button1.textContent)
    // console.log('111')
})


function myFunction(){
    var input1 = document.getElementById("nnn").value
    var Num01 = parseInt(input1,10)
    if (!(Num01>0 && Num01<21)){
        randomNumber.innerHTML = "掷骰师发现你的数字不太对劲呢~"
    }
    else{
        var randomArr = [], times=0, sum = ""
        while(times<Num01){
            let temp = Math.floor(Math.random()*10);
            randomArr.push(temp)
            times+=1
            
        }
        randomNumber.innerHTML = randomArr
        var total = 0
        for(var i=0;i<randomArr.length;i++){
            total+=randomArr[i]
        }
        var ava = total/Num01
        zhajiNumber.innerHTML = parseInt(ava,10)

        if(luckyNumber>=ava){
            // console.log(ava)
            Welcome_text1.innerHTML = "祝贺你度过一个愉快的夜晚！"
        }
        else{
            Welcome_text2.innerHTML = '纸巾自备，祝你好运！'
        
        }
        
        }
        
    }

    
function myFunction2(){
    var input2 = document.getElementById("hhh").value
    var Num02 = parseInt(input2,10)
    function showNumber(){
        var tourist =Math.round(Math.random()*1000);
        document.getElementById("TouristNum").innerHTML=tourist;
    }
    setInterval(showNumber,Num02*1000)

}


