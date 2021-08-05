import axios from 'axios';
import { components } from 'aws-amplify-vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';


//delete entity function
export async function deleteEntity(entityType, entityId) {
	try {		
		await axios.delete(			
			// `https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/${entityType}/${entityId}`)
			// `http://localhost:8081/${entityType}/${entityId}`)
			`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/${entityType}/${entityId}`)
		} 	catch (e) {
				console.log(`Delete Row Error =`, e);
				if (e.response.status === 400) {
			  		this.error = e.response.data.message;
				}
			}
};


//update entity function
export async function updateEntity(entityType, entityId, formValues) {

         //admin user 
         // attach current admin user to form 
          await Auth.currentUserInfo()
          .then(info => {
            var userEmail = info.attributes.email;
            var userName = info.username;
            formValues.lastEditedBy = userName;
            //add edit timestamp
            var timestamp = Number(new Date());
            const date = new Date(timestamp).toDateString();
            formValues.timeStampEdit = date;
         });
         //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/${entityType}/${entityId}
         //http://localhost:8081/${entityType}/${entityId}
        await axios.put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/${entityType}/${entityId}`, formValues)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });

};
