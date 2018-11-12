'use strict'
//lets start by declaring the elements in the html body
let elList = document.getElementById('DevelopersForm')
let elform = document.getElementById('SchoolForm')
let Developer =[]
//declare the object
let Dev = function(NameofDeveloper,NameofSchool, ProgLanguage){
 this.NameofDeveloper = NameofDeveloper
 this.NameofSchool= NameofSchool
 this.ProgLanguage = ProgLanguage
}
if(localStorage.backup){
  let parseAcademy = localStorage.getItem('backup')
//   console.log(Developer)
      Developer = JSON.parse(parseAcademy)}

//Then I will create a list to be populted in the html doc
let elHeader = document.createElement('h5')
elList.appendChild(elHeader)
let elTh = document.createElement('h5')
elHeader.appendChild(elTh)
elTh.innerText = 'Name of Developer'
let elThAcademy = document.createElement('h5')
elHeader.appendChild(elThAcademy)
elThAcademy.innerText = 'Coding School'
let elLanguage = document.createElement('h5')
elHeader.appendChild(elLanguage)
elLanguage.innerText = 'Programing Language'
//Initiating new instances into the array 
let Developer1 = new Dev ('Simon', 'Codepartners', 'JavaScript')
let Developer2 = new Dev ('Eyasu', 'Coursera', 'Python')
let Developer3 = new Dev ('Kesete', 'CodeFellows', 'Java')
//Then I will push the new instance to the Dev
//Developer.push(Developer1, Developer2, Developer3)
//}
Dev.prototype.NewDeveloper = function(){
 for(let i=0; i < Developer.length; i++){
   let NewDeveloperName = document.createElement('ul')
   elTh.appendChild(NewDeveloperName)
   let listofacademy = document.createElement('ul')
   elThAcademy.appendChild(listofacademy)
   let programLang = document.createElement('ul')
   elLanguage.appendChild(programLang)
   NewDeveloperName.innerText=Developer[i].NameofDeveloper
   listofacademy.innerText=Developer[i].NameofSchool
   programLang.innerText=Developer[i].ProgLanguage
 }
}

//Accessing our inputs on our form in html
let elNameofDeveloper = elform.name
let elNameofSchool = elform.nameOfSchool
let elNewLanguage = elform.progLang

//Event listener
elform.addEventListener('submit', function(event){
 event.preventDefault()
 let newDeveloper = new Dev(elNameofDeveloper.value, elNameofSchool.value, elNewLanguage.value)
 Developer.push(newDeveloper)
 newDeveloper.NewDeveloper()
 
 localStorage.setItem('backup',JSON.stringify(Developer))
} )
