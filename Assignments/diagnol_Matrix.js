
const arr = [   [1, 2, 3],
                [4, 5, 6],
                [9, 8, 9]  
            ]

for(let i=0; i<arr.length; i++)
{
    for(let j=0; j<arr.length; j++)
    {
        console.log(arr[i][j])
    }
    console.log("\n")
}

let leftToRight = 0;
let rightToLeft = 0;
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length; j++)
        {
            if(i==j)
            {
                leftToRight+=arr[i][j];
            }
        }
    }
    console.log("Left To Right = ", leftToRight);
    
    let j = 2;
    for(let i=0; i<arr.length; i++)
    {   
        rightToLeft+=arr[i][j];   
        j-=1;
    }
    console.log("Right To Left = ", rightToLeft);
    let res = Math.abs(leftToRight-rightToLeft);
    console.log(res);