function scene2() {
  // Setup Stage
  stage = document.querySelector('#stage');
  setup = document.querySelector('#sets');
  castle = document.querySelector('#castle');
  stageImg = stage.querySelector('#stage-img');
  castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);
  // Setup Cast
  nedContainer = document.createElement('div');
  stage.append(nedContainer);
  // Character 1
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '20%';

  nedContainer.style.border = '2px solid red'
  nedContainer.style.background = 'yellow'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style.border = '2px solid blue'
  leather.style.border = '2px solid green'

  nedContainer.style.height = '44%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'

  ned.style.border = 'none'
  leather.style.border = 'none'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'


  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0


  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  
  sword.style.height = '5%'

  sword.style.transform = 'rotateY(150deg)'

  // Prop 1
  
  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })
  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })
  // Stage direction 2
  // midd;e frame
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })
  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '46%'
  })
  //end frame
  frame(function() {
    sword.style.top = '65%'
    sword.style.left = '51%'
  })

  //joff Head framtes
  frame(function() {
    joff.style.top = '0'
    joff.style.left = '33%'
    joff.style.transform = 'rotateZ(220deg)'

  })
  frame(function() {
    joff.style.top = '27%'
    joff.style.left = '90%'
    joff.style.transform = 'rotateZ(120deg)'

  })
  // Stage direction 2
  // midd;e frame
  frame(function() {
    joff.style.top = '47%'
    joff.style.left = '190%'
    joff.style.transform = 'rotateZ(260deg)'

  })
  frame(function() {
    joff.style.top = '68%'
    joff.style.left = '250%'
    joff.style.transform = 'rotateZ(100deg)'

  })
}
