<template>
  <v-container id="myContainer" fluid class = "fill-height">

        <v-banner v-if= "blackoutScreen" id='alert' lines="one" class = "d-flex justify-center" >
          <v-col >
          <v-row class = "d-flex justify-center pa-10">  
            <div class = 'text-h5'>Bank TVs are blacked out</div>
          </v-row>
          <v-row class = "d-flex justify-center ">
            <v-btn color="green" @click = "selectPlayBlackOut('play')"> <v-icon>mdi-play</v-icon>Resume | Play</v-btn>
            </v-row>
          </v-col>
        </v-banner>

        <v-row class = "d-flex justify-center">
            <StageProjectors :rxID_left = "15" :rxID_right = "19"/>
        </v-row>

      <v-row id='row-2' class='myRow'>
          <v-col class="myCol d-flex justify-center" >    
            <PillarTVs :pillarID = "1" :rxID_top = '23'  :rxID_left = '24' :rxID_right = '25' :rxID_bottom = '26'/>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col class="myCol d-flex justify-center">
              <PillarTVs :pillarID = "4" :rxID_top = '35'  :rxID_left = '36' :rxID_right = '37' :rxID_bottom = '38'/>
          </v-col>
      </v-row>

        <v-row id = 'row-3' class='myRow'>
          <v-col></v-col>
          <v-col class="myCol d-flex justify-center"> 
            <PillarTVs :pillarID = "2" :rxID_top = '27'  :rxID_left = '28' :rxID_right = '29' :rxID_bottom = '30'/>
          </v-col>
          <v-col class="myCol d-flex justify-center">
            <PillarTVs :pillarID = "5" :rxID_top = '39'  :rxID_left = '40' :rxID_right = '41' :rxID_bottom = '42'/>
          </v-col>
          <v-col></v-col>
      </v-row>

      <v-row id = "row-4" class='myRow'>
          <v-col class="myCol d-flex justify-center">    
            <PillarTVs :pillarID = "3" :rxID_top = '31'  :rxID_left = '32' :rxID_right = '33' :rxID_bottom = '34'/>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col class="myCol d-flex justify-center">
              <PillarTVs :pillarID = "6" :rxID_top = '43'  :rxID_left = '44' :rxID_right = '45' :rxID_bottom = '46'/>
          </v-col>
      </v-row>


        <v-row id = "row-5" class='myRow' >
          <v-col></v-col>
          <v-col class = "myCol d-flex justify-end">
                <DisplayRX rxLabel = 'Bar1-TV1' rxID = '10' />
          </v-col>
          <v-col class = "myCol d-flex justify-start">
                <DisplayRX rxLabel = 'Bar1-TV2' rxID = '11' />

          </v-col>
          <v-col class = "myCol d-flex justify-end">
                <DisplayRX rxLabel = 'Bar2-TV1' rxID = '12' />

          </v-col>
          <v-col class = "myCol d-flex justify-start">
                <DisplayRX rxLabel = 'Bar2-TV2' rxID = '13' />
          </v-col>
          <v-col></v-col>
      </v-row>

      <v-row id='row-6' class='myRow'>
            <v-col class = "myCol d-flex justify-center">
              <DisplayRX rxLabel = 'DJ' rxID = '14' />
            </v-col>
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
  import { useStateStore} from '@/stores/StateStore'
  import StageProjectors from '@/components/StageProjectors.vue'
  import PillarTVs from '@/components/PillarTVs.vue'
  import DisplayRX from '@/components/DisplayRX.vue'

  export default {
    name: "Bank",
    props:[],
    components:{PillarTVs,StageProjectors,DisplayRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },
    data: () => ({
      
    }),
    methods: {
        selectPlayBlackOut(_mode){
        this.stateStore.play_blackout(_mode)
      }

    },
  computed:{
       blackoutScreen:function(){
        let testArray =[]

        this.stateStore.rxIDs_bank.forEach((rx)=>{
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
  async created(){
      console.log('start getRxStatus')
      await this.stateStore.getNodeQuery() //call immediatly 1st time
      // this.stateStore.getFeedback()
      this.getRxStatus = setInterval(this.stateStore.getFeedback,5000) //repeat. Bit strange, call getFeedback witout ()
      // this.snapShot = setInterval(this.changeBackgroundImage,2500)
    },
    beforeUnmount(){
      console.log('stop getRxStatus')
      clearInterval(this.getRxStatus)
      //clearInterval(this.snapShot)
    }


   
  };

</script>

<style scoped>
#myContainer{
  /* border: solid 1px green; */
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
.myRow{
  /* border: solid 1px red; */
  margin:0px;
  width:100%
}
.myCol{
  /* border: solid 1px blue; */
  margin:10px;
}

#row-2,#row-3,#row-4,#row-5,#row-6{
  margin-top:-20px
}


</style>
