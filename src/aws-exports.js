import axios from 'axios';
try { 
  //http://localhost:8081/aws-exports
  const list = axios.get(`http://localhost:8081/aws-exports`);
  // list.data = list variable values
  console.log(list);
  console.log('awsconfig');
  
} catch (e) {
  console.log(`getList`, e);
  if (e.response.status === 400) {
    this.error = e.response.data.message;
  }
}

const awsconfig =  {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1_uHLgZ60EN",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_uHLgZ60EN",
  "aws_user_pools_web_client_id": "4774udsvc03doptemq0l8iffgi"                                  
};
  export default awsconfig;