

    // --------copy js
  const cpyText = document.getElementById('cpyText');

  const cpyBtn = document.getElementById('cpyBtn');

  cpyBtn.addEventListener('click', ()=>{
    /*
      navigator.clipboard.writeText এটা লিখা copy করার জন্য ।
      cpyText.value এটা হল input এর value catch করার জন্য ।
    */
    navigator.clipboard.writeText(cpyText.value);
    alert('Copy Success')
  })


  // -----js cut
  const cutText = document.getElementById('cutText');

  const cutBtn = document.getElementById('cutBtn');

  cutBtn.addEventListener('click', ()=>{
    /*
      navigator.clipboard.writeText এটা লিখা copy or cut করার জন্য ।
      cpyText.value এটা হল input এর value catch করার জন্য ।
    */
    navigator.clipboard.writeText(cutText.value);

    // cut করে শেষে input box খালি হয়ে যাবে ।
    cutText.value = '';
  })



    // -----pasteText js
    const pasteText = document.getElementById('pasteText');

    const pasteBtn = document.getElementById('pasteBtn');

    pasteBtn.addEventListener('click', ()=>{
    
        // input এর value null করা হয়েছে ।
        pasteText.value = '';

        // readText() দিয়ে value গ্রহণ করা হয় ।
        // receive করা হয় ।
        navigator.clipboard.readText()


        /*
            parameter নেয়া হয়েছে text
            pasteText.value = text;
        */
        .then(function(text){
            pasteText.value = text;
        })
        
    })


