$("body").on("click", "#topo-btn", function(){
  console.log("clicked topo")
  $("#topo-img").toggle("display");
})
$("body").on("click", "#road-btn", function(){
  console.log("clicked road")
  $("#road-img").toggle("display");
})
$("body").on("click", "#satellite-btn", function(){
  $("#satellite-img").toggle("display");
})