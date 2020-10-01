exports.textTnC = () => {
    return `
Berikut ini Rules - Rules dalam menggunakan bot ini

*1. Dilarang Spam*
Jika melanggar bot akan keluar. Jika bot sudah keluar grup yang sama sebanyak 3x, grup dan member grup yang melakukan spam tersebut akan masuk ke dalam blacklist dan tidak dapat menggunakan bot ini lagi. 
    
*2. Dilarang Menelpon*
Jika melanggar akan di block dan dimasukkan ke dalam blacklist.
    
*MOHON DIMAKLUMI KARNA YANG MAKE BUKAN LO DOANG.*`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

WAJIB BACA RULES DULU SEBELUM MENGGUNAKAN BOT INI! {/RULES} {/DONATE} 

Sticker Creator:
1. */sticker*
Untuk merubah gambar menjadi sticker. 
Penggunaan: kirim gambar dengan caption /sticker atau balas gambar yang sudah dikirim dengan /sticker

2. */sticker* _<Url Gambar>_
Untuk merubah gambar dari url menjadi sticker. 
Penggunaan: 

3. */gifsticker* _<Giphy URL>_ / */stickergif* _<Giphy URL>_
Untuk merubah gif menjadi sticker (Giphy Only)
Penggunaan: Kirim pesan dengan format */gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

Downloader:
1. */tiktok* _<tiktok url>_
Untuk mengunduh video dari video tiktok.
Penggunaan: kirim pesan dengan format */tiktok https://www.tiktok.com/id/video/id....

2. */fb* _<post/video url>_
Untuk mengunduh video dari Facebook.
Penggunaan: kirim pesan dengan format */fb https://www.facebook.com/.....*

3. */ig* _<instagram post url>_
Untuk mengunduh photo dan video dari instagram.
Penggunaan: kirim pesan dengan format */ig https://www.instagram.com/p/id/*

4. */twt* _<twitter post url>_
Untuk mengunduh photo dan video dari Twitter.
Penggunaan: kirim pesan dengan format */twt https://twitter.com/username/status/id*

5. */yt* _<youtube post url>_ (Maintenance)
Untuk mengunduh video dari Youtube.
Penggunaan: kirim pesan dengan format */yt https://www.youtube.com/watch?v=-vwpe7SBuh0*

Lain-lain:
1. */translate* _<kode bahasa>_
Untuk mengartikan pesan menjadi bahasa yang ditentukan.
Penggunaan: Balas/quote/reply pesan yang ingin kamu translate dengan _*/translate id*_ <- id adalah kode bahasa. kode bahasa dapat dilihat di *https://bit.ly/33FVldE*

2. */resi* _<kurir>_ _<nomer resi>_
Untuk memeriksa status pengiriman barang, daftar kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Penggunaan: kirim pesan dengan format _*/resi jne 1238757632*_

3. */meme* _<teks atas>_ | _<teks bawah>_
Untuk membuat meme dengan teks atas dan bawah
Penggunaan: kirim gambar dengan caption _*/meme aku atas | kamu bawah*_, atau juga bisa dengan membalas gambar yang sudah ada.

4. */ceklokasi*
Cek lokasi penyebaran covid-19 di daerah sekitarmu (kelurahan).
Penggunaan: kirimkan lokasimu lalu balas/quote/reply lokasi yang kamu kirim dengan _*/ceklokasi*_

5. */donasi*
Untuk donasi.

Fun Command :

1. */say* (Only On Group)
Send a random text from bot database.

2. */apakah* _<insert ur text>_
Buat Gacha <Iya> / <Gak>.


Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!


1. */add* (Nomer HP)
Untuk menambahkan member ke group ini. *(cara penggunaan nya /add 6282283363824)*

2. */kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

3. */promote* @user
Untuk mempromosikan member menjadi Admin grup.

4. */demote* @user
Untuk demosikan Admin grup.

5. */tagall* 
Untuk mention semua member grup.

6. */del*
Untuk menghapus pesan bot (balas pesan bot dengan /del)`
}

exports.textDev = () => {
    return`
⚠ [ *Dev Group Only* ] ⚠
Berikut adalah beberapa fitur Dev yang ada pada bot ini!


1. */join* <Link Groups>
Untuk menambahkan bot ke group .

2. */kickdev* @user

3. */promotedev* @user


`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini,
*dukung bot ini untuk membeli kuota:(*
https://saweria.co/lynxzx2 atau langsung bisa kenomer *+628971178515*,
Terimakasih.`
}
