var HoursElm=document.getElementById('hour'),
    MinutesElm=document.getElementById('minutes'),
    SecondesElm=document.getElementById('secondes'),
    ampm=document.getElementById('ampm');

var CurrentDate;

var CurrentHour, CurrentMinute, CurrentSeconde;

setInterval(()=>{
    CurrentDate=new Date;

    CurrentHour=CurrentDate.getHours();
    CurrentMinute=CurrentDate.getMinutes();
    CurrentSeconde=CurrentDate.getSeconds();
    console.log(CurrentHour);
    if (CurrentHour>=0 && CurrentHour<=11){
        ampm.innerHTML='AM';
    }else{
        ampm.innerHTML='PM';
    }

    if( CurrentHour>=13 && CurrentHour<=23){
        CurrentHour-=12;
    }
    if(CurrentHour==0){
        CurrentHour=12;
    }
    console.log(CurrentHour);


   CurrentHour=CurrentHour<10 ? "0"+CurrentHour : CurrentHour;
   CurrentMinute=CurrentMinute<10 ? "0"+CurrentMinute : CurrentMinute;
   CurrentSeconde=CurrentSeconde<10 ? "0"+CurrentSeconde : CurrentSeconde;

    HoursElm.innerHTML=CurrentHour;
    MinutesElm.innerHTML=CurrentMinute;
    SecondesElm.innerHTML=CurrentSeconde;

},1000);