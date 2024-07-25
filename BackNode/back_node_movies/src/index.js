import app from "./app.js";
import axios from "axios";
import { sequelize } from "./database/database.js";
import Entry from "./models/entry.js";

// async function main(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         app.listen(4000);
//       } catch (error) {
//         console.error('Nose Pudo conectar:', error);
//       }
// }

// main();

async function fetchDataAndSave() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    
    await sequelize.sync({ force: true });

    const response = await axios.get(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    );
    const entries = response.data.entries;
    
    for (const entry of entries) {
      await Entry.create({
        title: entry.title,
        description: entry.description,
        programType: entry.programType,
        imageUrl: entry.images["Poster Art"]?.url,
        releaseYear: entry.releaseYear,
      });
    }

    console.log("Data saved successfully!");
    app.listen(4000);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    //await sequelize.close();
  }
}

fetchDataAndSave();
