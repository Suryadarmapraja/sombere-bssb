SOMBERE' WEB MULTI-USER V6.1
PT Bank Sulselbar

BENTUK APLIKASI
Aplikasi web multi-user sungguhan: browser -> server SOMBERE -> PostgreSQL.
Bukan file HTML lokal. Folder public hanya antarmuka yang disajikan oleh server.

PERSYARATAN SERVER
- Node.js LTS
- PostgreSQL
- Jaringan internal/intranet
- HTTPS/reverse proxy untuk produksi

INSTALASI RINGKAS (DTI/ADMIN SERVER)
1. Buat database PostgreSQL bernama sombere.
2. Jalankan schema.sql ke database tersebut.
3. Salin .env.example menjadi .env lalu isi DATABASE_URL dan JWT_SECRET yang kuat.
4. Jalankan: npm install
5. Buat admin pertama: node create-admin.js admin PASSWORD_KUAT "Nama Administrator"
6. Jalankan: npm start
7. Buka browser ke http://ALAMAT-SERVER:5050

UNTUK PRODUKSI
- Jangan membuka port database PostgreSQL ke internet publik.
- Tempatkan aplikasi di jaringan internal/VPN sesuai kebijakan DTI.
- Gunakan HTTPS dan reverse proxy.
- Ganti JWT_SECRET bawaan.
- Backup PostgreSQL terjadwal.
- Batasi firewall hanya ke sumber yang diperlukan.

MODUL YANG SUDAH AKTIF
- Login multi-user
- Role dasar
- Dashboard dasar
- Register Jurnal V5.4 tersimpan di PostgreSQL
- Nomor jurnal otomatis per tahun, bulan Romawi mengikuti Tanggal Jurnal
- Pembatalan register tanpa penggunaan ulang nomor
- Audit log CREATE/CANCEL Register Jurnal

STRUKTUR DATABASE SUDAH DISIAPKAN
- Kartu Kontrol
- Termin
- Tagihan
- Kartu OPE
- Tagihan OPE
- Approval
- Vendor
- Divisi
- User
- Audit Trail

CATATAN PENTING
Register Jurnal berdiri sendiri dan tidak memiliki foreign key ke Kartu Kontrol, Tagihan, atau OPE.
