const fs = require('fs');

// función para leer archivos
const readFile = async (fileName) => {
  try {
    const data = await fs.promises.readFile(`${__dirname}/db/${fileName}`, 'utf-8');
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
    await fs.promises.writeFile(`${__dirname}/db/${fileName}`, JSON.stringify(data))
    console.log('Data guardada')
  } catch (error) {
    console.log(`No se pudo es escribir el archivo: ${error} `)
  }
}


module.exports = {
  readFile,
  writeFile
}