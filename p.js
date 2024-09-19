let n=12;

for(var i =0 ;i<=n;i++ ){
    for (let j = 0; j <=n; j++) {
        if(i+j<=n/2){
           console.log(" * ");
        }
        else{
            console.log(" ");
        }   
        // console.log("\n");
    }
    
}