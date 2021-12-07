let select = document.querySelector('#language-select');

//When select option changes. it Means when user select other options
select.addEventListener("change", function () {
    let pyfiles = document.querySelector('.python-files');
    rfiles = document.querySelector('.r-files');
    jupfiles = document.querySelector('.jupyter-files');
    sIndex = select.selectedIndex;
    accordion = document.querySelector('.accordion-collapse')

    // When python is selected then hide jupyter files and R files
    if (sIndex == 0) {
        pyfiles.style.display = 'block';
        jupfiles.style.display = 'none';
        rfiles.style.display = 'none';
    }

    // When R is selected then hide jupyter files and Python files. Show R files
    else if (sIndex == 1) {
        rfiles.style.display = 'block';
        pyfiles.style.display = 'none';
        jupfiles.style.display = 'none';
    }

    // And when Jupyter is selected then hide Python files and R files.Show Jupyter files
    else if (sIndex == 2) {
        jupfiles.style.display = 'block';
        pyfiles.style.display = 'none';
        rfiles.style.display = 'none';
    }
});



//this is the accordion button
let accbtn = document.getElementsByClassName("accordion-btn");
for (let i = 0; i < accbtn.length; i++) {
    //when one of the buttons are clicked run this function
    accbtn[i].onclick = function () {
        //letiables
        let panel = this.nextElementSibling;
        let accContent = document.getElementsByClassName("accordion-content");
        let courseAccordion = document.getElementsByClassName("accordion-btn");
        let accActive = document.getElementsByClassName("accordion-btn active");

        /*if pannel is already open - minimize*/
        if (panel.style.maxHeight) {
            //minifies current pannel if already open
            panel.style.maxHeight = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove("active");
        } else { //pannel isnt open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (let ii = 0; ii < accActive.length; ii++) {
                accActive[ii].classList.remove("active");
            }
            //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
            for (let iii = 0; iii < accContent.length; iii++) {
                this.classList.remove("active");
                accContent[iii].style.maxHeight = null;
            }
            //opens the specified pannel
            panel.style.maxHeight = panel.scrollHeight + "px";
            //adds the 'active' addition to the css.
            this.classList.add("active");
        }
    } //closing to the acc onclick function
} //closing to the for loop.


// form validation check
let sendtBtn = document.querySelector('.send-btn');

sendtBtn.addEventListener('click', function () {
    let nameInput = document.querySelector('.name input');
    companyInput = document.querySelector('.company input');
    messageInput = document.querySelector('.message textarea');

    if (nameInput.value.length < 3) { //if name inputs value is less then 3 character
        // then show the error text
        nameInput.nextElementSibling.style.display = 'block'

    } else if (nameInput.value.length > 3) { //if name inputs value is greater then 3 character
        nameInput.nextElementSibling.style.display = 'none' // then hide the error text
    }
    if (companyInput.value.length < 3) { //if company inputs value is less then 3 character
        companyInput.nextElementSibling.style.display = 'block' // then show the error text

    } else if (companyInput.value.length > 3) { //if Company inputs value is greater then 3 character
        companyInput.nextElementSibling.style.display = 'none' // then hide the error text
    }
    if (messageInput.value.length < 10) { //if message inputs value is less then 3 character
        messageInput.nextElementSibling.style.display = 'block' // then show the error text

    } else if (messageInput.value.length > 10) { //if Company inputs value is greater then 3 character
        messageInput.nextElementSibling.style.display = 'none' // then hide the error text
    }

})