import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
try{
let locale = 'en'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pp = './media/menus/pic.jpg'
let vn='./media/anya.mp3'
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId: `${usedPrefix}creadora`},
{title: lenguajeGB['smsLista3'](), rowId: `${usedPrefix}donar`},
{title: lenguajeGB['smsLista4'](), rowId: `${usedPrefix}ping`},
{title: lenguajeGB['smsLista5'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista6'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista7'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeGB['smsLista8'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeGB['smsLista9'](), rowId: `${usedPrefix}términos`, description: '\n'}
]}]

let listMessage = 
`┏━━━━✦❘༻༺❘✦━━━━━┓
 *❍‗ ملاحظة قم بكتابة نقطة قبل الأمر(.)*
*✤─────────────────╮*
*│ه  ${ucapan()}* 
*│ه 🌐¸.• *${name}* •.¸🌐* 
*│ه*
*╮━ه〔${wm}〕$ه━⬣*
*┃ه❜❏₊ ${lenguajeGB['smsTime']()}*
*┃ه⤆${time}*
*┃ه ∘₊✧──────────✧₊∘*
*┃ه❜❏₊${lenguajeGB['smsUptime']()}*
*┃ه⤆${uptime}*
*┃ه ∘₊✧──────────✧₊∘*
*┃ه❜❏₊${lenguajeGB['smsTotalUsers']()}*
*┃ه⤆${Object.keys(global.db.data.users).length}*
*┃ه ∘₊✧──────────✧₊∘*
*🖤⃝🇷𓊈𒆜أوامر القروب 𒆜𓊉࿐*
*┃ه ❜❏₊ :tagall*
*┃ه.⤆منشن جماعي للقروب*
*┃ه ❜❏₊ :hidetag*
*┃ه.⤆منشن جماعي مخفي*
*┃ه '*•.¸♡ شرح بمثال ♡¸.•*'
*┃.tagall  تعالوا*
*┃.hidetag  تعالوا*
*┃ه ∘₊✧──────────✧₊∘*
*🖤⃝🇷𓊈𒆜أوامر تحويلات 𒆜𓊉࿐*
*┃ه ❜❏₊ :s*
*┃ه.⤆منشن صورة ويحولها ملصق*
*┃ه ❜❏₊ :sfull*
*┃ه.⤆يحول الصورة لملصق لكن أفضل*
*┃ه ❜❏₊ :toimg*
*┃ه.⤆يحول الملصق إلى صورة*
*┃ه ❜❏₊ :togif*
*┃ه.⤆يحول الملصق ل صورة متحركه*
*┃ه ❜❏₊ :wm*
*┃ه.⤆منشن ملصق واكتب الحقوق اللي تريد*
*┃ه '*•.¸♡ شرح بمثال ♡¸.•*'
*┃.s*
*┃.sfull*
*┃.toimg*
*┃.togif*
*┃.wm*
*┃ه ∘₊✧──────────✧₊∘*
*🖤⃝🇷𓊈𒆜أوامر البحث والتحميل 𒆜𓊉࿐*
*┃ه ❜❏₊ :image*
*┃ه.⤆يبحث عن صورة في جوجل*
*┃ه ❜❏₊ :play*
*┃ه.⤆يبحث عن صوتيات وفيديو*
*┃ه ❜❏₊ :ytmp4*
*┃ه.⤆يحمل من اليوتيوب أي فيد*
*┃ه ❜❏₊ :instagram*
*┃ه.⤆يحمل من الانستغرام*
*┃ه ❜❏₊ :tiktok*
*┃ه.⤆يحمل من التيك توك*
*┃ه ❜❏₊ :twitter*
*┃ه.⤆يحمل من تويتر*
*┃ه '*•.¸♡ شرح بمثال ♡¸.•*'
*┃.image صورة ناروتو*
*┃.play ايديت روبين *
*┃.ytmp4 حط اي رابط يوتيوب*
*┃.instagram حط اي رابط انستا*
*┃.tiktok حط اي رابط تيك توك*
*┃.twitter حط اي رابط تويتر*
*┃ه ∘₊✧──────────✧₊∘*
*🖤⃝🇷𓊈𒆜الألعاب 𒆜𓊉࿐*
*┃ه ❜❏₊ :ttt*
*┃ه.⤆لعبة x,o اكتب الامر وانتظر منافس*
*┃ه '*•.¸♡ شرح بمثال ♡¸.•*'
*┃.ttt هنا اكتب اي اسم*
  *⬣━━━━━━━━━━━━━━━╯*
┗━━━━✦❘༻༺❘✦━━━━━┛
`.trim()
await conn.sendFile(m.chat, pp, 'pic.jpg',listMessage, null, m, true, {
type: 'imageMessage', 
ptt: true})
    await conn.sendFile(m.chat, vn, 'anya.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(men|القائمة|مينو|قائمة|اوامر|الاوامر|اوتو|2\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeGB['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeGB['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeGB['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeGB['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeGB['smsNoche']()}`
  }
  return res
} 

