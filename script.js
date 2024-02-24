function menuNavbar(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById('close-icon').style.animationName = "example"
    document.getElementById('close-icon').style.animationDuration = "1s"
}

function closeNavbar(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "flex";
    document.getElementById('menu-icon').style.animationName = "example"
    document.getElementById('menu-icon').style.animationDuration = "1s"
}

function elcType1(){
    document.getElementById('type1').style.display = "block";
    document.getElementById('type2').style.display = "none";
    ["less_result","less_result1","less_result2","less_result3","less_result4","less_result5","less_result6","less_result7","less_result8","less_s_fee","less_result9"].forEach(id => {
        document.getElementById(id).value = ""
    });
}

function elcType2(){
    document.getElementById('type1').style.display = "none";
    document.getElementById('type2').style.display = "block";
    ["result","result1","result2","result3","result4","s_fee","result5"].forEach(id => {
        document.getElementById(id).value = ""
    });
}

function insertInput1(){
    var watt = document.getElementById("Inputwatt1").value;
    var amount = document.getElementById("Inputamount1").value;
    var hour = document.getElementById("Inputhour1").value;

    var less_result1 = calculateProgram1 (watt, amount, hour);
    document.getElementById("less_result1").value = less_result1;

}

function clearInput1(){
    ["Inputwatt1","Inputamount1","Inputhour1","less_result","less_result1","less_result2","less_result3","less_result4","less_result5","less_result6","less_result7","less_result8","less_s_fee","less_result9"].forEach(id => {
        document.getElementById(id).value = ""
    });
}

function calculateProgram1 (watt, amount, hour){
    let value_day = (watt * amount / 1000) * hour
    let value_month = (value_day * 30).toFixed(0)
    document.getElementById("less_result").value = value_day
    
    let sum = 0

    let unit1 = 2.3488
    let unit2 = 2.9882
    let unit3 = 3.2405 
    let unit4 = 3.6237
    let unit5 = 3.7171
    let unit6 = 4.2218
    let unit7 = 4.4217

    if(value_month <= 15){
        sum = value_month * unit1
        document.getElementById("less_result2").value = sum.toFixed(2);
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat(sum + 8.19).toFixed(2);
        ["less_result3","less_result4","less_result5","less_result6","less_result7","less_result8"].forEach(id => {
            document.getElementById(id).value = ""
        });
    } else if (value_month <= 25){
        sum = (value_month - 15) * unit2;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = sum.toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + sum + 8.19).toFixed(2);
        ["less_result4","less_result5","less_result6","less_result7","less_result8"].forEach(id => {
            document.getElementById(id).value = ""
        });
    } else if (value_month <= 35){
        sum = (value_month - 25) * unit3;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = (10 * unit2).toFixed(2)
        document.getElementById("less_result4").value = sum.toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + (10 * unit2) + sum + 8.19).toFixed(2);
        ["less_result5","less_result6","less_result7","less_result8"].forEach(id => {
            document.getElementById(id).value = ""
        });
    } else if (value_month <= 100){
        sum = (value_month - 35) * unit4;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = (10 * unit2).toFixed(2)
        document.getElementById("less_result4").value = (10 * unit3).toFixed(2)
        document.getElementById("less_result5").value = sum.toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + (10 * unit2) + (10 * unit3) + sum + 8.19).toFixed(2);
        ["less_result6","less_result7","less_result8"].forEach(id => {
            document.getElementById(id).value = ""
        });
    } else if (value_month <= 150){
        sum = (value_month - 100) * unit5;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = (10 * unit2).toFixed(2)
        document.getElementById("less_result4").value = (10 * unit3).toFixed(2)
        document.getElementById("less_result5").value = (65 * unit4).toFixed(2)
        document.getElementById("less_result6").value = (sum + 0.001).toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + (10 * unit2) + (10 * unit3) + (65 * unit4) + (sum + 0.001) + 8.19).toFixed(2);
        ["less_result7","less_result8"].forEach(id => {
            document.getElementById(id).value = ""
        });
    } else if (value_month <= 400){
        sum = (value_month - 150) * unit6;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = (10 * unit2).toFixed(2)
        document.getElementById("less_result4").value = (10 * unit3).toFixed(2)
        document.getElementById("less_result5").value = (65 * unit4).toFixed(2)
        document.getElementById("less_result6").value = (50 * unit5 + 0.01).toFixed(2)
        document.getElementById("less_result7").value = sum.toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result8").value = ""
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + (10 * unit2) + (10 * unit3) + (65 * unit4) + (50 * unit5 + 0.001) + sum + 8.19).toFixed(2);
    } else {
        sum = (value_month - 400) * unit7;
        document.getElementById("less_result2").value = (15 * unit1).toFixed(2)
        document.getElementById("less_result3").value = (10 * unit2).toFixed(2)
        document.getElementById("less_result4").value = (10 * unit3).toFixed(2)
        document.getElementById("less_result5").value = (65 * unit4).toFixed(2)
        document.getElementById("less_result6").value = (50 * unit5 + 0.01).toFixed(2)
        document.getElementById("less_result7").value = (250 * unit6).toFixed(2)
        document.getElementById("less_result8").value = sum.toFixed(2)
        document.getElementById("less_s_fee").value = 8.19;
        document.getElementById("less_result9").value = parseFloat((15 * unit1) + (10 * unit2) + (10 * unit3) + (65 * unit4) + (50 * unit5 + 0.001) + (250 * unit6) + sum + 8.19).toFixed(2);
    }
    
    return value_month
}

