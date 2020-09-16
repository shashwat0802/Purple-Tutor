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

// --------------------------------carousel for project------------------------
fetch(`json/projects/India.json`)
  .then((res) => res.json())
  .then((data) => {
    const count = data.length
    console.log(count / 3)
    for (let info = 0; info < count; info += 3) {
      //  test carousel div
      var projectCarousel = document.createElement("div")
      projectCarousel.className =
        "mx-auto test-carousel p-2 d-flex flex-column justify-content-end mb-4"

      // project-img div gets inside test carousel div
      var ProjectImg = document.createElement("div")
      ProjectImg.className = "project-img"
      var ImgInProject = document.createElement("img")
      ImgInProject.setAttribute("src", `${data[info].projectImg}`)

      ProjectImg.appendChild(ImgInProject)
      projectCarousel.appendChild(ProjectImg)

      // content wrapper
      var ContentWrapper = document.createElement("div")
      ContentWrapper.className = "d-flex justify-between pl-3"
      // dont forget to add this into project carousel

      // profile pic div
      var studentPic = document.createElement("div")
      studentPic.className = "project-pic mt-1"
      var studentImg = document.createElement("img")
      studentImg.setAttribute("src", `${data[info].image}`)
      studentPic.appendChild(studentImg)
      ContentWrapper.appendChild(studentPic)

      // project content div
      var ProjectContent = document.createElement("div")
      ProjectContent.className =
        "project-content ml-2 d-flex justify-content-end flex-column mb-2"
      // paragraphs creation
      var Pname = document.createElement("p")
      Pname.className = "project-name mb-0"
      var P1 = document.createTextNode(`${data[info].name} , ${data[info].age}`)
      Pname.appendChild(P1)
      var Pcountry = document.createElement("p")
      Pcountry.className = "project-country mb-0 px-2 py-1 text-center"
      var P2 = document.createTextNode("India")
      Pcountry.appendChild(P2)
      // paragraphs into content div
      ProjectContent.appendChild(Pname)
      ProjectContent.appendChild(Pcountry)
      ContentWrapper.appendChild(ProjectContent)

      // adding content wrapper into project carousel
      projectCarousel.appendChild(ContentWrapper)

      // bottom paragraph creation
      var bottomPara = document.createElement("p")
      bottomPara.className = "project-content px-1"
      var P3 = document.createTextNode(`${data[info].description}`)
      bottomPara.appendChild(P3)
      projectCarousel.appendChild(bottomPara)

      // ---------------------------2nd project--------------------------------
      //  test carousel div
      var projectCarousel2 = document.createElement("div")
      projectCarousel2.className =
        "mx-auto test-carousel p-2 flex-column justify-content-end mb-4 d-none d-md-flex"

      // project-img div gets inside test carousel div
      var ProjectImg2 = document.createElement("div")
      ProjectImg2.className = "project-img"
      var ImgInProject2 = document.createElement("img")
      ImgInProject2.setAttribute("src", `${data[info + 1].projectImg}`)

      ProjectImg2.appendChild(ImgInProject2)
      projectCarousel2.appendChild(ProjectImg2)

      // content wrapper
      var ContentWrapper2 = document.createElement("div")
      ContentWrapper2.className = "d-flex justify-between pl-3"
      // dont forget to add this into project carousel

      // profile pic div
      var studentPic2 = document.createElement("div")
      studentPic2.className = "project-pic mt-1"
      var studentImg2 = document.createElement("img")
      studentImg2.setAttribute("src", `${data[info + 1].image}`)
      studentPic2.appendChild(studentImg2)
      ContentWrapper2.appendChild(studentPic2)

      // project content div
      var ProjectContent2 = document.createElement("div")
      ProjectContent2.className =
        "project-content ml-2 d-flex justify-content-end flex-column mb-2"
      // paragraphs creation
      var Pname2 = document.createElement("p")
      Pname2.className = "project-name mb-0"
      var P12 = document.createTextNode(
        `${data[info + 1].name} , ${data[info + 1].age}`
      )
      Pname2.appendChild(P12)
      var Pcountry2 = document.createElement("p")
      Pcountry2.className = "project-country mb-0 px-2 py-1 text-center"
      var P22 = document.createTextNode("India")
      Pcountry2.appendChild(P22)
      // paragraphs into content div
      ProjectContent2.appendChild(Pname2)
      ProjectContent2.appendChild(Pcountry2)
      ContentWrapper2.appendChild(ProjectContent2)

      // adding content wrapper into project carousel
      projectCarousel2.appendChild(ContentWrapper2)

      // bottom paragraph creation
      var bottomPara2 = document.createElement("p")
      bottomPara2.className = "project-content px-1"
      var P32 = document.createTextNode(`${data[info + 1].description}`)
      bottomPara2.appendChild(P32)
      projectCarousel2.appendChild(bottomPara2)

      // -------------------------------3rd project div---------------------------
      //  test carousel div
      var projectCarousel3 = document.createElement("div")
      projectCarousel3.className =
        "mx-auto test-carousel p-2 d-lg-flex d-none flex-column justify-content-end mb-4"

      // project-img div gets inside test carousel div
      var ProjectImg3 = document.createElement("div")
      ProjectImg3.className = "project-img"
      var ImgInProject3 = document.createElement("img")
      ImgInProject3.setAttribute("src", `${data[info + 2].projectImg}`)

      ProjectImg3.appendChild(ImgInProject3)
      projectCarousel3.appendChild(ProjectImg3)

      // content wrapper
      var ContentWrapper3 = document.createElement("div")
      ContentWrapper3.className = "d-flex justify-between pl-3"
      // dont forget to add this into project carousel

      // profile pic div
      var studentPic3 = document.createElement("div")
      studentPic3.className = "project-pic mt-1"
      var studentImg3 = document.createElement("img")
      studentImg3.setAttribute("src", `${data[info + 2].image}`)
      studentPic3.appendChild(studentImg3)
      ContentWrapper3.appendChild(studentPic3)

      // project content div
      var ProjectContent3 = document.createElement("div")
      ProjectContent3.className =
        "project-content ml-2 d-flex justify-content-end flex-column mb-2"
      // paragraphs creation
      var Pname3 = document.createElement("p")
      Pname3.className = "project-name mb-0"
      var P13 = document.createTextNode(
        `${data[info + 2].name} , ${data[info + 2].age}`
      )
      Pname3.appendChild(P13)
      var Pcountry3 = document.createElement("p")
      Pcountry3.className = "project-country mb-0 px-2 py-1 text-center"
      var P23 = document.createTextNode("India")
      Pcountry3.appendChild(P23)
      // paragraphs into content div
      ProjectContent3.appendChild(Pname3)
      ProjectContent3.appendChild(Pcountry3)
      ContentWrapper3.appendChild(ProjectContent3)

      // adding content wrapper into project carousel
      projectCarousel3.appendChild(ContentWrapper3)

      // bottom paragraph creation
      var bottomPara3 = document.createElement("p")
      bottomPara3.className = "project-content px-1"
      var P33 = document.createTextNode(`${data[info + 2].description}`)
      bottomPara3.appendChild(P33)
      projectCarousel3.appendChild(bottomPara3)

      // add all 3 divs into the container and add that container into the c-inner
      var Container = document.createElement("div")
      Container.className = "carousel-container d-flex justify-content-between"
      Container.appendChild(projectCarousel)
      Container.appendChild(projectCarousel2)
      Container.appendChild(projectCarousel3)

      // condition for active class ------------- important------------------------
      var pCarouselItem = document.createElement("div")
      if (info === 0) {
        pCarouselItem.className = `carousel-item active`
      }
      if (info !== 0) {
        pCarouselItem.className = `carousel-item`
      }
      pCarouselItem.setAttribute("data-interval", "6000")
      pCarouselItem.appendChild(Container)
      var pCarousel = document.getElementById("c-inner2")
      pCarousel.appendChild(pCarouselItem)
    }
    // for each ends
  })
