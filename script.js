function insertInput(){
    var watt = document.getElementById("Inputwatt").value
    var amount = document.getElementById("Inputamount").value
    var hour = document.getElementById("Inputhour").value

    var result1 = calculateProgram(watt, amount, hour)
    document.getElementById("result1").value = result1

}

function clearInput(){
    document.getElementById("Inputwatt").value = ""
    document.getElementById("Inputamount").value = ""
    document.getElementById("Inputhour").value = ""
    document.getElementById("result").value = ""
    document.getElementById("result1").value = ""
    document.getElementById("result2").value = ""
    document.getElementById("result3").value = ""
    document.getElementById("result4").value = ""
    document.getElementById("s_fee").value = ""
    document.getElementById("result5").value = ""
}

function calculateProgram (watt, amount, hour){
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