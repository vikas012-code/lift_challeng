let floor=document.querySelector(".floor");

let submit_btn=document.querySelector("#submit_btn");


submit_btn.addEventListener("click",(e)=>{

    
    //document.querySelector(".lift_btn")?:e.preventDefault();

    e.preventDefault()
    
    let NoOfFloor=document.querySelector("#NoOfFloor");

    let NoOfLift=document.querySelector("#NoOfLift");

    //console.dir(NoOfFloor.value)

    //console.log(NoOfLift.value)

    let N_floor=document.createElement("div")
    N_floor.className="N_floor"
    N_floor.innerHTML=`
                    <div class="lift_btn">
                        <button class="up_btn">up</button>
                        <button class="down_btn">down</button>
                    </div>
                    <div class="lift_space">
                        
                    </div>
                    <div class="floor_no">
                        floor 0
                    </div>`;
    floor.prepend(N_floor)

for(let i=1;i<NoOfFloor.value;i++){
    let N_floor=document.createElement("div")
    N_floor.className="N_floor"
    N_floor.innerHTML=`
                    <div class="lift_btn">
                        <button class="up_btn">up</button>
                        <button class="down_btn">down</button>
                    </div>
                    <div >
                        
                    </div>
                    <div class="floor_no">
                        floor${i}
                    </div>`;
    floor.prepend(N_floor)
}



let lift_space=document.querySelector(".lift_space")

// console.log(lift_space)

let lift=document.createElement("div")
    lift.className="lift"
    lift.innerHTML=`
                <div class="left_door">          
                </div>
                <div class="right_door">          
                </div>
                `;

for(let i=0;i<NoOfLift.value;i++){
    let lift=document.createElement("div")
    lift.className=`lift`
    lift.innerHTML=`
                <div >          
                </div>
                <div >          
                </div>
                `;
    lift.isbusy=false
    lift_space.append(lift)
    //console.dir(lift)

    //console.log(lift.offsetTop)
    //lift.offsetTop="500px"
}

const up_btn=document.getElementsByClassName("up_btn")
const down_btn=document.getElementsByClassName("down_btn")

//console.log(up_btn)

//console.log(down_btn)

let i=0
function movelift(e){
    let j=i;
    console.log("btn location ",e.srcElement.offsetTop);
    let lift=document.getElementsByClassName("lift")
    // console.log(lift)

    //console.log("lift location ",lift[i]?.offsetTop," lift number ",i)

    let distance=null;

    for(let i=0;i<NoOfLift.value;i++){

        console.log("lift location ",lift[i]?.offsetTop," lift number ",i)
        
        if(lift[i]?.isbusy==false){
        
        let Newdistance=(lift[i]?.offsetTop-e.srcElement.offsetTop)


        if(Math.abs(Newdistance)<Math.abs(distance) || distance==null){
            j=i;
            distance=Newdistance+100;
            console.log("it works and values are i j new", i, j, Newdistance)

        }
        console.log(Newdistance ,j)
    }
    }
    
    // console.log("distance  ",distance)

   if(distance!==null){
    //translate:0px ${-distance}px
    lift[j].setAttribute("style",`position: absolute;left:${(j+1)*81}px;top:${N_floor.offsetTop}px; ;transition: top 10s ease;`);
    
    lift[j].isbusy=true;

    // lift[j].style.left=`${}px`;

    
    setTimeout(()=>{
        lift[j].style.top=`${e.srcElement.offsetTop-40}px`
    },0)
    setTimeout(()=>{
        //console.log("j in set ",j)
        
        // console.log("distance",e.srcElement.offsetTop)
        
    

        console.dir(lift[j])
        lift[j].innerHTML=`
                <div class="left_door">          
                </div>
                <div class="right_door">          
                </div>
                `;
        setTimeout(()=>{
            lift[j].innerHTML=`
                <div >          
                </div>
                <div>          
                </div>
                `;
        lift[j].isbusy=false;
        // console.log("lift false =",j)
        },10000)
    },10000)

    // console.log("lift ++ ",i)
   }
   console.log("round finished.....")
}

for(let i=0;i<up_btn.length;i++){
    up_btn[i].addEventListener("click",(e)=>{
        movelift(e)
    })

    down_btn[i].addEventListener("click",(e)=>{
        movelift(e)
    })
}

})
