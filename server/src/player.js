exports.Player = class{

constructor(id){
this.id=id;
this.legacy=0;
this.timeLeft=0;
this.ready=false;
this.holdings={
  
        held: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        allocated: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        buying: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        selling: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
      };

}

}