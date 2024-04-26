// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
 
  let data=await fs.promises.readdir("blogdata")
  let allBlogs=[];
  for(let ind=0;ind<data.length;ind++){
    const item=data[ind];
    const myfile=await fs.promises.readFile(('blogdata/'+item),"utf-8")
    try {
      const parsedData = JSON.parse(myfile); // Parse myfile as JSON
      allBlogs.push(parsedData);
    } catch (error) {
      console.error(`Error parsing JSON in file ${item}:`, error);
    }
  }

  res.status(200).json(allBlogs);
}

