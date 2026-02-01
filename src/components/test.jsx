import { useState } from "react"
import { createClient } from "@supabase/supabase-js";
import uploadFile from "../utils/mediaUpload";

const url = "https://wxplacdmsaawrqlbcrpf.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cGxhY2Rtc2Fhd3JxbGJjcnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5Njk5MTYsImV4cCI6MjA4NTU0NTkxNn0.-pGlFxqS6xd_hnC-STtUepXt1LyGXFb2eUmzO0_3VhM"





export default function TestPage() {

    const [file , setFile] = useState(null);

   async function handleUpload(){
       const url = await uploadFile(file)
       console.log(url);

    }
    return(
        <div className="w-full h-full flex justify-center items-center">
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0]);
            }}/>
            <button onClick={handleUpload} className="bg-red-900 p-2 text-white rounded-xl">Upload</button>

        </div>
    )
}



























// import { useState } from "react";

// export default function Test(){

//    const [count , setCount] = useState(0)
//    const [status, setStatus] = useState("🌞")

    
//     return (
//         <div className="w-full h-full flex flex-col justify-center items-center">
//             <div className="w-[400px] h-[300px] shadow-2xl flex justify-center items-center">
//                 <button className="w-[100px] h-[50px] bg-red-600 text-white" 
//                 onClick={()=>{
//                     setCount(count - 1)
//                 }}>
//                     Decrement
//                 </button>
//                 <h1 className="w-[100px] h-[50px] text-[30px] text-center">{count}</h1>
//                 <button className="w-[100px] h-[50px] bg-blue-600 text-white"
//                 onClick={()=>{
//                     setCount(count + 1)
//                 }}
//                 >
//                     Incriment
//                 </button>

//             </div>
//             <div className="w-[400px] h-[300px] shadow-2xl flex flex-col justify-center items-center">
//                 <span className="h-[30px] text-2xl font-bold">
//                     {status}
//                 </span>
//                 <div className="w-full h-[50px] flex justify-center">
//                     <button className="w-[100px] text-white h-full bg-red-600" 
//                     onClick={
//                         ()=>{
//                             setStatus("🌚")
//                         }
//                     }
//                     >Off</button>
//                     <button className="w-[100px] text-white h-full bg-green-600"
//                     onClick={
//                         ()=>{
//                             setStatus("🌞")
//                         }
//                     }
//                     >On</button>

//                 </div>
//             </div>
            
//         </div>
//     )
// }