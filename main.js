const CONFIG = {
    InTitle: 'Vậy sáng mai tớ chở cậu đi ăn sáng nhé^^ ',
    FBLink:'http://m.me/cuongtran5656 ',
    ConfirmBtnText: 'Yes',
    PopTitle: 'hi chào cậu',
    PopText: 'cậu lại vô trang tớ à ?',
    PopConfim: 'đúng ròi á ' ,
    MessText: 'nhắn tin với tớ nhé hì^^ ',
   }
   
   $("#btnYes, #btnNo, #ED").hide();
   
   function stpopup(){
      Swal.fire({
         title: CONFIG.PopTitle,
         text: CONFIG.PopText ,
         confirmButtonText: CONFIG.PopConfim,
         imageUrl: 'img/cuteCat.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
         backdrop: `
            rgba(0,0,123,0.4)
            url("img/nyan-cat.gif")
            left top
            no-repeat
                  `    
       }).then((result) => {
          play();
          $("#btnYes, #btnNo, #ED").show(2000);
       })
   }
   
   function yesClick() 
    {
      Swal.fire({
         title: CONFIG.InTitle,
         text: CONFIG.MessText,
         confirmButtonText: CONFIG.ConfirmBtnText,
         imageUrl: 'img/cuteCat.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
     }).then((result) => {
      if (result.isConfirmed) {
            window.location = CONFIG.FBLink;
      }
     })
   }
     
   function noHover()
    {
       var x = Math.floor(Math.random() * window.innerWidth);
       var y = Math.floor(Math.random() * window.innerHeight);
       document.getElementById("btnNo").style.left = x + "px";
       document.getElementById("btnNo").style.top = y + "px";
       document.getElementById("btnNo").style.transition = "0.3s";
   }
   
    function play() {
      var audio = new Audio('music.mp3');
      audio.play();
   }