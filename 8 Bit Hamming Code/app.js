function veriYaz()
{
    var str = document.getElementById("text").value
    
    for(i=0,x=0;i<str.length,x<str.length;i++,x++)
    {
        document.getElementsByClassName("box")[i].innerHTML = str.split('')[i];
    }
    
}


function bitwise()
{
    var str = document.getElementById("text").value;

    var parity1 = (str[1]^str[3]^str[4]^str[6]^str[7]);
    var parity2 = (str[1]^str[2]^str[4]^str[5]^str[7]);
    var parity3 = (str[0]^str[4]^str[5]^str[6]);
    var parity4 = (str[0]^str[1]^str[2]^str[3]);

    document.getElementById("parity1").innerHTML=parity1;
    document.getElementById("parity2").innerHTML=parity2;
    document.getElementById("parity3").innerHTML=parity3;
    document.getElementById("parity4").innerHTML=parity4;
}


function check()
{
    var str = document.getElementById("text").value;
    
    var hamCode = str[0]+str[1]+str[2]+str[3]+document.getElementById("parity4").innerHTML+str[4]+str[5]+str[6]+document.getElementById("parity3").innerHTML+str[7]+document.getElementById("parity2").innerHTML+document.getElementById("parity1").innerHTML;

    var check1 = (hamCode[1]^hamCode[3]^hamCode[5]^hamCode[7]^hamCode[9]^hamCode[11]);
    var check2 = (hamCode[1]^hamCode[2]^hamCode[5]^hamCode[6]^hamCode[9]^hamCode[10]);
    var check3 = (hamCode[0]^hamCode[5]^hamCode[6]^hamCode[7]^hamCode[8]);
    var check4 = (hamCode[0]^hamCode[1]^hamCode[2]^hamCode[3]^hamCode[4]);

    document.getElementById("checkBox1").innerHTML=check4;
    document.getElementById("checkBox2").innerHTML=check3;
    document.getElementById("checkBox3").innerHTML=check2;
    document.getElementById("checkBox4").innerHTML=check1;
}



function hata()
{
    var x= Math.floor(Math.random() * (8 - 0) + 0);
    
    if (document.getElementsByClassName("box")[x].innerHTML==0)
    {
        String.prototype.replaceAt = function(index, replacement) 
        {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length);
        }

        var mainText = document.getElementById("text").value;
        
        var replacedText = mainText.replaceAt(x, "1"); 

        document.getElementById("text").value=replacedText;

        var element = document.getElementsByClassName("box")[x];
        element.style.backgroundColor = "#101010"
        element.style.color = "#FFFFFF"
    }

    if(document.getElementsByClassName("box")[x].innerHTML==1)
    {
        String.prototype.replaceAt = function(index, replacement) 
        {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length);
        }

        var mainText = document.getElementById("text").value;
        
        var replacedText = mainText.replaceAt(x, "0"); 

        document.getElementById("text").value=replacedText;

        var element = document.getElementsByClassName("box")[x];
        element.style.backgroundColor = "#3D3D3D"
        element.style.color = "#FFFFFF"
    }

    var str = document.getElementById("text").value;

    for(i=0;i<str.length;i++)
    {
        document.getElementsByClassName("box")[i].innerHTML = str.split('')[i];
    }

}