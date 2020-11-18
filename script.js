var LoginPage = document.body.querySelector(".LoginPage")
var UserLogin = document.body.querySelector(".UserLogin")
var UserPassword = document.body.querySelector(".UserPassword")
var SignIn = document.body.querySelector(".SignIn")
var Error = document.body.querySelector(".Error")

var LogOut = document.body.querySelector(".LogOut")
var LogOut2 = document.body.querySelector(".LogOut2")
var GradeOverview = document.body.querySelector(".OverviewGrades")

var ViewGrades = document.body.querySelector(".ViewGrades")
var GradeView = document.body.querySelector(".GradeView")
var AddGrades = document.body.querySelector(".AddGrades")

var AddStudentGrades = document.body.querySelector(".AddStudentGrades")
var AddAGrade = document.body.querySelector(".AddAGarde")
var nameBox = document.body.querySelector(".name");
var gradeBox = document.body.querySelector(".grade");
var messageBox =document.body.querySelector(".message");
var list = [];

ViewGrades.style.display = "none"
AddStudentGrades.style.display = "none"

function LogInPage(){
  ViewGrades.style.display = "none"
AddStudentGrades.style.display = "none"
  LoginPage.style.display = "block"
  
}
function ShowViewGrades(){
  LoginPage.style.display = "none"
  ViewGrades.style.display = "block"
  AddStudentGrades.style.display = "none"
}

function ShowAddGrades(){
  LoginPage.style.display = "none"
  ViewGrades.style.display = "none"
  AddStudentGrades.style.display = "block"
}
document.body.querySelector(".LogOut").addEventListener("click",function(){
  LogInPage()
  Error.innerHTML = " "
})
document.body.querySelector(".LogOut2").addEventListener("click",function(){
  LogInPage()
  Error.innerHTML = " "
})
document.body.querySelector(".OverviewGrades").addEventListener("click",function(){
  ShowViewGrades()
})


document.body.querySelector(".SignIn").addEventListener("click",function(){
  if(UserLogin.value == "cool"&& UserPassword.value == "password"){
    ShowViewGrades()
  }
else if(UserLogin.value == "cool"){
    Error.innerHTML = " "
    document.body.querySelector(".Error").innerHTML = "Incorrect Password"
  }else if(UserPassword.value == "password"){
    Error.innerHTML= " "
    document.body.querySelector(".Error").innerHTML = "Incorrect Username"
  }else{
     document.body.querySelector(".Error").innerHTML = "Incorrect Username and Password"
  }
})

document.body.querySelector(".AddGrades").addEventListener("click",function(){
  ShowAddGrades()
})

document.body.querySelector(".submit").addEventListener("click",function(){
  messageBox.innerHTML ="";
  if(nameBox.value.length>=2&&Number(gradeBox.value<=100)&&Number(gradeBox.value>=0)){
    list.push({
      name:nameBox.value,
      grade:gradeBox.value
    });
    renderList();
    ShowViewGrades()
  }else{
    messageBox.innerHTML = "Invalid Student Information"
  }
})

function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h4");
    itmEle.innerHTML="Name: "+list[i].name + "Grade: "+list[i].grade;
    document.body.querySelector(".list").appendChild(itmEle)
    
  }
}