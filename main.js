$(document).ready(function(){

    $('#myNameP').on('click', function(){
      //when you click, the function is activated ant the method below runs synchro
        $('#myNameP').addClass('hidden')
        $('#myNameInput').removeClass('hidden')
        $('#myNameInput').trigger('focus')
        $('#myNameInput').val($('#myNameP').text())
        //.val is changing the text...from Grace to Eric for ex and .text is the next function to make this happen

    })

    $('#myNameInput').on('blur', function(){
      //'blur' is when youve clicked away and the value changes to what you entered
        $('#myNameP').text($('#myNameInput').val())
        //myNameP is replace with the text entered in my name input
        $('#myNameP').removeClass('hidden')
        //opposite order of the method above and reassigning the class of hidden from the input to the p tag myNameP
        //bc you want the input to go away
        $('#myNameInput').addClass('hidden')


    })

    $('#bioP').on('click', function(){
        $('#bioTextArea').val($('#bioP').text())
        $('#bioP').addClass('hidden')
        $('#bioTextArea').removeClass('hidden')
        $('#bioTextArea').trigger('focus')

    })

    $('#bioTextArea').on('blur', function(){
        $('#bioP').text($('#bioTextArea').val())
        $('#bioP').removeClass('hidden')
        $('#bioTextArea').addClass('hidden')


    })
})
