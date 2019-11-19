$(document).ready(function(){
  $("[id^='sect']").each(function() {
    var index = this.id.toString()[this.id.toString().length-1];
    var h2text = $('h2', this).text();
    $("#mySidenav").append( "<a href='#" + this.id + "' id='" + index + "'>" + h2text + "</a>" );
  });

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

  $.get('manufacturerNames', function(manufacturerNames){

      var carsselect = $("#cars-select");
      for(var i = 0; i < manufacturerNames.length; i++){
      var manName = document.createElement('option');

      manName.innerHTML = manufacturerNames[i];
      manName.setAttribute("value", manufacturerNames[i]);
      
      carsselect.append(manName);
      }
  });





});

$('#confirm').submit(function(e) {
    
  e.preventDefault();

  var car =  + $(this);
  //alert($(this).serialize());
  document.cookie = $(this).serialize();

  $.get('manufacturer', function(getcars){

    var carstable = document.getElementById("cars-table");

    $("#cars-table > tr").remove();

    for(var i = 0; i < getcars.length; i++){

      

      var tr = document.createElement('tr');
      var nametd = document.createElement('td');
      var consumptiontd = document.createElement('td');
      var colortd = document.createElement('td');
      var manufacturertd = document.createElement('td');
      var availabletd = document.createElement('td');
      var yeartd = document.createElement('td');
      var horsepowertd = document.createElement('td');

      nametd.innerHTML = getcars[i].name;
      consumptiontd.innerHTML = getcars[i].consumption;      
      colortd.innerHTML = getcars[i].color;
      manufacturertd.innerHTML = getcars[i].manufacturer;
      availabletd.innerHTML = getcars[i].available;
      yeartd.innerHTML = getcars[i].year;
      horsepowertd.innerHTML = getcars[i].horsepower;
      

      tr.appendChild(nametd);
      tr.appendChild(consumptiontd);
      tr.appendChild(colortd);
      tr.appendChild(manufacturertd);
      tr.appendChild(availabletd);
      tr.appendChild(yeartd);
      tr.appendChild(horsepowertd);
      
      carstable.appendChild(tr);

    }

  });

});

function openNav() {
  
    document.getElementById("mySidenav").style.width = "400px";
    $(".menubutton").hide();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $(".menubutton").show();
}