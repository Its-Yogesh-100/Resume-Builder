




// GENERATING CV


function generateCV() {

    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');
    
    nameT1.innerHTML=nameField;


    //DIRECT procedure

    //name
    document.getElementById('nameT2').innerHTML=nameField;

    //contact
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

     //FB
     document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

      //Instagram
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;

     //LinkedIn
     document.getElementById('linkedT').innerHTML=document.getElementById('linkdenField').value;


     //objective

     document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;


     //WORK EXPERIENCE

     let wes=document.getElementsByClassName('weField');

     let str="";

     for(let e of wes)
     {
        str=str+`<li>${e.value}</li>`;
     }

     document.getElementById("weT").innerHTML=str;


     //Academic Qualification

     let aqs=document.getElementsByClassName('eqField');

     let str1="";

     for(let e of aqs)
     {
        str1=str1+`<li>${e.value}</li>`;
     }

     document.getElementById("aqT").innerHTML=str1;


     //SETTING PROFILE PHOTO

     let file=document.getElementById('imgField').files[0];

     let reader=new FileReader();
     reader.readAsDataURL(file);

     reader.onloadend=function(){
     document.getElementById('imgTemplate').src=reader.result;};



     //hiding the form things

    // form hide after filling info
     document.getElementById('cv-form').style.display="none";

     // template
     document.getElementById('cv-template').style.display="block";



    }
     //print cv

     function printCV(){
        window.print();

     }

    
