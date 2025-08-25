export function VideoCard(prop : any){
   return <div>
      <img src={prop.image} alt="image" className=" rounded-2xl pl-2 pt-2"/>
      <div className="grid grid-cols-12 pt-2 pl-2">
        <div className="col-span-1">
          <img  src={prop.thumbImage}alt="image"  className="rounded-full" />
        </div>
        <div className="col-span-11 pl-5">
          <div>
           {prop.title}
          </div>
          <div className="col-span-11  text-gray-400 text-base-100">
          {prop.author}
          </div>
          <div className="col-span-11   text-gray-400 text-base-100">
            {prop.veiws} | {prop.timestamp}
          </div>
          </div>
        
      </div>
   </div>
} 