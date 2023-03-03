const secondHand= document.querySelector('.second-hand');
const minutesHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');

function setDate(){
    const now= new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    if(secondsDegrees===90){
        secondHand.style.transition="0s";
    }
    else{
        secondHand.style.transition="all 0.05s";
    };
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    const minutes=now.getMinutes();
    const minutesDegrees=((minutes/60)*360)+90;
    if(minutesDegrees===90){
        minutesHand.style.transition="0s";
    }
    else{
        minutesHand.style.transition="all 0.05s";
    };
    minutesHand.style.transform=`rotate(${minutesDegrees}deg)`   
    

    const hour=now.getHours();
    const hourDegrees=((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`
}

setInterval(setDate,1000)