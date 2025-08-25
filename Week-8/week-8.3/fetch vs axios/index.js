const axios = require ("axios");
// async function main(){
//    const response = await fetch("https://httpdump.app/dumps/7002da58-cc29-49be-8ea9-193c6ec2385a" , {
//       method: "POST",
//       headers : {
//          "Content-Type":"application/json",
//          "Authorization" : "Bearer 123"
//       },
//       body:JSON.stringify({
//          username:"yousuf",
//          password:"123457"
//       })
//    });
//    const data = await response.json();
//    console.log(data);
// }
// async function main(){
//    const response = await axios.post("https://httpdump.app/dumps/7002da58-cc29-49be-8ea9-193c6ec2385a",{data:{
//       username: "yousuf",
//       password: "123456",
//    }},{
//       headers: {
//          Authorisation : "Bearer 123",
//       },
//    });
//    console.log(response.data);
// }

async function main(){
   const response = await axios({
      url:"https://httpdump.app/dumps/dfa2daef-50af-4b78-8e75-b0372a25017b",
      method:"POST",
      data:{
         username: "yousuf",
         password: "13",
      },
      headers: {
         Authorisation : "Bearer 123",
      },
   });
   console.log(response.data);
}
main();