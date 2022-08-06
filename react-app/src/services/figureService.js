
const figuresBaseUrl = 'http://localhost:3030/figures';


export const getAll = async()=>{


        const response = await fetch(`${figuresBaseUrl}/all`);
        //console.log(response);
        if(response.status!==200){
          throw new Error('DB is not working')
        }

        const result = await response.json();
    
        return result;
   
  
}

export const getFigure = async(figureId)=>{

    const response = await fetch(`${figuresBaseUrl}/details/${figureId}`);

    const result = await response.json();
    
    return result;
  
}

export const deleteFigureById = async(figureId)=>{
    const response = await fetch(`${figuresBaseUrl}/delete/${figureId}`);

    const result = await response.json();
    
    return result;
}

export const updateFigureById = async(figureId, figureData)=>{

    // const {firstName,secondName,familyName,yearBorn,yearDied,nickname,imageUrl,
    // occupation,description} = figureData

    try {
        const response = await fetch(`${figuresBaseUrl}/edit/${figureId}`,{
            method :'PUT',
            headers:{
                // 'Accept': 'application/json',
                'Content-Type':'application/json',
                // 'Access-Control-Allow-Origin' : '*'
        
            },
            body: JSON.stringify(figureData)
            
        })
        .then(response => response.json());
       // console.log(response);
        // if(response.status == 400){
        //     throw Error('Status code is 400, error occured')
        // }
        
    
        // const result = await response.json();
       
        //return response
    } catch (error) {
        console.log(error);
        throw Error(error)
    }
 
}

export const createFigure = async(figureData, token)=>{

try {
    
    const response = await fetch(`${figuresBaseUrl}/create`,{
        method: 'POST',
        headers:{
            'content-type':'application/json',
            'X-Authorization' : token
        },
        body: JSON.stringify(figureData)
    });
    if(response.ok == false || response.status!= 200){
        // ilie response.status === 400
       const errorCatched = await response.json();
     
       throw Error(errorCatched)
      // throw new Error(error.message)
    }
    try {
        const result = await response.json();
        return result;
    } catch (error) {
       throw Error(error)
    }
   
 
} catch (error) {
    //alert('Big Error allert');
    
    throw Error(error);
}


    } 

//do tuk
