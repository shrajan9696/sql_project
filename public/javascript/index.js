let content = document.getElementById("take_input");

document.getElementById("insert").addEventListener("click",function(){
    //  alert("hi");
   
    content.style.display = "block";
})



    //  alert("hi");
   
    function update_content(roll)
    {
        content.style.display = "block";
    // let roll = document.getElementById("update").value;
    console.log(roll);
    

    }
    


function myfunction()
{
    content.style.display = "none";
    document.getElementById("content_submit").submit();
}

function Discard()
{
    content.style.display = "none"; 
}