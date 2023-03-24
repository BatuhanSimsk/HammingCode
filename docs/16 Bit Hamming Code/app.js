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

    var parity1 = (str[0]^str[2]^str[4]^str[5]^str[7]^str[9]^str[11]^str[12]^str[14]^str[15]);
    var parity2 = (str[2]^str[3]^str[5]^str[6]^str[9]^str[10]^str[12]^str[13]^str[15]);
    var parity3 = (str[0]^str[1]^str[5]^str[6]^str[7]^str[8]^str[12]^str[13]^str[14]);
    var parity4 = (str[5]^str[6]^str[7]^str[8]^str[9]^str[10]^str[11]);
    var parity5 = (str[0]^str[1]^str[2]^str[3]^str[4]);


    document.getElementById("parity1").innerHTML=parity1;
    document.getElementById("parity2").innerHTML=parity2;
    document.getElementById("parity3").innerHTML=parity3;
    document.getElementById("parity4").innerHTML=parity4;
    document.getElementById("parity5").innerHTML=parity5;
}


function check()
{
    var str = document.getElementById("text").value;


    
    var hamCode = str[0]+str[1]+str[2]+str[3]+str[4]+document.getElementById("parity5").innerHTML+str[5]+str[6]+str[7]+str[8]+str[9]+str[10]+str[11]+document.getElementById("parity4").innerHTML+str[12]+str[13]+str[14]+document.getElementById("parity3").innerHTML+str[15]+document.getElementById("parity2").innerHTML+document.getElementById("parity1").innerHTML;


    var check1 = (hamCode[0]^hamCode[2]^hamCode[4]^hamCode[6]^hamCode[8]^hamCode[10]^hamCode[12]^hamCode[14]^hamCode[16]^hamCode[18]^hamCode[20]);
    var check2 = (hamCode[2]^hamCode[3]^hamCode[6]^hamCode[7]^hamCode[10]^hamCode[11]^hamCode[14]^hamCode[15]^hamCode[18]^hamCode[19]);
    var check3 = (hamCode[0]^hamCode[1]^hamCode[6]^hamCode[7]^hamCode[8]^hamCode[9]^hamCode[14]^hamCode[15]^hamCode[16]^hamCode[17]);
    var check4 = (hamCode[6]^hamCode[7]^hamCode[8]^hamCode[9]^hamCode[10]^hamCode[11]^hamCode[12]^hamCode[13]);
    var check5 = (hamCode[0]^hamCode[1]^hamCode[2]^hamCode[3]^hamCode[4]^hamCode[5]);


    document.getElementById("checkBox1").innerHTML=check5;
    document.getElementById("checkBox2").innerHTML=check4;
    document.getElementById("checkBox3").innerHTML=check3;
    document.getElementById("checkBox4").innerHTML=check2;
    document.getElementById("checkBox5").innerHTML=check1;


    
}



function hata()
{
    var x= Math.floor(Math.random() * (16 - 0) + 0);
    
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