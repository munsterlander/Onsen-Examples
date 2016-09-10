var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
    // Make sure you update the XXXXXXXXXXXXXXXXXX/XXXXXX to your appropriate Google Admob key!
        banner: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX',
       // interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX',
       // interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX',
        // interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXXXX/XXXXXX'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner, 
        isTesting: false,
        overlap: false, 
        offsetTopBar: false, 
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        bgColor: 'black'
    } );
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}

