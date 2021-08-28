function getUserdata(){
    fetch('http://localhost:3000/users').then((response)=>{
        if(response.status===200)
            return response.json();
    }).then((users)=>{
        console.log(users);
        if(users.length>0){
            var temp="";
            users.forEach(element => {
                temp+="<tr>";
                temp+="<td>"+element.id+"</td>";
                temp+="<td>"+element.first_name+"</td>";
                temp+="<td>"+element.last_name+"</td>";
                temp+="<td>"+element.email+"</td>";
                temp+="<td>"+element.gender+"</td>";
                temp+="<td>"+element.ip_address+"</td>";
                
            })
            document.getElementById("users").innerHTML=temp;
        }
            
        
              
       // appendData(users);
    }).catch((error)=>{
       // e.preventDefault();
        console.log(error);
    })
}
function addEvent(){
    event.preventDefault();
    console.log("calling add event")
    let f_name=document.getElementById("first_name").value;
    let l_name=document.getElementById('last_name').value;
    let email_id=document.getElementById('email').value;
    let gen=document.getElementById('gender').value;
    let ip_add=document.getElementById('ip_address').value;
    console.log(f_name)

var userData={
        "first_name":f_name,
        "last_name":l_name,
        "email":email_id,
        "gender":gen,
        "ip_address":ip_add
   }

    fetch('http://localhost:3000/users',{
        method:'POST',
        body:JSON.parse(JSON.stringify(userData)),
        
        headers:{
            "Content-Type":"appliction/json"
        }

    }).then((response)=>{
        if(response.status===201){
            console.log("record added")
            getUserdata();
        }

    }).catch((error)=>{
        console.log(error)
    })

}



getUserdata();
