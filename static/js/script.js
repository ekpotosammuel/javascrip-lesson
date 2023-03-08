//challenge 1 age and date
function ageInDays(){
    var birthYaer = prompt("what's your birth year?");
    var birthInDays = (2022 - birthYaer) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("you're" + " " + birthInDays + " " + "days old")
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1)
    // console.log(birthInDays);
}

function reset(){
    document.getElementById('flex-box-result').removeChild(document.getElementById('ageInDays'))
    // document.getElementById('flex-box-result').removeChild(document.getElementById('flex-box-result'))
    // document.getElementById('ageInDays').removeChild();
}
