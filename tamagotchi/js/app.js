// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
class Tamagotchi{
  // Display the following metrics for your pet:    
  constructor( hunger=10,sleep=10,boredom=10,age=0){
  this. hunger = hunger
  this.sleep = sleep
  this.boredom = boredom
  this.age =age
  //     Increase your pet's age every x minutes
//   repeating to orderedwork at the set time.
//  The bind() method creates a new function that, 
// when called, has its this keyword set to the provided value,
//  with a given sequence of arguments preceding any provided when the new function is called.

      setInterval(
      this.ageUp.bind(this),100000
      )
      setInterval(
      this.hungerGage.bind(this),10000)
      
      
   }
  //  gage up
      hungerGage(){
          const hungerV =document.querySelector('.hungerP')
          this.hunger+=1
          if(this.hunger <11){
              return this.hunger =10
          }
           hungerV.innerHTML =`${this.hunger}`
      }
      
      sleepGage(){
          this.sleep+=1
      }
      
      boredomGage(){
          this.boredom+=1
      }
      
  //    Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. 
   buttonOn(){
   const turnOn =document.querySelector('.onBtn')
         turnOn.addEventListener('click',(event)=>{
         event.preventDefault()
   document.body.style.backgroundColor='skyblue'
   document.body.style.color='black'
   })
   }
      
   buttonOff(){
   const turnOff =document.querySelector('.offBtn')
         turnOff.addEventListener('click',(event)=>{
         event.preventDefault()
   document.body.style.backgroundColor='black'
   document.body.style.color='white'
   })
   }
  // Add the ability to name your pet.
  inputName(){
       let userName =prompt("What is your Pet's name?")
    document.querySelector('#name').innerHTML =`Pet's name is ${userName}`;
          
      }
  //  Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.   
      
  buttonFeed(){
  
  const hunger =document.querySelector('.buttonH')
        hunger.addEventListener('click',(event)=>{
        event.preventDefault()
        this.hunger-=1;
            if(this.hunger === -1 ){
                this.hunger = 10
                alert('your pet is death')
                
            }
           
      
   })
   }
      
  buttonSleep(){
  const sleepV =document.querySelector('.sleepP')    
  const sleep = document.querySelector('.buttonS')
  
        sleep.addEventListener('click',(event)=>{
        event.preventDefault()
        this.sleep-=1
        if(this.sleep === -1){
            this.sleep =0
            alert('your pet is death')
        }
        sleepV.innerHTML =`${this.sleep}`
            
        
            
   })
   }
      
   buttonPlay(){
   const boreV =document.querySelector('.boreP')    
   const boreBtn = document.querySelector('.buttonB')
   boreBtn.addEventListener('click',(event)=>{
   event.preventDefault()
   this.boredom-=1;
   if( this.boredom  ===-1){
   this.boredom =0
   alert('your pet is death')
             }
  boreV.innerHTML =`${this.boredom}`
             
         
             
  })
  }
     
   ageUp(){
   const ageBtn = document.querySelector('.urAge')
         this.age++;
        ageBtn.innerHTML =`${this.age}`     
                       
            console.log(`${this.age}`)  
       
      
  }
      
   growUp(){
      
   }   
      
  }   
      
  const game = new Tamagotchi()
  game.buttonPlay();
  game.buttonOn();
  game.buttonOff();
  game.buttonFeed()
  game.buttonSleep()
  game.ageUp()
  game.growUp()
  
  // game.inputName()
  game.hungerGage()
   game.sleepGage()
  game.boredomGage()
  
  
  