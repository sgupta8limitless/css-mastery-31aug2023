

window.onload=function()
{

        
    let ml=1715;
    let fullWidth=document.getElementById('slider').offsetWidth;
    let remainingWidth=fullWidth;

    document.getElementById("swipe-left").addEventListener("click",function(){

    

    })




    document.getElementById("swipe-right").addEventListener("click",function(){

       

        if(remainingWidth>ml)
        {
            document.getElementById('slider').style.marginLeft=-ml+"px";
            remainingWidth=remainingWidth-1715;
            ml=ml+1715;
            
        }
        else if(remainingWidth<ml)
        {
            document.getElementById('slider').style.marginLeft=-(fullWidth-remainingWidth)+"px";
        }

        console.log(ml,remainingWidth);
        
        

    })

}
