const jwt = require('jsonwebtoken');
function decodeToken(token){
  const decoded = jwt.decode(token);
  console.log("Token Decoded ",decoded);
  if(decoded){
    return true;
  }else{
    return false;
  }
}

console.log(decodeToken('eyJhbGciOiJIUzI1NiJ9.eW91c3VmQGdtYWlsLmNvbQ.SHf3x2ZzFShVkqj3pz3xrKKP-UPQI_6vhxHgh9JmyYw'))
