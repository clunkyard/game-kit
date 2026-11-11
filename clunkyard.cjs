#!/usr/bin/env node
'use strict';

const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {extract}=require('./clunkyard-archive.cjs');
const catalogue=require('./catalogue.json');
async function main(){
  const [action='list',language,target]=process.argv.slice(2);
  if(action==='list'){for(const row of catalogue.languages)console.log(`${row.language.padEnd(22)} ${row.portable?'Node route':'Linux x86-64'}  ${row.repository}`);return;}
  if(action!=='new'||!language||!target)throw new Error('Use node clunkyard.cjs list or new LANGUAGE DIRECTORY');
  const row=catalogue.languages.find(row=>row.language===language);if(!row)throw new Error(`Unknown language: ${language}`);
  const destination=path.resolve(target);if(fs.existsSync(destination))throw new Error('Choose a directory that does not exist yet');
  const response=await fetch(row.starter.url,{signal:AbortSignal.timeout(120000)});if(!response.ok)throw new Error(`Starter download failed (${response.status})`);
  const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.length;if(size>row.starter.bytes)throw new Error('Starter exceeds its recorded size');chunks.push(chunk);}
  const bytes=Buffer.concat(chunks,size);if(bytes.length!==row.starter.bytes||crypto.createHash('sha256').update(bytes).digest('hex')!==row.starter.sha256)throw new Error('Starter checksum mismatch');
  fs.mkdirSync(destination,{recursive:true});try{extract(bytes,destination,row.starter.expandedBytes)}catch(error){fs.rmSync(destination,{recursive:true,force:true});throw error;}
  console.log(`Created ${destination}. Run make doctor, make and make match there.`);
}
main().catch(error=>{console.error(error.message);process.exitCode=1});
