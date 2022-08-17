let centerTop = ' top .4s;';
let rightTop = 'rightTop .4s';
  
const wraper = document.createElement("div");
const checkWraper = document.createElement("div")
const check = document.createElement("div")
const icon = document.createElement("i");
const alertDescWraper = document.createElement('div');
const alertTitle = document.createElement('h1');
const alertDesc = document.createElement('p');
const button = document.createElement('button');
const closeIcon = document.createElement('i');
const link = document.createElement('a');

wraper.className = 'alert-wraper';
checkWraper.className = 'check-wraper';
check.className = 'check';
icon.className = 'fas fa-check';
closeIcon.className = 'fas fa-close';
alertDescWraper.className = 'alert-desc-wraper';
alertTitle.className = 'alert-title';
alertDesc.className = 'alert-desc';
button.className = 'close-btn';
button.style.cursor = 'pointer'; 
link.className = 'alert-learn';

wraper.appendChild(checkWraper);
wraper.appendChild(alertDescWraper);
wraper.appendChild(button);
button.appendChild(closeIcon);
checkWraper.appendChild(check);
check.appendChild(icon);
alertDescWraper.appendChild(alertTitle);
alertDescWraper.appendChild(alertDesc);
alertDescWraper.appendChild(link);

function alertStandart(behave = {
    title : 'The action has been succed', 
    desc : 'This action will make you happy more than your day before',
    withLink: false, 
    position: centerTop}) { 

    if (behave.title === undefined && behave.desc === undefined) {
        behave = {
            title : 'The action has been succed', 
            desc : 'This action will make you happy more than your day before', 
            position: behave.position
        }
    } else if(behave.title === undefined) {
        behave = {
            title : '', 
            desc : behave.desc, 
            position: centerTop
        }
        alertDesc.style.cssText = "margin-top:-1px !important;";
    } else if(behave.desc === undefined) {
        behave = {
            title : behave.title, 
            desc : 'This action will make you happy more than your day before', 
            position: centerTop
        }
    } else if(behave.withLink == false) {
        link.innerHTML = "learn more";
    }

    button.addEventListener('click', function() {
            wraper.style.cssText = 'top:-100px; left:0; right:0; opacity:0;';
    });

    wraper.style.cssText = 'top:30px; left:0; right:0; opacity:1; animation: shake .3s .6s,'+behave.position;

    alertTitle.innerHTML = behave.title;
    alertDesc.innerHTML = behave.desc;
    return document.body.appendChild(wraper);
}

alertStandart({
    title : 'bangake',
    desc : 'Data telah berhasil dihapus selama anda menyayangi dan mencitai nya',
    position : centerTop,
});