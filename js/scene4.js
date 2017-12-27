function scene4() {

  // Setup Stage
  stage = document.querySelector('#stage');
  setup = document.querySelector('#sets');
  kingsLanding = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingsLandingImgSrc = kingsLanding.getAttribute('src');
  stageImg.setAttribute('src', kingsLandingImgSrc);
  // Setup Cast

  // Character 1
  cerseiContainer = document.createElement('div')
  stage.append(cerseiContainer)
  cerseiContainer.style.width = '8%'
  cerseiContainer.style.position = 'absolute'
  cerseiContainer.style.height = '31%'
  cerseiContainer.style.top = '35%'
  cerseiContainer.style.left = '75%'
  // create cersei
  cersei = document.querySelector('#cersei')
  cerseiContainer.append(cersei)
  cersei.style.width = '75%'
  cersei.style.position = 'absolute'
  cersei.style.left = '0%'
  cersei.style.transform = 'scaleX(-1)'

  // cersei's clothes
  redDress = document.querySelector('#red-dress')
  cerseiContainer.append(redDress)
  redDress.style.position = 'absolute'
  redDress.style.bottom = 0

  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '35%'
  joffContainer.style.left = '50%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '0%'
  joff.style.transform = 'scaleX(-1)'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0
  kingWardrobe.style.transform = 'scaleX(-1)'

  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  
  sword.style.height = '5%'

  sword.style.top = '45%'
  sword.style.left = '66%'
  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    cerseiContainer.style.left = '70%'
    sword.style.left = '63%'

  })

  // Stage direction 2

  frame(function() {
    cerseiContainer.style.left = '65%'
    sword.style.left = '60%'

  })
  frame(function() {
    cerseiContainer.style.left = '63%'
    sword.style.left = '57%'

  })
  frame(function() {
    cerseiContainer.style.left = '60%'
    sword.style.left = '54%'

  })
  frame(function() {
    cerseiContainer.style.left = '55%'
    sword.style.left = '50%'

  })
  frame(function() {
    cerseiContainer.style.left = '55%'
    sword.style.left = '50%'

  })
  frame(function() {
    cerseiText = document.createElement('div')
    cerseiText.style.position = 'absolute'
    joffText = document.createElement('div')
    joffText.style.position = 'absolute'
    stage.append(joffText)
    stage.append(cerseiText)
    cerseiText.innerText = 'I am your Mother.'

    cerseiText.style.top = '30%'
    cerseiText.style.left = '60%'


  })
  frame(function() {
    joffContainer.style.top = '45%'
    joffText.innerText = 'NOOOOOOO'
    joffText.style.top = '30%'
    joffText.style.left = '50%'
  })
  frame(function() {
    joffContainer.style.top = '55%'
        joffText.style.top = '50%'


  })
  frame(function() {
    joffContainer.style.top = '65%'
        joffText.style.top = '60%'


  })
  frame(function() {
    joffContainer.style.top = '75%'
        joffText.style.top = '70%'


  })
  frame(function() {
    joffContainer.style.top = '85%'
        joffText.style.top = '80%'


  })
  frame(function() {
    joffContainer.style.top = '95%'
        joffText.style.top = '90%'

  })



}
