let { MessageType } = require('@adiwajshing/baileys')
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Spet = 700
const Bmakanan = 550
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 4500
const Smythic = 1500
const Blegendary = 7500 
const Slegendary = 3000
const Sslime = 5
const Sgoblin = 500
const Swolf = 5000
const Sskeleton = 1000
const Bsampah = 10
const Ssampah = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy diamond 1*\n\n
List Barang:\n
*Barang   |  Harga beli*\n
Diamond:     ${Bdiamond}
Makanan: ${Bmakanan}
Common:     ${Bcommon}
Uncommon:  ${Buncommon}
Mythic:     ${Bmythic}
Legendary: ${Blegendary}
Sampah:     ${Bsampah}

*Makanan untuk feed pet*\n\n
*Barang   | Harga Jual*\n
Potion:       ${Spotion}
Diamond:     ${Sdiamond}
Common:     ${Scommon}
Uncommon:  ${Suncommon}
Mythic:     ${Smythic}
Legendary: ${Slegendary}
Slime: ${Sslime}
Goblin: ${Sgoblin}
Skeleton: ${Sskeleton}
Wolf: ${Swolf}
Pet: ${Spet}
Sampah:     ${Ssampah}
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE._data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'diamond':
                            if (global.DATABASE._data.users[m.sender].koin >= Bdiamond * count) {
                                global.DATABASE._data.users[m.sender].diamond += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                        
                        break
                    case 'makanan':
                            if (global.DATABASE._data.users[m.sender].koin >= Bmakanan * count) {
                                global.DATABASE._data.users[m.sender].makananpet += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Bmakanan * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE._data.users[m.sender].koin >= Bcommon * count) {
                                global.DATABASE._data.users[m.sender].common += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE._data.users[m.sender].koin >= Buncommon * count) {
                                global.DATABASE._data.users[m.sender].uncommon += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE._data.users[m.sender].koin >= Bmythic * count) {
                                global.DATABASE._data.users[m.sender].mythic += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE._data.users[m.sender].koin >= Blegendary * count) {
                                global.DATABASE._data.users[m.sender].legendary += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE._data.users[m.sender].koin >= Bsampah * count) {
                                global.DATABASE._data.users[m.sender].sampah += count * 1
                                global.DATABASE._data.users[m.sender].koin -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} koin`.trim(), m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Spotion * count
                            global.DATABASE._data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Scommon * count
                            global.DATABASE._data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Suncommon * count
                            global.DATABASE._data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Smythic * count
                            global.DATABASE._data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Slegendary * count
                            global.DATABASE._data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'slime':
                        if (global.DATABASE._data.users[m.sender].slime >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Sslime * count
                            global.DATABASE._data.users[m.sender].slime -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Slime dengan harga ${Sslime * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Slime kamu tidak cukup`.trim(), m)
                        break
                    case 'goblin':
                        if (global.DATABASE._data.users[m.sender].goblin >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Sgoblin * count
                            global.DATABASE._data.users[m.sender].goblin -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Goblin dengan harga ${Sgoblin * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Goblin kamu tidak cukup`.trim(), m)
                        break
                    case 'skeleton':
                        if (global.DATABASE._data.users[m.sender].skeleton >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Sskeleton * count
                            global.DATABASE._data.users[m.sender].skeleton -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Skeleton dengan harga ${Sskeleton * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Skeleton kamu tidak cukup`.trim(), m)
                        break
                    case 'wolf':
                        if (global.DATABASE._data.users[m.sender].wolf >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Swolf * count
                            global.DATABASE._data.users[m.sender].wolf -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Wolf dengan harga ${Swolf * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Scommon * count
                            global.DATABASE._data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'pet':
                        if (global.DATABASE._data.users[m.sender].pet >= count * 1) {
                            global.DATABASE._data.users[m.sender].pet -= count * 1
                            global.DATABASE._data.users[m.sender].koin += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} Pet Crate, dan anda mendapatkan ${Spet * count} koin`, m)
                        } else conn.reply(m.chat, `Pet Crate anda tidak cukup`, m)
                        break
                    case 'sampah':
                        if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE._data.users[m.sender].sampah -= count * 1
                            global.DATABASE._data.users[m.sender].koin += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} koin`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE._data.users[m.sender].diamond -= count * 1
                            global.DATABASE._data.users[m.sender].koin += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} koin`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'diamond':
                        if (global.DATABASE._data.users[m.sender].koin >= Bdiamond * count) {
                            global.DATABASE._data.users[m.sender].diamond += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                    
                    break
                case 'makanan':
                        if (global.DATABASE._data.users[m.sender].koin >= Bmakanan * count) {
                            global.DATABASE._data.users[m.sender].makananpet += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Bmakanan * count
                            conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                    
                    break
                case 'common':
                        if (global.DATABASE._data.users[m.sender].koin >= Bcommon * count) {
                            global.DATABASE._data.users[m.sender].common += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].koin >= Buncommon * count) {
                            global.DATABASE._data.users[m.sender].uncommon += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE._data.users[m.sender].koin >= Bmythic * count) {
                            global.DATABASE._data.users[m.sender].mythic += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE._data.users[m.sender].koin >= Blegendary * count) {
                            global.DATABASE._data.users[m.sender].legendary += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE._data.users[m.sender].koin >= Bsampah * count) {
                            global.DATABASE._data.users[m.sender].sampah += count * 1
                            global.DATABASE._data.users[m.sender].koin -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} koin`.trim(), m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Spotion * count
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Scommon * count
                        global.DATABASE._data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Suncommon * count
                        global.DATABASE._data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Smythic * count
                        global.DATABASE._data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Slegendary * count
                        global.DATABASE._data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'slime':
                    if (global.DATABASE._data.users[m.sender].slime >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Sslime * count
                        global.DATABASE._data.users[m.sender].slime -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Slime dengan harga ${Sslime * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Slime kamu tidak cukup`.trim(), m)
                    break
                case 'goblin':
                    if (global.DATABASE._data.users[m.sender].goblin >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Sgoblin * count
                        global.DATABASE._data.users[m.sender].goblin -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Goblin dengan harga ${Sgoblin * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Goblin kamu tidak cukup`.trim(), m)
                    break
                case 'skeleton':
                    if (global.DATABASE._data.users[m.sender].skeleton >= count * 1) {
                        global.DATABASE._data.users[m.sender].koin += Sskeleton * count
                        global.DATABASE._data.users[m.sender].skeleton -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Skeleton dengan harga ${Sskeleton * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Skeleton kamu tidak cukup`.trim(), m)
                    break
                case 'wolf':
                        if (global.DATABASE._data.users[m.sender].wolf >= count * 1) {
                            global.DATABASE._data.users[m.sender].koin += Swolf * count
                            global.DATABASE._data.users[m.sender].wolf -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Wolf dengan harga ${Swolf * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                        break
                case 'pet':
                    if (global.DATABASE._data.users[m.sender].pet >= count * 1) {
                        global.DATABASE._data.users[m.sender].pet -= count * 1
                        global.DATABASE._data.users[m.sender].koin += Spet * count
                        conn.reply(m.chat, `Succes menjual ${count} Pet Crate, dan anda mendapatkan ${Spet * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Pet Crate anda tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE._data.users[m.sender].sampah -= count * 1
                        global.DATABASE._data.users[m.sender].koin += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE._data.users[m.sender].diamond -= count * 1
                        global.DATABASE._data.users[m.sender].koin += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} koin`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = true
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler
