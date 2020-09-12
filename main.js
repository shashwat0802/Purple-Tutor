// getting the user location

// $.getJSON("https://api.ipregistry.co/?key=rw72p2jdyxaa5b", function (json) {
//   var countrySpecify = json["location"]["country"]["name"]
//   console.log("Your country is " + json["location"]["country"]["name"])
//   console.log(countrySpecify)

// fetching data from json file
fetch(`json/India.json`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((info) => {
      // testimonial wrapper
      var testimonial = document.createElement("div")
      testimonial.className = "testimonial-wrapper mx-auto"
      // upper area
      var topRow = document.createElement("div")
      topRow.className = "upper-area p-2 d-flex justify-content-md-center"
      testimonial.appendChild(topRow)
      // bottom area
      var bottomRow = document.createElement("div")
      bottomRow.className = "bottom-area p-2 p-md-3 text-left text-md-center"
      testimonial.appendChild(bottomRow)

      // upper area wrapper
      var personInfo = document.createElement("div")
      personInfo.className = "person-info d-flex justify-content-between"
      topRow.appendChild(personInfo)

      // profile pic
      var profilePic = document.createElement("div")
      profilePic.className = "profile-pic mt-2 mt-md-0"
      var img = document.createElement("img")
      img.setAttribute("src", `${info.image}`)
      profilePic.appendChild(img)
      personInfo.appendChild(profilePic)

      // profile content
      var profileContent = document.createElement("div")
      profileContent.className = "profile-content ml-2"

      // paragraphs inside content
      var country = document.createElement("p")
      var name = document.createElement("p")
      var course = document.createElement("p")
      country.className = "country mb-0 py-1 px-md-3"
      name.className = "name mb-0"
      course.className = "course mb-0"

      var p1 = document.createTextNode(`India`)
      country.appendChild(p1)
      var p2 = document.createTextNode(`${info.name}`)
      name.appendChild(p2)
      var p3 = document.createTextNode(`${info.age}`)
      course.appendChild(p3)
      profileContent.appendChild(country)
      profileContent.appendChild(name)
      profileContent.appendChild(course)

      // adding content to person-info
      personInfo.appendChild(profileContent)

      // bottom area content
      var statement = document.createElement("p")
      var p4 = document.createTextNode(`${info.testimony}`)
      statement.appendChild(p4)
      bottomRow.appendChild(statement)

      // adding testimonial wrapper to carousel inner
      var Carousel = document.getElementById("c-inner")
      var CarouselItem = document.createElement("div")
      CarouselItem.className = `carousel-item ${info.active}`
      CarouselItem.setAttribute("data-interval", "3000")
      CarouselItem.appendChild(testimonial)
      Carousel.appendChild(CarouselItem)
    })
  })
// })
