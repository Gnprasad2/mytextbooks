window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data! 
    if (event.origin.startsWith('https://n-vokklzzb4awmhctgfsi5lzdbm3ftw54nxpszg2y-0lu-script.googleusercontent.com/userCodeAppPanel')) { 
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data); 
    } else {
      console.log("the message not pertaining to you");
        // The data was NOT sent from your site! 
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return; 
    } 
}); 


//  google translation

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages : 
  'hi,as,bh,bn,dz,gu,kn,ks,ml,mr,ne,or,pa,te,ta,ur,sa,sd,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
