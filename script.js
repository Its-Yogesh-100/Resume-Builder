
//  SKILL FIELD INPUT
function addNewSkillField(){

   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('skillField');

   newNode.classList.add("mt-2");

   newNode.setAttribute('rows',1);
   newNode.setAttribute("placeholder","Enter here");

   let skillOb=document.getElementById("skillf");
   let skillAddButtonOb=document.getElementById("skillButton");

   skillOb.insertBefore(newNode,skillAddButtonOb);
}




//WORK FIELD

function addNewWeField(){

   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('weField');

   newNode.classList.add("mt-2");

   newNode.setAttribute('rows',3);
   newNode.setAttribute("placeholder","Enter here");

   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddButtonOb);
}


// ACADEMIC QUALIFICATION FIELD
function addNewaqField(){

   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('eqField');

   newNode.classList.add("mt-2");

   newNode.setAttribute('rows',3);
   newNode.setAttribute("placeholder","Enter here");

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
}

// PROJECT FILED
function addNewPField(){

   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('PField');

   newNode.classList.add("mt-2");

   newNode.setAttribute('rows',2);
   newNode.setAttribute("placeholder","Enter here");

   let pOb=document.getElementById("PF");
   let pAddButtonOb=document.getElementById("PButton");

   pOb.insertBefore(newNode,pAddButtonOb);
}



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


   //PROJECTS

     let ps=document.getElementsByClassName('PField');

     let str3="";

     for(let e of ps)
     {
        str3=str3+`<li>${e.value}</li>`;
     }

     document.getElementById("pT").innerHTML=str3;


     //SETTING PROFILE PHOTO

     let file=document.getElementById('imgField').files[0];

     let reader=new FileReader();
     reader.readAsDataURL(file);

     reader.onloadend=function(){
     document.getElementById('imgTemplate').src=reader.result;};


     // SKILL FILED OUTPUT

     let skillp=document.getElementsByClassName('skillF');

     let str4="";

     for(let e of skillp)
     {
        str4=str4+`<li>${e.value}</li>`;
     }

     document.getElementById("ST").innerHTML=str4;



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

    
