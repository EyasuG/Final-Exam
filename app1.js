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
//Then I will create a list to be populted in the html doc
let elHeader = document.createElement('h5')
elList.appendChild(elHeader)
//elHeader.innerText = 'Form'
let elTh = document.createElement('h5')
elHeader.appendChild(elTh)
elTh.innerText = 'Name of Developer'
let elThAcademy = document.createElement('h5')
elHeader.appendChild(elThAcademy)
elThAcademy.innertText = 'Coding School'
let elLanguage = document.createElement('h5')
elHeader.appendChild(elLanguage)
elLanguage.innerText = 'Programing Language'

let Developer1 = new Dev ('Simon', 'Codepartners', 'JavaScript')
let Developer2 = new Dev ('Eyasu', 'Coursera', 'Python')
let Developer3 = new Dev ('Kesete', 'CodeFellows', 'Java')
//Then I will push the new instance to the Dev 
//Developer.push(Developer1, Developer2, Developer3

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
for (let i=0;i<Developer.length; i++) {
Developer[i].NewDeveloper()
 }
//Accessing our inputs on our form in html 
let elNameofDeveloper = elform.NameofDeveloper
let elNewLanguage = elform.ProgLanguage
let elNameofSchool =elform.NameofSchool
//Event listener 
elform.addEventListener('submit', function(event){
  event.preventDefault()
  let newDeveloper = new Dev (elNameofDeveloper.value, elNewLanguage.value, elNameofSchool.value) 
  Developer.push(NewDeveloper)
  newDeveloper.NameOfNewDeveloper()
} ) 
