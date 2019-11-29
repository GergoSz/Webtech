
$('#confirm').submit(function(e) {
    
    e.preventDefault();
  
    //var car =  + $(this);
    //alert($(this).serialize());
    document.cookie = $(this).serialize();
  
    $.get('manufacturer', function(getcars){
  
      var carstable = document.getElementById("cars-table");
  
      $("#cars-table > tr").remove();
  
      for(var i = 0; i < getcars.length; i++){
  
        var row = createCarsRow(getcars[i]);
        
        carstable.appendChild(row);
  
      }
  
    });
  
  });