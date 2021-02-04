
function ignoreCaseSearch(obj, search){
  return obj[Object.keys(obj).find(key => key.toLowerCase() === search.toLowerCase())] || null;
}

function optionsFromArray(arr){
  var optList = []
  if (!arr)
    return optList

  for(const item of arr){
    var optionElement = document.createElement("option");
    optionElement.value = item
    optionElement.innerHTML = item
    optList.push(optionElement)
  }
  return optList;
}