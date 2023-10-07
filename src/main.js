$(document).ready(function(){

    function shovHeader2(){
        $('#header2').hide()
        $('#open').click(()=>{
            if($('#open').hasClass('hide')){
                $('#open').removeClass("fa-solid fa-2x fa-bars")
                $('#open').addClass("fa-sharp fa-solid fa-2x fa-circle-xmark")
                $('#header2').fadeIn()
                $('#open').removeClass("hide")
            }else{
                $('#open').removeClass('fa-sharp fa-solid fa-2x fa-circle-xmark')
                $('#open').addClass("fa-solid fa-2x fa-bars")
                $('#header2').fadeOut()

                $('#open').addClass("hide")
            }
        })
    }
    shovHeader2()
    function changeFeatures(){
        $('#article').children().each((index,element)=> {
            $(element).click(()=>{
                if(element.id === 'tab1'){
                    $('#currentImg').attr('src','./images/illustration-features-tab-1.png')
                    $('#tab1').addClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#tab1').siblings().removeClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#curHead').html("Bookmark in one click")
                    $('#curPara').html(`Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.`)
                }
                if(element.id === 'tab2'){
                    $('#currentImg').attr('src','./images/illustration-features-tab-2.png')
                    $('#tab2').addClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#tab2').siblings().removeClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#curHead').html("Intelligent search")
                    $('#curPara').html(`Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your boo`)
                }
                if(element.id === 'tab3'){
                    $('#currentImg').attr('src','./images/illustration-features-tab-3.png')
                    $('#tab3').addClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#tab3').siblings().removeClass('underline underline-offset-[16px] decoration-4 decoration-[#FA5A5B]')
                    $('#curHead').html("Share your bookmarks")
                    $('#curPara').html(`Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of `)
                }
            })
        })

    }

    changeFeatures()
    function showReponse(){
        // loop to slideUp the div from n1 to n4
        for(let i=1;i<=4;i++){
            $(`#n${i}`).children('p').slideUp()
        }
        // loop to slideToggle the div from n1 to n4 when click
        for (let i = 1; i <= 4; i++) {
            $(`#n${i}`).click(() => {
                $(`#n${i} p`).slideToggle();
                if($(`#n${i}`).find('i').hasClass('fa-chevron-down')){
                    $(`#n${i}`).find('i').removeClass('fa-chevron-down text-[#5368DF]')
                    $(`#n${i}`).find('i').addClass('fa-chevron-up text-[#FA5A5B]')
                }else{
                    $(`#n${i}`).find('i').addClass('fa-chevron-down text-[#5368DF]')
                    $(`#n${i}`).find('i').removeClass('fa-chevron-up text-[#FA5A5B]')
                }            
            });
        }
    }

    showReponse()


    function checkEmail(){
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = $('#email').val().trim()
        return emailPattern.test(email)      
    }
    $('#result').fadeOut()
    $("#symbol").hide()
    $('#form').on('submit', (event) => {  
        if(!checkEmail()){
            event.preventDefault()
            $('#result').fadeIn()
            $("#symbol").fadeIn()
            $('#email').addClass('border-red-500')
            setTimeout(()=>{
                $('#result').fadeOut()
                $("#symbol").fadeOut()
                $('#email').removeClass('border-red-500')
            },1500)
        }
    })

    $(window).on('scroll',showScrollBtn)
    function showScrollBtn(){       
        $(window).scrollTop() > 500 ? $('#up').css('right','20px') : $('#up').css('right','-50px')
    }
    $('#up').click(()=>{
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })

    // function to change the color of the scroll button 
    function changeUpColor(){
        let color = ["#FA5A5B","#5368DF","#29376b","#212529","#e59bb7"]
        setInterval(()=>{
            $('#up i').css({
                'color': color[Math.floor(Math.random() * 5)],
                'transition': 'color 1s ease'
              });
        },1000)
    }
    changeUpColor()



    
// / border-[#FA5A5B]
})
