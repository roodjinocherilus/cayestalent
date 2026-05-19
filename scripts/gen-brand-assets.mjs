// Outil de build (ponctuel) : génère favicon + image OG depuis le logo.
// Lancer : node scripts/gen-brand-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
const logosDir = path.join(pub, 'images', 'logos');
const colorLogo = path.join(logosDir, 'cayes-talent-lab-color.png');
const whiteLogo = path.join(logosDir, 'cayes-talent-lab-white.png');

const NAVY = { r: 0, g: 37, b: 72 };

// 1. Détecter la boîte de l'emblème (bloc dense de gauche avant la gouttière).
const { data, info } = await sharp(colorLogo)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const colOpaque = new Array(W).fill(0);
for (let x = 0; x < W; x++) {
  let c = 0;
  for (let y = 0; y < H; y++) {
    if (data[(y * W + x) * C + 3] > 40) c++;
  }
  colOpaque[x] = c;
}
let left = colOpaque.findIndex((v) => v > 0);
// gouttière = première longue série de colonnes vides après l'emblème
let gutter = -1;
let run = 0;
for (let x = left; x < W; x++) {
  if (colOpaque[x] === 0) {
    run++;
    if (run >= 40) {
      gutter = x - run + 1;
      break;
    }
  } else run = 0;
}
const embRight = gutter > 0 ? gutter - 1 : W - 1;

let top = H,
  bot = 0;
for (let y = 0; y < H; y++) {
  for (let x = left; x <= embRight; x++) {
    if (data[(y * W + x) * C + 3] > 40) {
      if (y < top) top = y;
      if (y > bot) bot = y;
      break;
    }
  }
}
const emb = {
  left,
  top,
  width: embRight - left + 1,
  height: bot - top + 1,
};
console.log('Emblème détecté :', emb, `(image ${W}x${H})`);

// Emblème carré transparent (favicon).
const side = Math.max(emb.width, emb.height);
const pad = Math.round(side * 0.06);
const squareSide = side + pad * 2;
const emblemSquare = await sharp(colorLogo)
  .extract({
    left: emb.left,
    top: emb.top,
    width: emb.width,
    height: emb.height,
  })
  .extend({
    top: Math.round((squareSide - emb.height) / 2),
    bottom: Math.round((squareSide - emb.height) / 2),
    left: Math.round((squareSide - emb.width) / 2),
    right: Math.round((squareSide - emb.width) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

for (const sz of [32, 192, 512]) {
  await sharp(emblemSquare)
    .resize(sz, sz, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pub, `favicon-${sz}.png`));
}
// apple-touch : emblème sur fond blanc, marge douce, 180px.
await sharp(emblemSquare)
  .resize(150, 150, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .extend({ top: 15, bottom: 15, left: 15, right: 15, background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile(path.join(pub, 'apple-touch-icon.png'));

// 2. Image OG 1200x630 : logo blanc centré sur fond navy.
const ogW = 1200,
  ogH = 630;
const logoOnOg = await sharp(whiteLogo)
  .resize({ width: Math.round(ogW * 0.6) })
  .toBuffer();
await sharp({
  create: {
    width: ogW,
    height: ogH,
    channels: 4,
    background: { ...NAVY, alpha: 1 },
  },
})
  .composite([{ input: logoOnOg, gravity: 'centre' }])
  .png()
  .toFile(path.join(pub, 'og-cayes.png'));

console.log('OK : favicon-32/192/512.png, apple-touch-icon.png, og-cayes.png');
