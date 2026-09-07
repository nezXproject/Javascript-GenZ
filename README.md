
```markdown
# JavaZ ☕️

> A lightweight JavaScript transpiler using Gen Z Indonesian slang syntax.

**JavaZ** adalah sebuah *Command Line Tool* (CLI) berbasis Node.js yang memungkinkan kamu menulis kode JavaScript menggunakan sintaks dan *slang* khas Gen Z Indonesia. Kode berformat `.jz` akan diterjemahkan (*transpiled*) secara *real-time* menjadi kode JavaScript standar sebelum dieksekusi oleh *runtime* Node.js.

---

## 📸 Fitur Utama

- **Sintaksis Khas**: Menulis logika pemrograman menggunakan kosakata populer seperti `p`, `fix`, `liat`, `terus?`, hingga `ghosting`.
- **Eksekusi Langsung**: Terintegrasi langsung dengan Node.js tanpa perlu menyimpan file terjemahan secara permanen.
- **CLI Native**: Dapat diakses dari mana saja di terminal cukup dengan perintah `javaz <nama_file>.jz`.
- **Dukungan JavaScript Penuh**: Mendukung paradigma OOP, *Async/Await*, *Error Handling*, hingga *Strict Mode*.

---

## 🛠️ Persyaratan Sistem

- **Node.js** v14.0.0 atau versi yang lebih baru
- **npm** (Node Package Manager)

---

## 🚀 Instalasi

Kamu bisa langsung menginstal *tool* ini dari GitHub secara global supaya perintah `javaz` bisa dipakai di mana saja. Buka terminalmu dan jalankan:

```bash
npm install -g nezXproject/Javascript-GenZ

```

*(Opsional)* Kalau kamu mau *clone* *source code*-nya untuk ikut berkontribusi atau sekadar melihat cara kerjanya:

```bash
git clone [https://github.com/nezXproject/Javascript-GenZ.git](https://github.com/nezXproject/Javascript-GenZ.git)
cd Javascript-GenZ
npm link

```

---

## 💻 Cara Penggunaan

Buat file baru dengan ekstensi `.jz` (misal: `app.jz`), lalu tulis kode JavaZ kamu. Untuk menjalankannya, gunakan perintah:

```bash
javaz app.jz

```

### Contoh Kode (`app.jz`)

```javascript
fix nama = "JavaZ";
p status_aktif = fakta;

jurus sapaUser(nama) {
    terus? (status_aktif === fakta) {
        spill "Selamat datang di " + nama;
    } kalo enggak {
        spill "Sistem nonaktif";
    }
}

liat(sapaUser(nama));

```

---

## 📖 Kamus Kata Kunci (Syntax Mapping)

### 1. Deklarasi & Variabel

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `p` | `let` | Deklarasi variabel *mutable* |
| `fix` | `const` | Deklarasi variabel *immutable* |
| `sepuh` | `var` | Deklarasi variabel *function-scoped* |
| `jurus` | `function` | Deklarasi fungsi |

### 2. Pengondisian & Perulangan

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `terus?` | `if` | Kondisi utama |
| `kalo enggak` | `else` | Kondisi alternatif |
| `milih` | `switch` | Percabangan *switch* |
| `skenario` | `case` | *Case* dalam *switch* |
| `mentoknya` | `default` | *Default case* |
| `muter` | `for` | Perulangan *for* |
| `selagi` | `while` | Perulangan *while* |
| `lakuin` | `do` | Perulangan *do-while* |
| `skip` | `continue` | Melompati iterasi |
| `mager` | `break` | Menghentikan *looping* / *switch* |
| `spill` | `return` | Mengembalikan nilai fungsi |

### 3. Object Oriented Programming (OOP)

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `sirkel` | `class` | Deklarasi kelas |
| `anak_baru` | `new` | Instansiasi objek baru |
| `nebeng` | `extends` | Pewarisan kelas (*inheritance*) |
| `suhu` | `super` | Akses konstruktor induk |
| `gue` | `this` | Referensi ke instance saat ini |

### 4. Error Handling

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `coba_dulu` | `try` | Blok eksekusi uji coba |
| `kalo_error` | `catch` | Blok penanganan error |
| `pokoknya` | `finally` | Blok yang selalu dieksekusi |
| `emosi` | `throw` | Melempar eksepsi/error |

### 5. Tipe Data & Literals

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `fakta` | `true` | Nilai boolean *true* |
| `hoax` | `false` | Nilai boolean *false* |
| `ghosting` | `null` | Nilai *null* |

### 6. Utility

| Kata Kunci JavaZ | JavaScript | Keterangan |
| --- | --- | --- |
| `liat` | `console.log` | Mencetak ke stdout |
| `spek` | `typeof` | Mengecek tipe data |
| `sabar` | `await` | Menunggu nilai *promise* |

---

## 📁 Lisensi

Project ini dilisensikan di bawah **MIT License**.

```

```
