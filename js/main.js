let Match = {
    restart: ()=>{
      Match.flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
      Match.clear()
      Match.randomize()
    },
    removeEvents:()=>{
      document.querySelectorAll('section').forEach(x=>x.removeEventListener("click", Match.flip))
    },
    addEvents: ()=>{
      document.querySelectorAll('section').forEach(x=>x.addEventListener("click", Match.flip))
    },
    choices: [],
    randomArray: [],
    randomArray2: [],
    cardsArray: [],
  
    randomize: ()=>{
      Match.cardsArray=[]
      Match.randomArray=[]
      Match.randomArray2=[]
      while(Match.randomArray.length<6){
        Match.randomArray.push(Math.floor(Math.random()*6))
        Match.randomArray = [...new Set(Match.randomArray)]
      }
      while(Match.randomArray2.length<6){
        Match.randomArray2.push(Math.floor(Math.random()*6))
        Match.randomArray2 = [...new Set(Match.randomArray2)]
      }
      let offset = Math.ceil(25*Math.random())
      Match.cardsArray = Match.randomArray.concat(Match.randomArray2)
      Match.cardsArray.forEach((x,i)=>{document.querySelectorAll('section')[i].classList=`card${x+offset} flip`})
      console.log(Match.cardsArray)
    },
    flipped: [0,0,0,0,0,0,0,0,0,0,0,0],
    flip: (e)=>{
      if(!Match.flipped[e.target.id]){
      Match.removeEvents()
        Match.choices.push(e.target.id)
        console.log(Match.choices)
        e.target.classList.toggle("flip")
        Match.flipped[e.target.id] = 1
  
      if (Match.choices.length===2){
        Match.check()
      }else{
        Match.addEvents()
      }
    }
    },
    check: ()=>{
  if(Match.cardsArray[Match.choices[0]]!==Match.cardsArray[Match.choices[1]]){
    setTimeout(()=>{
    document.querySelectorAll('section')[Match.choices[0]].classList.toggle('flip')
    document.querySelectorAll('section')[Match.choices[1]].classList.toggle('flip')
    Match.flipped[Match.choices[0]]=0
    Match.flipped[Match.choices[1]]=0
    Match.addEvents()
    Match.clear()
  },1000)
  }else{
  Match.clear()
  Match.addEvents()
  
  }},
  
    clear: ()=>{
  Match.choices = []
  },
  }
  //============Adds Event Listeners===============//
  Match.randomize()
  Match.addEvents()