
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


function testUrl(url){
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {};
    xhttp.open("HEAD", url, true);
    xhttp.send();
  } catch (error) {
    console.error(`No Image: ${url}`);
  }
}