const jwt = require('jsonwebtoken');
function verifyToken(token,secretKey){
  try{
    const tokenverified = jwt.verify(token,secretKey);
    console.log('verified token =',tokenverified);
    return true;
  }catch(err){
    console.log('error occurred')
    return false;
  }
}

console.log(verifyToken('eyJhbGciOiJIUzI1NiJ9.eW91c3VmQGdtYWlsLmNvbQ.SHf3x2ZzFShVkqj3pz3xrKKP-UPQI_6vhxHgh9JmyY' , 'secret'))
