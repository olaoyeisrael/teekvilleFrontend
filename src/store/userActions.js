

export const updateUser = (userDetails) =>{
    return ({
        type: "UPDATE_USER",
        payload: userDetails

    })
        
}

export const loadUser = () =>{
    return async(dispatch)=>{
        const token = localStorage.getItem('token')
        try{
            const response = await fetch('http://localhost:3000/api/auth/profile', {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json();
            dispatch({
                type: "GET_USER",
                payload: data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}



