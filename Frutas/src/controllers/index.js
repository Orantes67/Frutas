import { Caracteristicas } from "../models/Caracteristicas.js";
import { Frutas } from "../models/Frutas.js";
import { Nutrientes } from "../models/Nutrientes.js"
import { arrayfrutas } from "./dependencies.js"
let api = document.getElementById("btn-api");
api.addEventListener("click", function () {
  let url = "https://www.fruityvice.com/api/fruit/all"
fetch(url)
.then(response => response.json())
.then(data1 => {
    data1.map(element => {
      let caracteristicas = new Caracteristicas()
        caracteristicas.setFamily(element.family)
        caracteristicas.setGenus(element.genus)
        caracteristicas.setOrder(element.order)
      let frutas= new Frutas()
        frutas.setName(element.name)
        frutas.setId(element.id)
        console.log(frutas)
      let nutrientes= new Nutrientes()
        nutrientes.setCalorias(element.calories)
        nutrientes.setCarbohydrates(element.carbohydrates)
        nutrientes.setFat(element.fat)
        nutrientes.setSugar(element.sugar)
        nutrientes.setProteina(element.protein)
        console.log(caracteristicas)
        arrayfrutas.addArrayfrutas(frutas)
      });
    })
  })

  const btnView = document.getElementById("btn-view")
  btnView.addEventListener("click", ()=>{
      const main = document.querySelector("main")
      console.log(arrayfrutas.getArrayfrutas())
      arrayfrutas.getArrayfrutas().forEach(item => {
          let fruta = document.createElement("div")
          fruta.style = "border: 1px solid gray;"
          let frutaName = document.createElement("label")
          frutaName.innerText = item.getName()
          fruta.appendChild(frutaName)
          let frutaid=document.createElement("label")
          frutaid.innerText=item.getId()
          fruta.appendChild(frutaid)
          main.appendChild(fruta)

      })
      })
  