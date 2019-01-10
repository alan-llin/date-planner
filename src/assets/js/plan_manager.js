var counter = 0;
var curr_plan = -1;

function getCounter(){
  return counter;
}

function getCurrPlan() {
  return curr_plan;
}

function setCurrPlan(plan_num) {
  curr_plan = plan_num
}

function clearList() {
  counter = 0;
}

function addToPlan() {
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
  //console.log("Curr_plan:  "+getCurrPlan());
  //console.log("Curr_count: "+getCounter());
}
