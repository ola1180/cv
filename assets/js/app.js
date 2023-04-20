let sideMenuLinks = document.querySelectorAll('.side-menu a')
let sections = document.querySelectorAll('.content .section')

sideMenuLinks.forEach(item => {
    item.addEventListener ('click' , (event) => {
        let helpClass = item.dataset.class

        if(!item.classList.contains('active')) {
            sideMenuLinks.forEach(item => item.classList.remove('active'))
            item.classList.add('active')

            sections.forEach(section => section.classList.remove('active'))
            document.querySelector(`section.${helpClass}`).classList.add('active')


        } 
        event.preventDefault()
    })
})