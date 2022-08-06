const usersBaseUrl = 'http://localhost:3030/users';
//service

export const register = async(email,
username,
password,
repeatPassword,)=>{

   

    
        const response = await fetch(`${usersBaseUrl}/register`,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(email,
                username,
                password,
                repeatPassword,)
        });
      
        const result = await response.json();
        if(response.ok){
            return result;
        } else {
            throw result
        }
          
        
         
    
}

export const login = async (email,password)=>{
   
   const res = await fetch(`${usersBaseUrl}/login`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(email,password)
    })
    const jsonResult = await res.json();
    if(res.ok){
        return jsonResult;
    } else {
        throw jsonResult
    }
}

export const logout = async()=>{

   const response = await fetch(`${usersBaseUrl}/logout`);

   const result = await response.json();

   return result

}