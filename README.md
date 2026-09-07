```markdown
# JavaZ ☕️

> A lightweight JavaScript transpiler using Gen Z Indonesian slang syntax.

**JavaZ** adalah sebuah *Command Line Tool* (CLI) berbasis Node.js yang memungkinkan kamu menulis kode JavaScript menggunakan sintaks dan *slang* khas Gen Z Indonesia. Kode berformat `.jz` akan diterjemahkan (*transpiled*) secara *real-time* menjadi kode JavaScript standar sebelum dieksekusi oleh *runtime* Node.js.

---

## 📸 Fitur Utama

- **Sintaksis Khas**: Menulis logika pemrograman menggunakan kosakata populer seperti `p`, `fix`, `liat`, `terus?`, hingga `ghosting`.
- **Dua Mode Eksekusi**:
  - **Run**: Eksekusi langsung file `.jz` tanpa menyimpan file terjemahan secara permanen.
  - **Build**: Compile file `.jz` menjadi file `.js` siap pakai untuk production/web.
- **CLI Native**: Dapat diakses dari mana saja di terminal cukup dengan perintah `javaz`.
- **Dukungan JavaScript Penuh**: Mendukung paradigma OOP, *Async/Await*, *Error Handling*, hingga *Strict Mode*.
- **Dukungan Module ES6**: Support `import`/`export` dengan sintaks `pinjem`/`pamer`.

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

*(Opsional)* Kalau kamu mau *clone* *source code* -nya untuk ikut berkontribusi atau sekadar melihat cara kerjanya:

```bash
git clone https://github.com/nezXproject/Javascript-GenZ.git
cd Javascript-GenZ
npm link
```

---

## 💻 Cara Penggunaan

### 1. Mode RUN (Eksekusi Langsung)
Buat file baru dengan ekstensi `.jz` (misal: `app.jz`), lalu tulis kode JavaZ kamu. Untuk menjalankannya, gunakan perintah:

```bash
javaz run app.jz
```

### 2. Mode BUILD (Compile ke JavaScript)
Untuk mengcompile file `.jz` menjadi file `.js` yang siap dipakai di production atau web:

```bash
javaz build app.jz
```

Hasilnya akan menghasilkan file `app.js` yang merupakan kode JavaScript standar.

---

## 📝 Contoh Kode (`app.jz`)

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

**Hasil Build (`app.js`):**
```javascript
const nama = "JavaZ";
let status_aktif = true;

function sapaUser(nama) {
    if (status_aktif === true) {
        return "Selamat datang di " + nama;
    } else {
        return "Sistem nonaktif";
    }
}

console.log(sapaUser(nama));
```

### Contoh dengan Async/Await
```javascript
woles jurus ambilData() {
    sabar liat "📡 Mengambil data...";
    p hasil = sabar fetch('https://api.example.com/data');
    spill hasil;
}
```

### Contoh dengan Class & Module
```javascript
// person.jz
sirkel Orang {
    gue(nama, umur) {
        gue.nama = nama;
        gue.umur = umur;
    }
    
    jurus perkenalan() {
        spill `Halo, gue ${gue.nama} (${gue.umur} tahun)`;
    }
}

pamer { Orang };
```

```javascript
// app.jz
pinjem { Orang } dari './person.jz';

p user = anak_baru Orang("Budi", 20);
user.perkenalan();
```

---

## 📖 Kamus Kata Kunci (Syntax Mapping)

### 1. Deklarasi & Scope
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
| `p` | `let` | Deklarasi variabel *mutable* |
| `fix` | `const` | Deklarasi variabel *immutable* |
| `sepuh` | `var` | Deklarasi variabel *function-scoped* |
| `jurus` | `function` | Deklarasi fungsi |
| `sirkel` | `class` | Deklarasi kelas |
| `anak_baru` | `new` | Instansiasi objek baru |
| `nebeng` | `extends` | Pewarisan kelas (*inheritance*) |
| `suhu` | `super` | Akses konstruktor induk |
| `gue` | `this` | Referensi ke instance saat ini |

### 2. Control Flow (Pengondisian & Perulangan)
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
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

### 3. Error Handling
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
| `coba_dulu` | `try` | Blok eksekusi uji coba |
| `kalo_error` | `catch` | Blok penanganan error |
| `pokoknya` | `finally` | Blok yang selalu dieksekusi |
| `emosi` | `throw` | Melempar eksepsi/error |

### 4. Tipe Data & Literals
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
| `fakta` | `true` | Nilai boolean *true* |
| `hoax` | `false` | Nilai boolean *false* |
| `ghosting` | `null` | Nilai *null* |

### 5. Async & Modules
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
| `woles` | `async` | Menandai fungsi asinkron |
| `sabar` | `await` | Menunggu nilai *promise* |
| `pamer` | `export` | Mengekspor modul |
| `pinjem` | `import` | Mengimpor modul |
| `dari` | `from` | Spesifikasi sumber modul |
| `setor` | `yield` | Mengembalikan nilai dari *generator* |

### 6. Utility & Operator
| Kata Kunci JavaZ | JavaScript | Keterangan |
|:---|:---|:---|
| `liat` | `console.log` | Mencetak ke stdout |
| `spek` | `typeof` | Mengecek tipe data |
| `dalem` | `in` | Cek properti dalam objek |
| `anak_buahnya` | `instanceof` | Cek instance dari kelas |
| `buang` | `delete` | Menghapus properti objek |
| `hampa` | `void` | Evaluasi expression tanpa return |

---

## 🆕 Apa yang Baru?

Versi terbaru JavaZ mendukung:

✅ **Async/Await** dengan kata kunci `woles` dan `sabar`  
✅ **ES6 Modules** dengan `pinjem`/`pamer`/`dari`  
✅ **Generator Functions** dengan `setor`  
✅ **Instanceof** dengan `anak_buahnya`  
✅ **Improved Build System** untuk production

---

## 🤝 Kontribusi

Kamu ingin ikut berkontribusi? Silakan *fork* repositori ini, buat perubahan, dan kirimkan *pull request*. Semua kontribusi sangat kami apresiasi! 🙌

### Cara Berkontribusi:
1. *Fork* repositori ini
2. Buat *branch* baru (`git checkout -b fitur-keren`)
3. *Commit* perubahanmu (`git commit -m 'Menambahkan fitur keren'`)
4. *Push* ke *branch* (`git push origin fitur-keren`)
5. Buka *Pull Request*

---

## 📁 Lisensi

Project ini dilisensikan di bawah **MIT License**. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

## ⭐ Dukungan

Kalau kamu suka dengan project ini, jangan lupa kasih ⭐ di GitHub! Dukunganmu sangat berarti untuk pengembangan lebih lanjut.

---

**Dibuat dengan ☕️ dan semangat anak muda oleh [nezXproject](https://github.com/nezXproject)**

Made with ❤️ in Indonesia 🇮🇩
```
