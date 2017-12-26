function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)
  // Setup Cast
  danerys = document.querySelector('#danerys')
  drogo = document.querySelector('#drogo')
  blueDress = document.querySelector('#blue-dress')
  bulkyMan = document.querySelector('#bulky-man')
  // Character 1
  danerysContainer = document.createElement('div')
  danerysContainer.append(danerys)
  danerysContainer.append(blueDress)
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '44%'
  danerysContainer.style.top = '44%'
  danerysContainer.style.left = '20%'
  danerys.style.position = 'absolute'
  danerys.style.top = 0
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  // Character 2
  drogoContainer = document.createElement('div')
  drogoContainer.append(drogo)
  drogoContainer.append(bulkyMan)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '10%'
  drogoContainer.style.height = '44%'
  drogoContainer.style.top = '44%'
  drogoContainer.style.right = '20%'
  drogo.style.position = 'absolute'
  drogo.style.top = 0
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0
  // Setup Props
  stage.append(danerysContainer)
  stage.append(drogoContainer)
  egg = document.querySelector('#egg')
  stage.append(egg)
  // Prop 1
  egg.style.position = 'absolute'
  egg.style.top = '55%'
  egg.style.left = '25%'
  egg.style.width = '10%'
  egg.style.height = '20%'
  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '30%'
  })



  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '35%'
  })
  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '40%'
  })



  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '50%'
  })

  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '55%'
  })
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '60%'
  })

  // round 2 throwing
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '55%'
  })
  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '50%'
  })
  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '45%'
  })
  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '40%'
  })
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '35%'
  })
  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '30%'
  })

}
