$(document).ready(function(){

  /*$("[id^='sect']").each(function() {
    var index = this.id.toString()[this.id.toString().length-1];
    var h2text = $('h2', this).text();
    $("#mySidenav").append( "<a href='#" + this.id + "' id='" + index + "'>" + h2text + "</a>" );*/

   

      $("#section-container").load("sect1.html");
      $.each($(".menuButton"), function (mbIndex, mbValue) {
          
              $(mbValue).click(function (event) {
               
                  event.preventDefault();
                /*  $("#section-container").load($(this).attr("href"));
                  switch($(this).attr("href")){

                    case "sect1.html":
                        
                      break;
                    case "sect2.html":


                  }*/

                  if(!($(this).attr("href") == "sec1.html")){
                    
                      //console.log($("#section-container").load($(this).find('a').attr("href")));
                      $("#section-container").load($(this).attr("href"));
  
                  }
                  /*else{
                      open("index.html", "_self");
                  }*/
                  refreshGets();
              });
      });

      refreshGets();


});

function createCarsRow(car){

      var tr = document.createElement('tr');
      var nametd = document.createElement('td');
      var consumptiontd = document.createElement('td');
      var colortd = document.createElement('td');
      var manufacturertd = document.createElement('td');
      var availabletd = document.createElement('td');
      var yeartd = document.createElement('td');
      var horsepowertd = document.createElement('td');

      nametd.innerHTML = car.name;
      consumptiontd.innerHTML = car.consumption;      
      colortd.innerHTML = car.color;
      manufacturertd.innerHTML = car.manufacturer;
      availabletd.innerHTML = car.available;
      yeartd.innerHTML = car.year;
      horsepowertd.innerHTML = car.horsepower;
      

      tr.appendChild(nametd);
      tr.appendChild(consumptiontd);
      tr.appendChild(colortd);
      tr.appendChild(manufacturertd);
      tr.appendChild(availabletd);
      tr.appendChild(yeartd);
      tr.appendChild(horsepowertd);

      return tr;
}

function openNav() {
  
    document.getElementById("mySidenav").style.width = "400px";
    $(".menubutton").hide();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $(".menubutton").show();
}

function refreshGets(){
  $.get('manufacturers', function(manufacturers){
    //alert("Data: " + manufacturers);

    
    var man = document.getElementById("man");

    for(var i = 0; i < manufacturers.length; i++){

      

      var tr = document.createElement('tr');
      var nametd = document.createElement('td');
      var countrytd = document.createElement('td');
      var foundertd = document.createElement('td');

      nametd.innerHTML = manufacturers[i].name;
      countrytd.innerHTML = manufacturers[i].country;
      foundertd.innerHTML = manufacturers[i].founded;
      

      tr.appendChild(nametd);
      tr.appendChild(countrytd);
      tr.appendChild(foundertd);
      
      man.appendChild(tr);

    }

  });

  $.get('cars', function(cars){
    //alert("Data: " + manufacturers);

    
    var car = document.getElementById("car");

    for(var i = 0; i < cars.length; i++){

      var row = createCarsRow(cars[i]);

      car.appendChild(row);

    }

  });

  $.get('manufacturerNames', function(manufacturerNames){

      var carsselect = $(".man-select");
      for(var i = 0; i < manufacturerNames.length; i++){
      var manName = document.createElement('option');

      manName.innerHTML = manufacturerNames[i];
      manName.setAttribute("value", manufacturerNames[i]);
      
      carsselect.append(manName);
      }
  });
}