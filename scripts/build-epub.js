let glob = require("glob");
let Streampub = require('streampub');
let fs = require('fs');

glob("build/static/**/+(*.js|*.css)", function (er, files) {
    let epub = new Streampub({title: 'Sample epub'});
    epub.setAuthor('Foo User');
    epub.pipe(fs.createWriteStream('build/sample.epub'));

    let readableStream = fs.createReadStream('build/index.html');
    readableStream.setEncoding('utf8');

    console.log("Files to include in the epub archive:");
    console.log(files);
    files.forEach((file) => {
        let shortFile = file.replace("build/", "");
        epub.write(Streampub.newFile(shortFile, fs.createReadStream(file)));
    });

    epub.write(Streampub.newChapter('Chapter 1', readableStream, 0, 'chapter-1.xhtml', 'application/xhtml+xml'));

    epub.end();
});
