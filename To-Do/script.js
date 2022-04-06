function getAndUpdate()
{
    console.log("Updating List....");
    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;
    
    if(localStorage.getItem('itemsJson')==null)
    {
        itemsJsonArray = [];
        itemsJsonArray.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
        // title.innerHTML = "";
        // desc.innerHTML = "";
    }
    else
    {
        console.log("Updating");
        itemsJsonArraystr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
        itemsJsonArray.push([title,desc]);  
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
        // title.innerHTML = "";
        // desc.innerHTML = "";
    }
    update();
}
function update()
{    
    if(localStorage.getItem('itemsJson')==null)
    {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
        // title.innerHTML = "";
        // desc.innerHTML = "";
    }
    else
    {
        console.log("Updating");
        itemsJsonArraystr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
        // title.innerHTML = "";
        // desc.innerHTML = "";
    }
    
    let tableBody = document.getElementById("tableBody");
    let str = "";
    
    itemsJsonArray.forEach((element,index) => {
        
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><buttton type="submit" class="btn-sm btn-primary" onclick = "deleted(${index})">Delete</buttton></td>
        </tr>`      
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click" , getAndUpdate);
update();

function deleted(itemIndex)
{
    console.log("Deleted",itemIndex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    update();
}

function clearStorage()
{
    if(confirm("Do you really want to clear the list"));
    {
        console.log("Clearing list");
        localStorage.clear();
        update();
    }
}