function initTabNav(){
    const tabMenu= document.querySelectorAll('.js-tabmenu li');
    const tabContent= document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){//se selecionasse uma tag/classe/id que n existisse seria valor 0, portanto daria false e o código n rodaria
        function activeTab(index){
            tabContent.forEach((section)=>{
                section.classList.remove('ativo')
            }) 
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index)=>{
            itemMenu.addEventListener('click', function(){
                activeTab(index)
            })
        })
    }
}
initTabNav()
function initAccordion(){
    const accordionList= document.querySelectorAll('.js-accordion dt');
  if(accordionList.length){
    function activeAccordion(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
        
    }

    accordionList.forEach((item) =>{
        item.addEventListener('click', activeAccordion)
    })
}
}
initAccordion();
function scrollSuave(){
    const linksInternos= document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href= event.currentTarget.getAttribute('href');
        const section= document.querySelector(href);

    section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }); 
    
    }
    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}
scrollSuave();
function initAnimacaoScroll(){
    const sections= document.querySelectorAll('.js-scroll');
    if(sections.length){
    const windowMetade= window.innerHeight*0.6;
    function animaScroll(){
        sections.forEach((section) =>{
            const sectionTop= section.getBoundingClientRect().top;
            const isSectionVisible= (sectionTop - windowMetade) <0;
            if (isSectionVisible){
                section.classList.add('ativo')
            }
        }) 
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
    }}
    initAnimacaoScroll()

