function getUserdata(){
    fetch('http://localhost:3000/users').then((response)=>{
        if(response.status===200)
            return response.json();
    }).then((users)=>{
        console.log(users)
       // appendData(users);
    }).catch((error)=>{
        console.log(error);
    })
}
function addUser(){
    events.preventDefault();
    //console.log('calling ')
    let first_name=document.getElementById('first_name').Value;
    let last_name=document.getElementById('last_name').Value;
    let gender=document.getElementById('gender').Value;
    let email=document.getElementById('email').Value;
    let newUser={
        "first_name":first_name,
        "last_name":last_name,
        "gender":gender,
        "email":email
    }
    
    fetch('http://localhost:3000/users',{
        "method":"POST",
        "body":JSON.stringify(newUser),
        "headers":{
            "Content-Type":"application/json"

        }
    }).then((response)=>{
        if(response.status===201)
          console.log('Record is added to db.json file')

    }).catch((error)=>{
        console.log(error)

    })

}
getUserdata();
