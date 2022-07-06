const fs = require('fs');
const path = require('path');

// función para leer archivos
const readFile = async (fileName) => {
  try {
    const data = await fs.promises.readFile(path.join(__dirname,`${fileName}`, 'utf-8'));
    console.log(data)
    const parseData = JSON.parse(data);
    console.log(parseData)
    return parseData
  } catch (error) {
    console.log(`No se pudo leer el archivo: ${error}`)
  }
}

// función para escribir archivos
const writeFile = async (fileName, data) => {
  try {
    await fs.promises.writeFile(path.join(__dirname, `${fileName}`), JSON.stringify(data))
    console.log('Data guardada')
  } catch (error) {
    console.log(`No se pudo es escribir el archivo: ${error} `)
  }
}

module.exports = {
  readFile,
  writeFile
}