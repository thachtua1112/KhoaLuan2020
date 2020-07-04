import axios from 'axios';
//import qs from 'qs';

const showUser = (a =[])=>{
  axios
      .get("http://localhost:4000/api/getAllProducts",{
       headers : {
         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
     }
      })
      .then((res)=>{
       a = res.data ;
      })
      .catch( (error) => {
        console.log(error);
      })
}
export default showUser;
