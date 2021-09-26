let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.DATABASE.data.users).filter(user => user[1].banned)

    m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Daftar Chat Terbanned 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
┃ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┃ ${jid}
`.trim()).join('\n') : ''}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Daftar User Terbanned 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
┃ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┃ ${jid}
`.trim()).join('\n') : ''}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim())
}
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = true
handler.register = true
module.exports = handler