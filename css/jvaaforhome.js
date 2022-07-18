

  var nav =document.getElementById('nav');
 window.onscroll = function(){


    if(window.pageYoffset > 100){

    navigator.style.position = "fixed";
    nav.style.top = 0;

    }
    else{
      BaseAudioContext.style.position = "absolute";
      box.style.top =100;
    }
        
   
}

 // When the user scrolls down 20px from the top of the document, slide down the navbar

 var modal = document.getElementById("myModal");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }