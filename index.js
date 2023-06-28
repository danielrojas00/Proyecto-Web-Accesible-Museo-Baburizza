import puppeteer from "puppeteer";
import * as fs from 'node:fs/promises';

async function getDataFromWebPage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.surdoc.cl/registro/51-129');
  const data = await page.evaluate(() => {
    let Titulo = document.querySelector('.pane-content .summary-records-summary_1 .value').innerText;
    let Descripcion = document.querySelector('p').innerText;
    let Autor = document.querySelector('.pane-content .summary-records-summary_2 .value').innerText;
    let Coleccion = document.querySelector('.field-name-field-rcord-collection .field-item.even').innerText;
    let Tecnica =document.querySelector('.field-pg-recordtechnical .technical-item').innerText 
    let Dimensiones =document.querySelector('.field-pg-measures .field-item').innerText 
    return {
      Titulo,
      Descripcion,
      Autor,
      Coleccion,
      Tecnica,
      Dimensiones,
    }
  });
  console.log(data);
  await fs.writeFile('datosdeobra.json', JSON.stringify(data, null,10))
  await browser.close();
}

getDataFromWebPage();