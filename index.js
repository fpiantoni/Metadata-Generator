const fs = require("fs");
const fs_extra = require("fs-extra");
const metadata_count = 15 //Replace with your value
let count = 0


fs_extra.emptyDirSync("./INTOLERABLE")

while (count < metadata_count)  {

  let count_increment = count + 1

  const metas = {
    "name":  `INTOLERABLE #${count_increment}`,
    "description": "Replace with Your collection description",
    "image": ``, //You can replace this dynamic URL with a single image URL. EX: 'ipfs://your_cid/image.png'
    "coverImage": '', 
  };

  fs.writeFileSync(
    `INTOLERABLE/${count_increment+'.json'}`,
    JSON.stringify(metas, null, 2)
  );

  console.log(`${count_increment+'.json'} Created!`);
  count++;
};