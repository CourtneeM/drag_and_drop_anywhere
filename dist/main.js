(()=>{function e(){setTimeout((()=>this.classList.add("invicible","dragging")),0)}function t(e){this.classList.remove("invicible","dragging"),this.style.position="absolute",this.style.top=e.clientY-82+"px",this.style.left=e.clientX-35+"px"}[...document.querySelectorAll(".ball-container")].forEach((i=>{i.addEventListener("dragstart",e),i.addEventListener("dragend",t)})),document.querySelector("body").addEventListener("dragover",(function(e){e.preventDefault()}))})();