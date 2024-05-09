
export default class WorkspaceServices{

    async get_client_data(data){
        var response = null
        try{
            response = await fetch('http://127.0.0.1:8000/workspace-api/all-routes/', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + String(authTokens.access)
                }
            })
        }
        catch(err){
            response = null
            console.error(err);
        }
        return response
        }

        
    async get_client_data(data){
        var response = null
        try{
            response = await fetch('http://127.0.0.1:8000/api/email-automation/get-program-list/', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer' + String(authTokens.access)
                }
            })
        }
        catch(err){
            response = null
            console.error(err);
        }
        return response
        }
}
