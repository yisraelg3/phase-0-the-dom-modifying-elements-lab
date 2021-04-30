//Write your code here!
document.querySelector('main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Yisrael is the champion';
document.body.appendChild(newHeader);
const main = document.querySelector('main')
//body.removeChild(main)

// const element = document.createElement('div'); 
// document.body.appendChild(element); 
// const ul = document.createElement('ul');

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement('li');
//   li.innerHTML = (i + 1).toString();
//   ul.appendChild(li);
// }

// element.appendChild(ul); 

// const header = document.getElementById('header');
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"; 
// element.style.backgroundColor = '#27647B'; 
// element.style.fontSize = '24px';
// element.style.marginLeft = '30px';
// element.style.lineHeight = 2; 
// element.className = "dog";
// element.className = "pet-listing dog"; 
// element.classList.remove("unneeded-class");
// element.classList.add("pet-listing", "dog"); 

// const ul1 = document.getElementsByTagName('ul')[0];
// ul1.removeChild(ul1.querySelector('li:nth-child(2)')); 
// document.querySelector('body').removeChild(main);