   let ListOfNames = [
    { 'name': 'sarah', 'lastName': 'kun', 'joinedYear': '2026', 'level': 200, 'Gender': 'F', 'image': 'https://thumbs.dreamstime.com/b/portrait-young-african-american-business-woman-black-peop-isolated-white-background-people-33803836.jpg',  },
    { 'name': 'ceej', 'lastName': 'hen', 'joinedYear': '2025', 'level': 300, 'Gender': 'M', 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06v8Z81RM4xhSEEjJ1ROXNVAnmpPFjwTiInJGy8BD4w&s=10'},
    { 'name': 'stella', 'lastName': 'bail', 'joinedYear': '2022', 'level': 400, 'Gender': 'F', 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78pDXzx0ojE93zEeBfoM-3bfY7tfWiF4YNN8LR5yvWg&s=10' },
    { 'name': 'ceejjay', 'lastName': 'max', 'joinedYear': '2023', 'level': 100, 'Gender': 'M', 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOM2Xwn0dHJpVXG3jI2cRJ2dkQYgsH4Nxc28DFzBoRqQ&s=10' }
]

    let index = 0

    function display() {
           image01.src = ListOfNames[index].image
         nameDisplay.textContent = 'Name:' +  ListOfNames[index].name
         lastname.textContent = 'Last Name:' + ListOfNames[index].lastName
        lastyear.textContent = 'Year joined:' + ListOfNames[index].joinedYear
        result.textContent = 'level:' + ListOfNames[index].level
        Gendertype.textContent = 'Gender:' + ListOfNames[index].Gender
    }
    display()
  
  
~
    function nextButton() {
        

        if (index === ListOfNames.length -1) {
            index = 0
            image01.src = ListOfNames[index]
            
        } else {
            image01.src =` ${ListOfNames[++index]} `
        
        }

        display()


    }

    function previousButton() {
        if (index === 0) { 
            index = ListOfNames.length -1
            image01.src = images[index]
            
        } else {
            image01.src = images[--index]       
        }
         display()
       
        
    }

