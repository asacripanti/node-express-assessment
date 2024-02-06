const fs = require('fs');
const path = require('path');
const axios = require('axios');

if(process.argv.length !== 3){
    console.error('Error, fix arguments')
    process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', async(err, data) => {
    if(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }

    const urls = data.split('\n').filter(url => url.trim() !== '');

    for (const url of urls) {
        try {
          const response = await axios.get(url);
          const hostname = new URL(url).hostname;
    
          // Write the HTML content to a file named after the hostname
          const outputFilename = path.join(__dirname, `${hostname}.html`);
          fs.writeFileSync(outputFilename, response.data);
          console.log(`Saved ${hostname}.html`);
        } catch (error) {
          console.error(`Error fetching ${url}: ${error.message}`);
        }
      }

});