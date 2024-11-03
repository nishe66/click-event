// -----------------------bodytag---------------------------------------------
let body = document.getElementById("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.height = "100vh";
body.style.backgroundColor = "#EDF7FC";
// -----------------------heading tag---------------------------------------------
let headings = document.getElementsByTagName("h2")
   headings[0].style.textAlign = "center";
   headings[0].style.fontSize = "28px";
   headings[0].style.paddingTop = "20px";
// -----------------------mainDiv---------------------------------------------        
let mainDiv = document.getElementById("main-div");
   mainDiv.style.width = "500px";
   mainDiv.style.height = "400px";
   mainDiv.style.margin = "auto";
   mainDiv.style.boxShadow = "0px 0px 10px #6A6A6A";
   mainDiv.style.marginTop = "30px";
   mainDiv.style.position = "relative";

// -----------------------commentArea---------------------------------------------     
   
let commentArea = document.getElementById("comment-area");
  commentArea.style.position = "absolute";
  commentArea.style.top = "330px";
  commentArea.style.left = "30px";
  
 
let inputField = document.getElementById("input");
   inputField.style.padding = "10px 90px";
   inputField.style.borderRadius = "50px";
 
let sendBtn = document.getElementById("btn");
    sendBtn.style.padding = "8px 20px";
    sendBtn.style.borderRadius = "8px";
    sendBtn.style.marginLeft = "8px";

let commentSection = document.getElementById("div1")
   commentSection.style.marginLeft = "20px";
   commentSection.style.width = "450px";

// -----------------------click event---------------------------------------------    
  sendBtn.addEventListener("click", function(){
       let inputValue = inputField.value;
       if(inputValue !== ""){
           let newComment = document.createElement("div");
           newComment.className = "div2";
           newComment.innerText = inputValue;
           newComment.style.marginBottom = "5px";
           newComment.style.padding = "10px";
           newComment.style.borderRadius = "8px";
           newComment.style.backgroundColor = "#E1E1E1";
           commentSection.appendChild(newComment);
           inputField.value = "";
           
           
         }
     });
       
           