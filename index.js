const numberZero=document.getElementById("number-0");
    const UfoBeam=document.getElementById("UFO-beam");

    const setZeroAndBeamAppear=()=>{
        numberZero.removeEventListener("animationend", setZeroAndBeamAppear);

        numberZero.setAttribute("id", "number-0");
        UfoBeam.setAttribute("id", "UFO-beam");
        
        UfoBeam.addEventListener("animationend", setZeroAndBeamDisappear);

    }

    const setZeroAndBeamDisappear=()=>{
        numberZero.removeEventListener("animationend", setZeroAndBeamDisappear);

        numberZero.setAttribute("id", "number-0-soaking");
        UfoBeam.setAttribute("id","UFO-beam-dissapear");

        numberZero.addEventListener("animationend",setZeroAndBeamAppear);
    }
    numberZero.addEventListener("animationend", setZeroAndBeamDisappear) ;