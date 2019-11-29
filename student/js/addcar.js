$('#addCarForm').submit(function (event) {
      event.preventDefault();

      $.ajax({
          type: 'post',
          url : 'addCar',
          data : $('#addCarForm').serialize(),
          success : function (receivedData) {
              //$.get('cars');

              var recentlyadded = $("#recentlyaddedcars");

              recentlyadded.append(createCarsRow(receivedData[receivedData.length - 1]));

              //alert("Car succesfully added!");
          },
          error : function () {
              alert("A car with that name already exists!");
          }
      });
});