<template>
  <div class = 'pillar-container'>

    <v-row class ='d-flex align-center'>
        <v-col  >  </v-col>
        <v-col class = "myCol">     
            <button class="button" :class= "{merged:stateStore.rxParams[rxID_top]['vw_status'] != 0, notDetected: (stateStore.rxParams[rxID_top]['chSelect'] == 'not detected' || stateStore.rxParams[rxID_top]['chSelect'] == 'error')}" @click = "selectRX(rxID_top)">
                <div class ='rx-id'>{{rxID_top}}</div>
                <div class ='rx-ch-select'>{{stateStore.rxParams[rxID_top]['chSelect']}}</div>
            </button></v-col>
        <v-col >  </v-col>
    </v-row>

     <v-row >
        <v-col class = "myCol d-flex align-center">    
            <button class="button shift-right rotate-ccw90" :class= "{merged:stateStore.rxParams[rxID_left]['vw_status'] != 0, notDetected: (stateStore.rxParams[rxID_left]['chSelect'] == 'not detected' || stateStore.rxParams[rxID_left]['chSelect'] == 'error') }" @click = "selectRX(rxID_left)">
                <div class ='rx-id'>{{rxID_left}}</div>
                <div class ='rx-ch-select'>{{stateStore.rxParams[rxID_left]['chSelect']}}</div>
            </button>
        </v-col>
        <v-col  class = "myCol d-flex justify-center">     
            <button class="button-pillar" @click = "selectPillar(pillarID)"><v-icon icon="mdi-circle-expand"></v-icon> <div>{{pillarID}}</div></button>
        </v-col>
        <v-col  class = "myCol d-flex align-center">  
            <button class="button shift-left rotate-cw90" :class= "{merged:stateStore.rxParams[rxID_right]['vw_status'] != 0, notDetected: (stateStore.rxParams[rxID_right]['chSelect'] == 'not detected' || stateStore.rxParams[rxID_right]['chSelect'] == 'error')}" @click = "selectRX(rxID_right)">
                <div class ='rx-id'>{{rxID_right}}</div>
                <div class ='rx-ch-select'>{{stateStore.rxParams[rxID_right]['chSelect']}}</div>
            </button>
        </v-col>
    </v-row>

     <v-row>
        <v-col class = "myCol"></v-col>
        <v-col class = "myCol d-flex align-center">  
            <button class="button" :class= "{merged:stateStore.rxParams[rxID_bottom]['vw_status'] != 0, notDetected: (stateStore.rxParams[rxID_bottom]['chSelect'] == 'not detected' || stateStore.rxParams[rxID_bottom]['chSelect'] == 'error')}" @click = "selectRX(rxID_bottom)">
               <div class ='rx-id'>{{rxID_bottom}}</div>
                <div class ='rx-ch-select'>{{stateStore.rxParams[rxID_bottom]['chSelect']}}</div>
            </button>
        </v-col>
        <v-col class = "myCol"></v-col>
    </v-row>
  
  </div>
  

</template>

<script>
 import { useStateStore} from '@/stores/StateStore'
 import DisplayRX from '@/components/DisplayRX.vue'


  export default {
    name: "PillarTVs",
    props:['rxID_top','rxID_left','rxID_right','rxID_bottom','pillarID'],
    components:{DisplayRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },
    data: () => ({
      
    }),
    methods: {
    selectRX(_rxID){
        this.stateStore.selectRX(_rxID)
        this.stateStore.rxSelectedLabel = `${_rxID}`
        this.$router.push('/videoinputs')
       
      },
    selectPillar(){
        this.stateStore.mergeType = '4'
        this.stateStore.rxSelectedLabel = `Pillar ${this.pillarID}`
        this.stateStore.rxIdsToMerge = [this.rxID_top,this.rxID_left,this.rxID_right,this.rxID_bottom]
        this.$router.push('/videoinputs')
      }

    },
    computed:{

    }
   
  };

</script>

<style scoped>
.pillar-container{
   /* border:solid 1px red; */
   width:230px;
   /* height: 200px; */
}
.myCol{
    /* border:solid 1px red; */
    padding: 5px;
}

.button-pillar{
  position: relative;
  border: 1px solid white;
  color: white;
  width: 60px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  /* margin: 4px 2px; */
  padding:0;
  cursor: pointer;
  border-radius: 10px;
}
.button-pillar:hover {
  background-color: rgb(52,199,89);
  color: white;
}

.button {
  position: relative;
  border: 1px solid white;
  color: white;
  width: 75px;
  height: 35px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  /* margin: 4px 2px; */
  padding:0;
  cursor: pointer;
  border-radius: 6px;
}
.button:hover {
  background-color: rgb(52,199,89);
  color: white;
}
.merged{
  border:none;
  background-color:rgb(0,122,255);
}
.notDetected
{
  cursor: not-allowed;
  pointer-events: none;
  border: none;
  background-color: rgb(255,59,48);
  opacity: 0.2;
}

.shift-left{
    left:-20px;
}
.shift-right{
    right:-20px;
}
.rx-id{
  position: absolute;
  top:0.25em;
  left: 0.5em;;
  font: .8em sans-serif;
}
.rx-ch-select{
  position:relative;
  bottom: -0.em;
  font: 0.8em sans-serif;
}
.rotate-cw90{
    rotate:90deg;
}
.rotate-ccw90{
    rotate:-90deg;
}


</style>

