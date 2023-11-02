<template>
  
  <v-container id="myContainer" fluid class="fill-height" >

    <v-banner v-if= "blackoutScreen" id='alert' lines="one" class = "d-flex justify-center" >
        <v-col >
          <v-row class = "d-flex justify-center pa-10">  
            <div class = 'text-h5'>Vault TVs are blacked out</div>
          </v-row>
          <v-row class = "d-flex justify-center ">
            <v-btn color="green" @click = "selectPlayBlackOut('play')"> <v-icon>mdi-play</v-icon>Resume | Play</v-btn>
            </v-row>
        </v-col>
   
    </v-banner>
   
    <v-row id='row-exit' class="myRow">
      <v-col class="myCol"> </v-col>
      <v-col  class="myCol d-flex justify-start align-center">  
        <v-chip class=" door-exit d-flex justify-center" color="red" >
          Exit
          </v-chip> 
        </v-col>
      <v-col class="myCol d-flex justify-center"> <DisplayRX rxLabel = 'TV5' rxID = '5' /></v-col>
      <v-col class="myCol"> <DisplayRX rxLabel = 'TV6' rxID = '6' /></v-col>
    </v-row>

    <v-row class="myRow">
       <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol d-flex justify-end" > <DisplayRX class = "rotate-cw" rxLabel = 'TV7' rxID = '7' /></v-col>

    </v-row>
    <v-row class="myRow">
      <v-col class="myCol d-flex justify-center">  <DisplayRX class = "rotate-ccw" rxLabel = 'TV4' rxID = '4' /></v-col>
      <v-col class="myCol"></v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol " ></v-col>
    </v-row>

    <v-row class="myRow">
      <v-col class="myCol "></v-col>
      <v-col class="myCol d-flex justify-start ">
          <v-chip class=" d-flex justify-center bar rotate-ccw shift-left" color="grey" >
            <v-icon start icon="mdi-glass-wine"></v-icon>
            BAR
          </v-chip> 
      </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol d-flex justify-end" > <DisplayRX class = "rotate-cw" rxLabel = 'TV8' rxID = '8' /></v-col>
    </v-row>

    <v-row class="myRow">
      <v-col class="myCol d-flex justify-center"> <DisplayRX class = "rotate-ccw" rxLabel = 'TV3' rxID = '3' /></v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol " ></v-col>
    </v-row>

    <v-row class="myRow">
      <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol d-flex justify-end " ><DisplayRX class = "rotate-cw" rxLabel = 'TV9' rxID = '9' /></v-col>

    </v-row>
    <v-row class="myRow">
      <v-col class="myCol d-flex justify-center"> <DisplayRX rxLabel = 'DJVault' rxID = '16' /> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol"> </v-col>
      <v-col class="myCol" ></v-col>
    </v-row>

    <v-row class="myRow">
      <v-col class="myCol"></v-col>
      <v-col class="myCol d-flex justify-center"> <DisplayRX rxLabel = 'TV2' rxID = '2' /></v-col>
      <v-col class="myCol d-flex justify-start"> <DisplayRX rxLabel = 'TV1' rxID = '1' /></v-col>
      <v-col class="myCol d-flex justify-center align-center">
      <v-chip class=" door-exit d-flex justify-center" color="green" >
          Door
          </v-chip> 
      </v-col>
      <v-col class="myCol" ></v-col>
    </v-row>

  <!-- Floating Action Button -->
 <v-btn-toggle id='myFab' >
          <!-- <v-btn class = 'button-play-pause' @click = "selectPlayBlackOut('play')">
            <v-icon>mdi-play</v-icon>
            play
          </v-btn> -->

          <v-btn class = 'button-play-pause' @click = "selectPlayBlackOut('blackout')">
            <v-icon>mdi-stop</v-icon>
            blackout
          </v-btn>


        </v-btn-toggle>
    
  </v-container>



</template>

<script>
  //
  import DisplayRX from '@/components/DisplayRX.vue'
  import { useStateStore} from '@/stores/StateStore'

  export default {
    name: "Vault",
    components: {DisplayRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
        
    }),
    computed:{
       blackoutScreen:function(){
        let testArray =[]

        this.stateStore.rxIDs_vault.forEach((rx)=>{
          // console.log(this.stateStore.rxParams[rx]['display'])
          if(this.stateStore.rxParams[rx]['display'] ==2){
           testArray.push('pause')
         }else if(this.stateStore.rxParams[rx]['display'] == 0){
          //  testArray.pop()
         }

        })
        // console.log(testArray)
        return testArray.length !=0 ? true : false

     }
    
    
    },

    methods: {

      selectPlayBlackOut(_mode){
        this.stateStore.play_blackout(_mode)
      }

    },
  async created(){
      console.log('start getRxStatus')
      await this.stateStore.getNodeQuery() //call immediatly 1st 
      this.stateStore.getFeedback()
      this.getRxStatus = setInterval(this.stateStore.getFeedback,5000) //repeat. Bit strange, call getFeedback witout ()
      // this.snapShot = setInterval(this.changeBackgroundImage,2500)
    },
    beforeUnmount(){
      console.log('stop getRxStatus')
      clearInterval(this.getRxStatus)
      //clearInterval(this.snapShot)
    }

  }
</script>

<style scoped>

#myContainer{
  position: relative;
}
#alert{
  position:absolute;
  left:25%;
  width:50%;
  height: 50%;
}
#myFab{
  position:absolute;
  right:50px;
  bottom:20px;
  color: black;
}
.button-play-pause{
  background-color:white;
}
.myCol{
  /* border:solid 1px blue; */
}
.myRow{
  width:100%;
}
.rotate-cw{
   rotate:90deg;
}
.rotate-ccw{
   rotate:-90deg;
}
.bar{
  font-size: 20px;
  width:250px;

}
.door-exit{
    width:150px;
}
.shift-left{
  left: -150px;
}
#row-exit{
  margin-bottom: 50px;
}

</style>




