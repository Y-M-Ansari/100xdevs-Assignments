interface User {
   readonly dbId :number,
   email: string,
   userId: number,
   startTrail : () => string,
   getCoupon : (couponName : string) =>  number ,
}

const hitesh : User = {
   dbId:22,
   email: "yousuf@gmail.com",
   userId: 2211,
   startTrail: () =>{
      return "trail started"
   },
   getCoupon : (name : string)  =>{
      return 10;
   }
}