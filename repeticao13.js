let arr = [7,4,8,1,4,9,6];
let media = (temp[0]+temp[1]+temp[2])/3;

if(arr[0]<arr[1] && arr[0]<arr[2]){
    if(arr[1]<arr[2]){
        console.log('maior '+arr[1]);
    }
    else{
        console.log('maior '+temp[2]);
    }
    console.log('menor '+temp[0]);
    console.log('média '+media);
}
else if(temp[1]<temp[2]){
    console.log('menor '+temp[1]);
    console.log('maior '+temp[2]);
    console.log('média '+media);
}
else{
    console.log('menor '+temp[2]);
    console.log('maior '+temp[1]);
    console.log('média '+media);
}