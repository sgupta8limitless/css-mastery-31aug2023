

window.onload=function()
{

    
    let fullWidth=document.getElementById('slider').offsetWidth;
    let totalCount=(fullWidth/1715)-1;

    let maxSlides=Math.floor(totalCount);
    let lastSlide=totalCount-maxSlides;

    let currentSlide=0;

    document.getElementById("swipe-left").addEventListener("click",function(){

        if(currentSlide>=1 && currentSlide!=totalCount)
        {
            currentSlide--;
             
        }
        else if(currentSlide==totalCount && lastSlide!==0)
        {
            currentSlide-=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1715)+"px";
        console.log(currentSlide,totalCount,lastSlide);

    })




    document.getElementById("swipe-right").addEventListener("click",function(){

        if(currentSlide<maxSlides)
        {
            currentSlide++;
             
        }
        else if(currentSlide==maxSlides && lastSlide!==0)
        {
            currentSlide+=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1715)+"px";
       
       
        console.log(currentSlide,totalCount,lastSlide);

    })

}
