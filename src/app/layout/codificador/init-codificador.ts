export class InitCodificador {

load(){

    if(localStorage.getItem('videoSource')=== null || localStorage.getItem('audioSource')=== null || localStorage.getItem('audioCodec')=== null 
    || localStorage.getItem('audioBitRate')=== null || localStorage.getItem('videoResolution')=== null || localStorage.getItem('videoResolution')=== null
|| localStorage.getItem('videoProfile')=== null || localStorage.getItem('gopSize')=== null || localStorage.getItem('videoBurstSize')=== null
|| localStorage.getItem('outputInterface')=== null || localStorage.getItem('outputFormat')=== null 
){
                 var videoSource = ['SDI','SDI','SDI'];
                 var audioSource = ['Analog Jacks','Analog Jacks','Analog Jacks'];
                 var audioCodec = ['AAC-LC ADTS','AAC-LC ADTS','AAC-LC ADTS'];
                 var audioBitRate = ['64 Kbps','64 Kbps','64 Kbps'];
                 var videoResolution = ['Follow Input','Follow Input','Follow Input'];
                 var rateControl = ['CBR','CBR','CBR'];
                 var videoProfile = ['Baseline','Baseline','Baseline'];
                 var gopSize = ['15 Frames','15 Frames','15 Frames'];
                 var videoBurstSize = ['150ms','150ms','150ms'];
                 var videoCodec = ['H.264','H.264','H.264'];
                 var frameDecimation = ['None','None','None'];
                 var outputInterface = ['Ethernet(VBR)','Ethernet(VBR)','Ethernet(VBR)'];
                 var outputFormat = ['RTP','RTP','RTP'];

                 localStorage.setItem('videoSource', JSON.stringify(videoSource));
                 localStorage.setItem('audioSource', JSON.stringify(audioSource));
                 localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
                 localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
                 localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
                 localStorage.setItem('rateControl', JSON.stringify(rateControl));
                 localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
                 localStorage.setItem('gopSize', JSON.stringify(gopSize));
                 localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
                 localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
                 localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
                 localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
                 localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
    }
    else{

         console.log('Cargando parametros...');
    }
}
    
}