function insertInput2(){
    var watt = document.getElementById("Inputwatt2").value;
    var amount = document.getElementById("Inputamount2").value;
    var hour = document.getElementById("Inputhour2").value;

    var result1 = calculateProgram2 (watt, amount, hour);
    document.getElementById("result1").value = result1;

}

function clearInput2(){
    ["Inputwatt2","Inputamount2","Inputhour2","result","result1","result2","result3","result4","s_fee","result5"].forEach(id => {
        document.getElementById(id).value = ""
    });
}

function calculateProgram2 (watt, amount, hour){
    let value_day = (watt * amount / 1000) * hour
    let value_month = (value_day * 30).toFixed(0)
    document.getElementById("result").value = value_day

    let sum = 0

    let unit1 = 3.2484
    let unit2 = 4.2218
    let unit3 = 4.4217

    if (value_month <= 150){
        sum = value_month * unit1
        document.getElementById("result2").value = sum.toFixed(2)
        document.getElementById("result3").value = ""
        document.getElementById("result4").value = ""
        document.getElementById("s_fee").value = "24.62"
        document.getElementById("result5").value = parseFloat(document.getElementById("result2").value)+24.62
        
    } else if (value_month <= 400){
        sum = (value_month - 150) * unit2
        document.getElementById("result2").value = (150 * unit1).toFixed(2)
        document.getElementById("result3").value = sum.toFixed(2)
        document.getElementById("result4").value = ""
        document.getElementById("s_fee").value = "24.62"
        document.getElementById("result5").value = (parseFloat(document.getElementById("result2").value) + parseFloat(document.getElementById("result3").value)+24.62).toFixed(2)
    } else {
        sum = (value_month - 400) * unit3
        document.getElementById("result2").value = (150 * unit1).toFixed(2)
        document.getElementById("result3").value = (250 * unit2).toFixed(2)
        document.getElementById("result4").value = sum.toFixed(2)
        document.getElementById("s_fee").value = "24.62"
        document.getElementById("result5").value = (parseFloat(document.getElementById("result2").value) + parseFloat(document.getElementById("result3").value) + parseFloat(document.getElementById("result4").value)+24.62).toFixed(2)
    }

    return value_month
}