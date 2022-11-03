 
 let w1 =  document.querySelector('#w1');
 let w2 =  document.querySelector('#w2'); 
 let w3 =  document.querySelector('#w3'); 
 let w4 =  document.querySelector('#w4');  
 let w5 =  document.querySelector('#w5');
 let w6 =  document.querySelector('#w6');
 let w7 =  document.querySelector('#w7');
 let w8 =  document.querySelector('#w8');
 let w9 =  document.querySelector('#w9');
 let w10 =  document.querySelector('#w10');
 let w11 =  document.querySelector('#w11');
 let w12 =  document.querySelector('#w12');
 let w13 =  document.querySelector('#w13');
 let w14 =  document.querySelector('#w14');
 let w15 =  document.querySelector('#w15');
 let w16 =  document.querySelector('#w16');
 let w17 =  document.querySelector('#w17');
 let w18 =  document.querySelector('#w18');
 let w19 =  document.querySelector('#w19');
 let w20 =  document.querySelector('#w20');


 let wave = ()=>{
   

    let timefunction = (w,time,height)=>{

        setTimeout(()=>{
            w.style.height  = height + "%";
         },time);

    }

    

    timefunction(w1,100,100);
    timefunction(w2,200,100);
    timefunction(w3,300,100);
    timefunction(w4,400,100);
    timefunction(w5,500,100);
    timefunction(w6,600,100);
    timefunction(w7,700,100);
    timefunction(w8,800,100);
    timefunction(w9,900,100);
    timefunction(w10,1000,100);
    timefunction(w11,1100,100);
    timefunction(w12,1200,100);
    timefunction(w13,1300,100);
    timefunction(w14,1400,100);
    timefunction(w15,1500,100);
    timefunction(w16,1600,100);
    timefunction(w17,1700,100);
    timefunction(w18,1800,100);
    timefunction(w19,1900,100);
    timefunction(w20,2000,100);



    timefunction(w1,1100,5);
    timefunction(w2,1150,5);
    timefunction(w3,1200,5);
    timefunction(w4,1250,5);
    timefunction(w5,1300,5);
    timefunction(w6,1350,5);
    timefunction(w7,1400,5);
    timefunction(w8,1450,5);
    timefunction(w9,1500,5);
    timefunction(w10,1550,5);
    timefunction(w11,1600,5);
    timefunction(w12,1650,5);
    timefunction(w13,1700,5);
    timefunction(w14,1750,5);
    timefunction(w15,1800,5);
    timefunction(w16,1850,5);
    timefunction(w17,1900,5);
    timefunction(w18,1950,5);
    timefunction(w19,2000,5);
    timefunction(w20,2150,5);


     

 }


  let F1 = ()=>{
   setInterval(wave,1100);
    
  }

  let F2 = ()=>{
   setInterval(wave,1500);

  }

  let F3 = ()=>{
   setInterval(wave,700);

  }

  let refresh = ()=>{
   window.location.reload();
  }



