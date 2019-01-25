function getCounter(){
  return counter;
}

function getCurrPlan() {
  return curr_plan;
}

function setCurrPlan(plan_num) {
  curr_plan = plan_num;
}

function clearList() {
  counter = 0;
}

function createPlanDetails(plan_num, business){
  $('#details-div').append(
    $('<div>',{
      "class":"details-item",
      "id":"details-div_"+plan_num,
      "text":business.name,
      "style":"margin-top:50px;margin-bottom:50px;border-style:solid;border-width:thin;border-color:#FFFFFF;"
    }).data("business_object", business)
  );
}

function updatePlanDetails(plan_num, business){
  $("#details-div_"+plan_num).text(business.name).data("business_object", business);
}

function addToPlan() {
  if (counter < 5){
    counter += 1;
    $("#app-page").find('#todolist').append(
      $('<li>',{
        "class":"plan-item",
        "id":"plan-item_"+counter,
      })
      .append(
        $("<a />",{
          "text":counter,
          "href":"#",
        })
      )
    );
    setCurrPlan(counter);
    console.log("New plan: "+getCurrPlan());
  //console.log("Curr_plan:  "+getCurrPlan());
  //console.log("Curr_count: "+getCounter());
  }
}
