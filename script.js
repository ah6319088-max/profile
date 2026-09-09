 let moon_icon = document.querySelector("#icon"); 
        let ins_icon=document.querySelector(".ins")
        let ins_text=document.querySelector(".ins span");
        let skillslink=document.querySelector("a[href='#skills']");
        let projectlink=document.querySelector("a[href='#project']");
        let links = document.querySelectorAll("a"); // يجيب كل الروابط
        let skill_img=document.querySelectorAll(".imgs .img");
        let watch_bacground=document.querySelectorAll(" .project-imgs .img");
        
        let ismoon=false
        moon_icon.addEventListener("click",()=>{
            if(ismoon==false){
                moon_icon.src="imgs/sun-solid-full.svg"
               moon_icon.style.filter = "invert(1)";
     document.body.style.background = "#232323"; //تغيرر لون الصفحة الى  اللون الاسود
     document.body.style.color = "white";  //تغيير لون الخط الى الابيض

     skillslink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المهرات ماذا سيحدث؟
        skillslink.style.border="2px solid gold"   //سوف يتغير لونه  الاطار الى اللون الذهي
        skillslink.style.color="gold"               //والخط الى اللون الذهبي
     })
     skillslink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
        skillslink.style.border=""   //سيعود الاطار الى لونه الطبيعي
        skillslink.style.color="white" // ولون الخط سوف يصبح ابيض
     })

        projectlink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المشاريع ماذا سيحدث؟
        projectlink.style.border="2px solid gold"   //سوف يتغير لونه  الاطار الى اللون الذهي
        projectlink.style.color="gold"               //والخط الى اللون الذهبي
     })
        projectlink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
        projectlink.style.border=""   //سيعود الاطار الى لونه الطبيعي
        projectlink.style.color="white" // ولون الخط سوف يصبح ابيض
     })


     
     links.forEach(link=>{
         link.style.color="white"  //تغيير جمييع الروابظ الى اللون الابيض
          function updateIconColor() { 
  if (window.innerWidth <= 600) { 
    ins_icon.style.color = "#d62976"; // وردي في الهاتف  
    
  } else {
    ins_icon.style.color = "white";   // أسود في الكمبيوتر
    ins_text.style.color = "white";
  }
  }
               moon_icon.addEventListener("click", updateIconColor);
        })
        
    skill_img.forEach(img=>{
           img.style.border="2px solid white" //تغيير اطار الصور الخاصة بالمهارات الى اللاون الابيض
    }) 
    watch_bacground.forEach(img=>{
        img.style.color="#131010"
    })
    localStorage.setItem("them","dark")
    ismoon=true
   }else{
                document.body.style.background="#e1e1e1";
                document.body.style.color="black";
                moon_icon.src="imgs/moon-solid-full.svg";
               moon_icon.style.filter = "grayscale(100%) brightness(0)";
                
                links.forEach(link=>{
                link.style.color="black"
                skillslink.style.color="#4a76ee";  //تغيير جمييع الروابظ الى اللون الابيض
                projectlink.style.color="#4a76ee";
                 function updateIconColor() {
                if (window.innerWidth <= 600) { 
              // إذا العرض أقل من 768px (وضع الهاتف)
              ins_icon.style.color = "#d62976"; // أي لون تريده
               } else{
                ins_text.style.color="white"
                ins_icon.style.color = "white";
               }
               
             }
               moon_icon.addEventListener("click", updateIconColor);
              
            
                })
              
                skillslink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المهرات ماذا سيحدث؟
                skillslink.style.border="2px solid black"   //سوف يتغير لونه  الاطار الى اللون الذهي
                skillslink.style.color="black"               //والخط الى اللون الذهبي
             })
             skillslink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
                skillslink.style.border=""   //سيعود الاطار الى لونه الطبيعي
                skillslink.style.color="#4a76ee" // ولون الخط سوف يصبح ابيض
             })

                projectlink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المشاريع ماذا سيحدث؟
                projectlink.style.border="2px solid black"   //سوف يتغير لونه  الاطار الى اللون الذهي
                projectlink.style.color="black"               //والخط الى اللون الذهبي
             })
                projectlink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
                projectlink.style.border=""   //سيعود الاطار الى لونه الطبيعي
                projectlink.style.color="#4a76ee" // ولون الخط سوف يصبح ابيض
             })


                skill_img.forEach(img=>{
             img.style.border="2px solid black" //تغيير اطار الصور الخاصة بالمهارات الى اللاون الابيض
              }) 
             watch_bacground.forEach(img=>{
              img.style.color="#131010"
              })
                ismoon=false
                localStorage.setItem("them","light")
            }
        })
        window.addEventListener("load",()=>{
            let savetthem=localStorage.getItem("them")
            if(savetthem==="dark"){
                 moon_icon.src="imgs/sun-solid-full.svg"
               moon_icon.style.filter = "invert(1)";
     document.body.style.background = "#232323"; //تغيرر لون الصفحة الى  اللون الاسود
     document.body.style.color = "white";  //تغيير لون الخط الى الابيض

     skillslink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المهرات ماذا سيحدث؟
        skillslink.style.border="2px solid gold"   //سوف يتغير لونه  الاطار الى اللون الذهي
        skillslink.style.color="gold"               //والخط الى اللون الذهبي
     })
     skillslink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
        skillslink.style.border=""   //سيعود الاطار الى لونه الطبيعي
        skillslink.style.color="white" // ولون الخط سوف يصبح ابيض
     })

        projectlink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المشاريع ماذا سيحدث؟
        projectlink.style.border="2px solid gold"   //سوف يتغير لونه  الاطار الى اللون الذهي
        projectlink.style.color="gold"               //والخط الى اللون الذهبي
     })
        projectlink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
        projectlink.style.border=""   //سيعود الاطار الى لونه الطبيعي
        projectlink.style.color="white" // ولون الخط سوف يصبح ابيض
     })


     
     links.forEach(link=>{
         link.style.color="white"  //تغيير جمييع الروابظ الى اللون الابيض
         if (window.innerWidth <= 600){
             ins_icon.style.color = "#d62976";
         }else{
            ins_icon.style.color = "white";   // اللون الأسود في الكمبيوتر
            ins_text.style.color = "white";
         }
        })
        
    skill_img.forEach(img=>{
           img.style.border="2px solid white" //تغيير اطار الصور الخاصة بالمهارات الى اللاون الابيض
    }) 
    watch_bacground.forEach(img=>{
        img.style.color="#131010"
    })
    localStorage.setItem("them","dark")
    ismoon=true

            }else{document.body.style.background="#e1e1e1";
                document.body.style.color="black";
                moon_icon.src="imgs/moon-solid-full.svg";
               moon_icon.style.filter = "grayscale(100%) brightness(0)";
                
                links.forEach(link=>{
                link.style.color="black"
                skillslink.style.color="#4a76ee";  //تغيير جمييع الروابظ الى اللون الابيض
                projectlink.style.color="#4a76ee";
                 if (window.innerWidth <= 600){
                     ins_icon.style.color = "#d62976";
                 }else{
                    ins_icon.style.color = "white";   // اللون الأسود في الكمبيوتر
                    ins_text.style.color = "white";
                 }
                 
              
            
                })
              
                skillslink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المهرات ماذا سيحدث؟
                skillslink.style.border="2px solid black"   //سوف يتغير لونه  الاطار الى اللون الذهي
                skillslink.style.color="black"               //والخط الى اللون الذهبي
             })
             skillslink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
                skillslink.style.border=""   //سيعود الاطار الى لونه الطبيعي
                skillslink.style.color="#4a76ee" // ولون الخط سوف يصبح ابيض
             })

                projectlink.addEventListener("mouseover",()=>{ // عندما نمرر الماوس على زر رابط المشاريع ماذا سيحدث؟
                projectlink.style.border="2px solid black"   //سوف يتغير لونه  الاطار الى اللون الذهي
                projectlink.style.color="black"               //والخط الى اللون الذهبي
             })
                projectlink.addEventListener("mouseout",()=>{ // عندما ابعد الماوس عن زر المشاريع ماذا سيحدث ؟
                projectlink.style.border=""   //سيعود الاطار الى لونه الطبيعي
                projectlink.style.color="#4a76ee" // ولون الخط سوف يصبح ابيض
             })


                skill_img.forEach(img=>{
             img.style.border="2px solid black" //تغيير اطار الصور الخاصة بالمهارات الى اللاون الابيض
              }) 
             watch_bacground.forEach(img=>{
              img.style.color="#131010"
              })
                ismoon=false

            }
        })