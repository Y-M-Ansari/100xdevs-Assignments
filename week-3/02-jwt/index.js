const jwt = require ('jsonwebtoken');
const z = require ('zod');
const jwtPassword = 'secret';

const emailSchema= z.string().email();
const passwordSchema = z.string().min(6);

function createToken(username,password){
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  console.log(usernameResponse);
  console.log(passwordResponse);
  if(!usernameResponse.success || !passwordResponse.success){
    return null;
  }
  const token = jwt.sign(username,jwtPassword)
  return token;
}

const ans = createToken('yousuf@gmail.com', '123321')
console.log(ans);

const verifiedToken = jwt.verify('eyJhbGciOiJIUzI1NiJ9.eW91c3VmQGdtYWlsLmNvbQ.SHf3x2ZzFShVkqj3pz3xrKKP-UPQI_6vhxHgh9JmyYw' , jwtPassword)

console.log(verifiedToken);