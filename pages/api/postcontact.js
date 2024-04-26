import * as fs from 'fs';



export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      const data=await fs.promises.readdir(`contactdata`)
      let len=data.length;
      fs.writeFile(`./contactdata/${len+1}.json`,JSON.stringify(req.body),()=>{

      })

      res.status(200).json(req.body);

    } 
    else {
      // Handle any other HTTP method
    }
  }