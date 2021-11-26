let handler = function (m) {
  //ini hanyalah contoh, jangan di uncomment_-
  //Example this.sendContact(m.chat, '6285718146858', 'farel', m)
  this.sendContact(m.chat, '60102810046', '×Aiman*͘⁴̅⁰͍⁴̵〆*', m)
}

handler.command = /^(owner|creator)$/i
handler.group = false
handler.register = false

module.exports = handler
