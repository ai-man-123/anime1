let handler = async (m) => {
  
let violet =  './src/photo/holo.png'
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 Only Overlord 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Season I 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Season II 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-ii/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Season III 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-iii/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Ple Ple Pleiades (Special) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-ple-ple-pleiades/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Ple Ple Pleiades II (ONA) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-ple-ple-pleiades-2/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Anime Overlord Ple Ple Pleiades Nazarick Saidai no Kiki (OVA) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-ple-ple-pleiades-nazarick-saidai-no-kiki/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Movie Overlord  I : Fushisha no Ou 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-movie-1-fushisha-no-ou/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Movie Overlord  II : Shikkoku no Eiyuu 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/overlord-movie-2-shikkoku-no-eiyuu/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Overlord 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/overlord/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Novel Overlord 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://bakadame.com/light-novel-overlord-bahasa-indonesia/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  await conn.sendFile(m.chat, violet, 'holo.png', teks.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `Link Anime Dan Manga Overlord Series`,
          }
      }
    } ,m)
      }
handler.command = /^ovlord$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler
