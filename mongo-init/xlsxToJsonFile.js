const {xlsxToJsonStream} = require('../src/utility/xlsx');
const {Transform} = require('stream');
const {createWriteStream} = require('fs');
class XlsxToJsonFile{
convertXlsxTOJSonFile(sourceFile,destinationFile){
    return new Promise((resolve,reject)=>{
        try {
            let dataAvailable = false;
            const readableStream = xlsxToJsonStream(__dirname+'/'+sourceFile, {
                encodeType: 'string'
            });
            const transformSteam = new Transform({ writableObjectMode: true })
            let writableStream = createWriteStream(__dirname+'/'+destinationFile)
            transformSteam._transform = (obj, e, cb) => {
                console.log("inside transform ");
                cb(null, `${dataAvailable ? ',' : '['}` + JSON.stringify(obj))
                dataAvailable = true;
            };
            transformSteam._flush = (cb)=>{
                cb(null,']')
            }
            readableStream.pipe(transformSteam).pipe(writableStream);
            writableStream.on('finish',()=>{
                console.log("finish");
                resolve(__dirname+'/'+destinationFile)
            })
        } catch (error) {
            reject(error.toString())
        }
    })
}
}

module.exports = new XlsxToJsonFile();