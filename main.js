function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EU4hP5OtR/', modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    
    }
    
    function gotResults(error, results){
    if (error)
    console.log(error);
    else {
    console.log(results);
    document.getElementById("result_label").innerHTML = results[0].label;
    document.getElementById("CONF").innerHTML = results[0].confidence.toFixed(2)*100 +"%";
    
    img1 = document.getElementById("Alien1")
    img2 = document.getElementById("Alien2")
    img3 = document.getElementById("Alien3")
    img4 = document.getElementById("Alien4")
    
    if(results[0].label == "quack"){
        img1.src="duck.png";
        img2.src="cat.png";
        img3.src="duck.png";
        img4.src="goat.png";
    }
    
    if(results[0].label == "bark"){
        img1.src="duck.png";
        img2.src="cat.png";
        img3.src="duck.png";
        img4.src="goat.png";
    }
    
    if(results[0].label == "meow"){
        img1.src="duck.png";
        img2.src="cat.png";
        img3.src="duck.png";
        img4.src="duck.png";
    }
    
    if(results[0].label == "baaaa"){
        img1.src="duck.png";
        img2.src="cat.png";
        img3.src="duck.png";
        img4.src="duck.png";
    }
    
    }
    }
    