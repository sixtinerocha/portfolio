#!/usr/bin/env node
/**
 * Generate static JPG posters from every .mp4 in /public.
 * Idempotent: skips files that already have a poster on disk.
 *
 * Requires: ffmpeg in PATH (already installed on this Mac at /opt/homebrew/bin/ffmpeg).
 *
 * Usage:
 *   node scripts/generate-posters.mjs
 *   npm run posters
 */

import { execFileSync } from 'node:child_process';
import { readdirSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const PUBLIC_DIR = 'public';
const POSTERS_DIR = join(PUBLIC_DIR, 'posters');

function hasFfmpeg() {
  try {
    execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function main() {
  if (!existsSync(PUBLIC_DIR) || !statSync(PUBLIC_DIR).isDirectory()) {
    console.warn(`[posters] ${PUBLIC_DIR} not found, skipping.`);
    return;
  }
  if (!hasFfmpeg()) {
    console.warn('[posters] ffmpeg not found in PATH — install it (e.g. `brew install ffmpeg`) to generate video thumbnails. Skipping.');
    return;
  }

  if (!existsSync(POSTERS_DIR)) {
    mkdirSync(POSTERS_DIR, { recursive: true });
  }

  const videos = readdirSync(PUBLIC_DIR).filter((f) => f.toLowerCase().endsWith('.mp4'));
  if (videos.length === 0) {
    console.log('[posters] No .mp4 files in /public.');
    return;
  }

  let made = 0;
  let skipped = 0;

  for (const v of videos) {
    const { name } = parse(v);
    const inPath = join(PUBLIC_DIR, v);
    const outPath = join(POSTERS_DIR, `${name}.jpg`);

    if (existsSync(outPath)) {
      skipped++;
      continue;
    }

    try {
      execFileSync(
        'ffmpeg',
        [
          '-y',
          '-ss', '00:00:00.5',
          '-i', inPath,
          '-frames:v', '1',
          '-q:v', '4',
          '-vf', 'scale=540:-2',
          outPath,
        ],
        { stdio: ['ignore', 'ignore', 'inherit'] },
      );
      made++;
      process.stdout.write(`  ✓ ${name}.jpg\n`);
    } catch (err) {
      console.error(`  ✗ ${v} — ffmpeg failed:`, err.message);
    }
  }

  console.log(`[posters] done. ${made} new, ${skipped} cached, total ${videos.length}.`);
}

main();
