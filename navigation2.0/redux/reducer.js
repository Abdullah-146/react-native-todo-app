import { Add_User, Delete_User } from "./action";



export default User = (state=[] , action) =>{

    switch(action.type){
        case (Delete_User):{
           return ([...state , action.payload.user])
        }
        case Add_User:{
            return (state.filter(user=>user.id!==action.payload.id))
        }
    }
     
}