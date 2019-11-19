const messages = []
// { id: 0, text: "string of stuff", time: DATETIME()}
let id = 0;

module.exports = {

  read(req, res) {
    res.status(200).send(messages)
  },

  create(req, res) {
    let {text, time}  = req.body
    let message = {
      id,
      text,
      time
    }
    messages.push(message)
    ++id
    res.status(201).send(messages)
  },

  update(req, res) {
    const{ text } = req.body;
    let updateId = req.params.id;
    const mesIndex = messages.findIndex( mes => mes.id === +updateId)
    let message = messages[mesIndex]

    messages[mesIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(202).send(messages)
  },

  delete(req, res) {
    let index = null;
    messages.forEach( (mes, i) => {
      if ( mes.id === +req.param.id ) index = i
    })
    messages.splice(index, 1)
    res.status(200).send(messages)
  },

}