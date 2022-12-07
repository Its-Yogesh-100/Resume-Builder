




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

     let wes=document.getElementById('weField');

     let str=''


    
}