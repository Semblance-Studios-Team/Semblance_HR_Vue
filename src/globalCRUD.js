import axios from 'axios';
console.log('crud File accessed');

const crud = {};

//delete entity function
export async function deleteEntity(entityType, entityId, index, rowHtml) {
	try {
		console.log("'-----------------deleteEntity has been fired off---------------------'");
		console.log(entityType);
		console.log(entityId);
		console.log(index);
		console.log(rowHtml);


		switch(entityType) {
            case client_id:
              entityType = 'clients';
              break;
            case prospect_id:
              entityType = 'prospects';
              break;
            case consultants_id:
              entityType = 'consultants';
              break;
            default:
              throw new Error("Error: Contact your admin");
          }
		
// step 1: turn client section of URL to dynamic variable based on entity ID relation
// step 2: create a switch statement that handles returning the correct URL
// step 3: research which is runs better, switch or if/else
		await axios.delete(			
			// `https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${entityId}`)
			// `http://localhost:8081/clients/${entityId}`)
			`http://localhost:8081/${entityType}/${entityId}`)
		} 	catch (e) {
				console.log(`Delete Row Error =`, e);
				if (e.response.status === 400) {
			  		this.error = e.response.data.message;
				}
			}
};