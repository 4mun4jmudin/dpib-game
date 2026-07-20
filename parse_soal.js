const fs = require('fs');

const content = fs.readFileSync('soal.md', 'utf8');
const lines = content.split('\n');

const materiData = [];
let currentMateri = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('### Materi ')) {
        if (currentMateri) materiData.push(currentMateri);
        currentMateri = { title: line.replace('### ', ''), text: '', question: '', options: [], correct: -1 };
    } else if (line.startsWith('**Soal')) {
        currentMateri.question = lines[++i].trim();
        while (i + 1 < lines.length && (lines[i+1].trim().startsWith('A.') || lines[i+1].trim().startsWith('B.') || lines[i+1].trim().startsWith('C.') || lines[i+1].trim().startsWith('D.'))) {
            i++;
            currentMateri.options.push(lines[i].trim());
        }
    } else if (line.startsWith('*Jawaban ')) {
        const char = line.match(/\*Jawaban [a-zA-Z]+: ([A-D])\*/);
        if (char) {
            currentMateri.correct = char[1].charCodeAt(0) - 65;
        }
    } else if (line.length > 0 && currentMateri && !currentMateri.question) {
        currentMateri.text += line + ' ';
    }
}
if (currentMateri) materiData.push(currentMateri);

let jsString = "const MATERI_DATA = [\n";
materiData.forEach(m => {
    jsString += "    {\n";
    jsString += "        title: " + m.title + ",\n";
    jsString += "        text: " + m.text.trim() + ",\n";
    jsString += "        question: " + m.question + ",\n";
    jsString += "        options: " + JSON.stringify(m.options) + ",\n";
    jsString += "        correct: " + m.correct + "\n";
    jsString += "    },\n";
});
jsString += "];\n";

fs.writeFileSync('materi_data.js', jsString);
console.log('Done parsing');
