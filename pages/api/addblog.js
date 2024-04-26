import * as fs from 'fs';



export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      const data=await fs.promises.readdir(`blogdata`)
      fs.writeFile(`./blogdata/${req.body.slug}.json`,JSON.stringify(req.body),()=>{

      })

      res.status(200).json(req.body);

    } 
    else {
      // Handle any other HTTP method
    }
  }