const fs = require("fs");
function addNotes(req, res) {
  const note = req.body.note;

  if (!fs.existsSync('notes.txt')) {
    fs.writeFileSync('notes.txt', note);
    res.send(`File Created Successfully! \n First Note added: ${note}`);
  }

  else {
    fs.appendFileSync('notes.txt', `\n${note}`);
    res.send(
      `New Note added: \n ${note} \n
      All Notes: \n ${fs.readFileSync('notes.txt', 'utf8')}`
    );
  }
  
}


module.exports = {
  addNotes,
};
