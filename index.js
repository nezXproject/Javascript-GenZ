#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("☕️ JavaZ CLI");
    console.log("Cara pakai:");
    console.log("  javaz run <file.jz>      : Menjalankan file secara langsung");
    console.log("  javaz build <file.jz>    : Compile ke .js (Siap dipake buat Web/Production)");
    process.exit(1);
}

const command = args[0];
const targetPath = args[1] ? path.resolve(args[1]) : null;

if (!targetPath || !fs.existsSync(targetPath)) {
    console.error(`❌ Waduh, file ${args[1]} nggak ketemu nih.`);
    process.exit(1);
}

// Dictionary JavaZ (Update ada async, from, new, extends)
const dictionary = {
    // Deklarasi & Scope
    "p": "let",
    "fix": "const",
    "sepuh": "var",
    "sirkel": "class",
    "anak_baru": "new",
    "nebeng": "extends",
    "suhu": "super",
    "gue": "this",
    "jurus": "function",

    // Control Flow
    "milih": "switch",
    "skenario": "case",
    "mentoknya": "default",
    "muter": "for",
    "selagi": "while",
    "lakuin": "do",
    "skip": "continue",
    "mager": "break",
    "spill": "return",

    // Error Handling
    "coba_dulu": "try",
    "kalo_error": "catch",
    "pokoknya": "finally",
    "emosi": "throw",

    // Literals
    "fakta": "true",
    "hoax": "false",
    "ghosting": "null",

    // Async & Modules
    "woles": "async", 
    "sabar": "await",
    "pamer": "export",
    "pinjem": "import",
    "dari": "from", 
    "setor": "yield",
    
    // Lain-lain
    "spek": "typeof",
    "dalem": "in",
    "anak_buahnya": "instanceof",
    "buang": "delete",
    "hampa": "void",
    "liat": "console.log"
};

// Fungsi utama penerjemah
function transpile(code) {
    let result = code.replace(/kalo enggak/g, 'else');
    result = result.replace(/terus\?/g, 'if');
    
    for (const [genZ, js] of Object.entries(dictionary)) {
        const regex = new RegExp(`\\b${genZ}\\b`, 'g');
        result = result.replace(regex, js);
    }
    return result;
}

// Baca file asli
const sourceCode = fs.readFileSync(targetPath, 'utf-8');
const compiledCode = transpile(sourceCode);

if (command === 'run') {
    // Mode RUN: Eksekusi langsung
    const tempFile = path.join(process.cwd(), '.javaz-temp.js');
    fs.writeFileSync(tempFile, compiledCode);
    try {
        execSync(`node ${tempFile}`, { stdio: 'inherit' });
    } catch (err) {
        console.error("\n❌ Error ngab. Coba cek syntax-nya.");
    } finally {
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    }
} else if (command === 'build') {
    // Mode BUILD: Buat file .js permanen untuk production/web
    const ext = path.extname(targetPath);
    const destPath = targetPath.replace(ext, '.js');
    fs.writeFileSync(destPath, compiledCode);
    console.log(`✅ Mantap! File berhasil di-build ke: ${path.basename(destPath)}`);
    console.log(`Sekarang kamu bisa deploy pakai Node.js biasa!`);
} else {
    console.error("❌ Perintah nggak valid. Pakai 'run' atau 'build'.");
}
