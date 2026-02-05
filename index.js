var weather = prompt(`
  Select Weather:
  1- winter
  2- summer
  3- autumn
  4-rainbow
  5-rain
  `).toLowerCase();

if (weather === "winter") {
  document.writeln(`

     <div class="d-flex align-items-center justify-content-center" style=" 
   height: 100vh;
   width: 100vw;
   background-image:url(./breathtaking-view-forest-covered-with-snow-sunset-norway_181624-37864.avif);
   background-repeat:no-repeat ;
   background-size: cover;
   overflow: hidden;
   ">

  <div class="card" style="width: 18rem;">
  <img src="https://giffiles.alphacoders.com/493/49360.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Winter</h5>
    <p class="card-text">Winter is the coldest of the four seasons, occurring between autumn and spring</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
 
    
    
    
    `)
} else if (weather === "summer") {
  document.writeln(`
    
    <div class="d-flex align-items-center justify-content-center" style=" 
   height: 100vh;
   width: 100vw;
   background-image:url(./summer.jpg);
   background-repeat:no-repeat ;
   background-size: cover;
   overflow: hidden;
   ">

  <div class="card" style="width: 18rem;">
  <img src="https://www.picgifs.com/graphics/s/summer/graphics-summer-966448.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">summer</h5>
    <p class="card-text">Summer is the warmest and brightest season of the year, arriving between spring and autumn</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
</div> 

    
    `)
  }if (weather === "autumn") {
  document.writeln(`
  
     <div class="d-flex align-items-center justify-content-center" style=" 
   height: 100vh;
   width: 100vw;
   background-image:url(./park-sunset_1160-774.avif);
   background-repeat:no-repeat ;
   background-size: cover;
   overflow: hidden;
   ">

  <div class="card" style="width: 18rem;">
  <img src="https://giffiles.alphacoders.com/183/18397.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Autmn</h5>
    <p class="card-text">Autumn, often referred to as fall, is the enchanting transitional season that bridges the gap between the scorching heat of summer and the biting chill of winter.</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
</div>
     
 
    
    
    
    `)
} else if (weather === "rainbow") {
  document.writeln(`
    
    <div class="d-flex align-items-center justify-content-center" style=" 
   height: 100vh;
   width: 100vw;
   background-image:url(./rainbow.webp);
   background-repeat:no-repeat ;
   background-size: cover;
   overflow: hidden;
   ">

  <div class="card" style="width: 18rem;">
  <img src="https://png.pngtree.com/thumb_back/fh260/background/20241018/pngtree-serene-seascape-featuring-a-rainbow-captivating-over-calm-ocean-waters-image_16408104.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Rainbow</h5>
    <p class="card-text">A rainbow is a captivating natural phenomenon that paints a vibrant, multicoloured arc across the sky, typically appearing after a rain shower when the sun begins to shine again</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
</div>
   

    
    `)
  } else if (weather === "rain") {
  document.writeln(`
    
    <div class="d-flex align-items-center justify-content-center" style=" 
   height: 100vh;
   width: 100vw;
   background-image:url(./weather-effects-composition_23-2149853295.avif);
   background-repeat:no-repeat ;
   background-size: cover;
   overflow: hidden;
   ">

  <div class="card" style="width: 18rem;">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUycXhyaThyaW1oeWo2OThhaWw4d3I0aXZtZWFuNXVsaTVxeGljNjhxZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PspWBxW4y3Kfu/200.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Rain</h5>
    <p class="card-text">Rain is one of nature’s most vital and beautiful phenomena, occurring when water vapor condenses into heavy droplets that fall under the force of gravity</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
</div> 


    
    `) 
  }