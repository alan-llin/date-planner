function addToPlan() {
  $("#app-page").find('#todolist').append(
    $('<li>',{
      "class":"plan-item"
    })
    .append(
      $("<a />",{
        "text":"test",
        "href":"#",
      })
    )
  );
}
