const xlsx = require('xlsx');
const { createWriteStream, readFileSync, } = require('fs');
const { Transform } = require('stream');
class Xlsx {
    xlsxToJsonStream(file, options = {}) {
        try {
            let { sheets, raw = false, header, encodeType } = options;
            const wb = xlsx.readFile(file, {
                sheets
            });
            if (!sheets) {
                sheets = wb.SheetNames[0]
            }
            return xlsx.stream.to_json(wb.Sheets[sheets], {
                raw, header, type: encodeType
            });
        } catch (error) {
            console.log("error in processing file", error);
        }
    }
}
const xls = new Xlsx();
module.exports = xls

