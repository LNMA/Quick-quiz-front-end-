function result(){
    var q1 = document.getElementById("q1b").checked;
    var q2 = document.getElementById("q2a").checked;
    var q3 = document.getElementById("q3a").checked;
    var q4 = document.getElementById("q4a").checked;
    var myResult =0;
    if(q1){
        myResult += 1; 
    }
    if(q2){
        myResult +=1; 
    }
    if(q3){
        myResult +=1; 
    }
    if(q4){
        myResult +=1; 
    }
    window.alert("Your score is "+myResult+" /4");

}