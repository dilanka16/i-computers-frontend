import { createClient } from "@supabase/supabase-js";

const url = "https://wxplacdmsaawrqlbcrpf.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cGxhY2Rtc2Fhd3JxbGJjcnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5Njk5MTYsImV4cCI6MjA4NTU0NTkxNn0.-pGlFxqS6xd_hnC-STtUepXt1LyGXFb2eUmzO0_3VhM"

const supabase = createClient(url , key);

export default function uploadFile(file) {
    return new Promise(
        (resolve , reject)=>{
            const timeStamp = Date.now();
            const fileName = timeStamp + "_" + file.name;
            supabase.storage.from("images").upload(fileName, file, {
            cashecontrol: "3600",
            upsert: false,

        }).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }
        ).catch((error)=>{
            reject(error);
        })



        }
    )
}