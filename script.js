/** Navigaton */
const dropdownItems = document.querySelectorAll('.dropdown-hover')
const navbarWrapper = document.querySelector('.navbar-wrapper')

dropdownItems.forEach(dropdownItem => {
    console.log(dropdownItem.lastElementChild);
    dropdownItem.addEventListener('mouseover', () => {
        dropdownItem.lastElementChild.style.cssText = 
            'opacity:1; visibility: visible;'
        
        navbarWrapper.style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
    })

    dropdownItem.addEventListener('mouseleave', () => {
        dropdownItem.lastElementChild.style.cssText = 
            'opacity:0; visibility: hidden;'
        navbarWrapper.style.background = 'transparent'
        
    })
})

console.log(dropdownItems)

/** End Navigaton */