#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
    console.error("❌ Kasih nama filenya dong ngab! Contoh: javaz script.jz");
    process.exit(1);
}

const filePath = path.resolve(args[0]);

if (!fs.existsSync(filePath)) {
    console.error(`❌ Waduh, file ${args[0]} nggak ketemu nih.`);
    process.exit(1);
}

if (!filePath.endsWith('.jz')) {
    console.error("❌ Filenya harus format .jz ya ges ya.");
    process.exit(1);
}

let code = fs.readFileSync(filePath, 'utf-8');

code = code.replace(/kalo enggak/g, 'else');
code = code.replace(/terus\?/g, 'if');

// Dictionary lengkap JavaZ
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

    // Control Flow & Looping
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

    // Operator & Type
    "spek": "typeof",
    "dalem": "in",
    "anak_buahnya": "instanceof",
    "buang": "delete",
    "hampa": "void",

    // Module & Async
    "pamer": "export",
    "pinjem": "import",
    "sabar": "await",
    "setor": "yield",
    
    // Strict Mode / OOP Lanjut
    "aturan": "interface",
    "nurutin": "implements",
    "paket": "package",
    "jangan_kepo": "private",
    "dijagain": "protected",
    "buat_umum": "public",
    "paten": "static",

    // Tooling
    "cek_dulu": "debugger",
    "bareng": "with",
    "liat": "console.log"
};

// Looping untuk replace semua kata di dictionary pakai Regex (Word Boundary)
for (const [genZ, js] of Object.entries(dictionary)) {
    const regex = new RegExp(`\\b${genZ}\\b`, 'g');
    code = code.replace(regex, js);
}

const tempFilePath = path.join(process.cwd(), '.javaz-temp.js');
fs.writeFileSync(tempFilePath, code);

try {
    execSync(`node ${tempFilePath}`, { stdio: 'inherit' });
} catch (error) {
    console.error("\n❌ Yah, ada error di kodemu ngab. Cek lagi gih.");
} finally {

    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
}
