export class InitMultiplexor {
    load(){
        
        if(localStorage.getItem('ASI1Input')=== null || localStorage.getItem('ASI1Layer')=== null || localStorage.getItem('ASI1Output')=== null ||
            localStorage.getItem('ASI2Input')=== null || localStorage.getItem('ASI2Layer')=== null || localStorage.getItem('ASI2Output')=== null ||
        localStorage.getItem('ASI3Input')=== null || localStorage.getItem('ASI3Layer')=== null || localStorage.getItem('ASI3Output')=== null 
        || localStorage.getItem('ASI1Enable')=== null || localStorage.getItem('ASI2Enable')=== null || localStorage.getItem('ASI3Enable')=== null 
        || localStorage.getItem('TableLayer')=== null|| localStorage.getItem('TablePmtPid')=== null|| localStorage.getItem('TableEnable')=== null
        ){
            
            
            var ASI1Input  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI1Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI1Output  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI1Enable = [false,false,false,false,false,false,false,false,false,false];
            localStorage.setItem('ASI1Input', JSON.stringify(ASI1Input));
            localStorage.setItem('ASI1Layer', JSON.stringify(ASI1Layer));
            localStorage.setItem('ASI1Output', JSON.stringify(ASI1Output));
            localStorage.setItem('ASI1Enable', JSON.stringify(ASI1Enable));

            var ASI2Input  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI2Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI2Output  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI2Enable = [false,false,false,false,false,false,false,false,false,false];
            localStorage.setItem('ASI2Input', JSON.stringify(ASI2Input));
            localStorage.setItem('ASI2Layer', JSON.stringify(ASI2Layer));
            localStorage.setItem('ASI2Output', JSON.stringify(ASI2Output));
            localStorage.setItem('ASI2Enable', JSON.stringify(ASI2Enable));

            var ASI3Input  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI3Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI3Output  = ['-','-','-','-','-','-','-','-','-','-'];
            var ASI3Enable = [false,false,false,false,false,false,false,false,false,false];
            localStorage.setItem('ASI3Input', JSON.stringify(ASI3Input));
            localStorage.setItem('ASI3Layer', JSON.stringify(ASI3Layer));
            localStorage.setItem('ASI3Output', JSON.stringify(ASI3Output));
            localStorage.setItem('ASI3Enable', JSON.stringify(ASI3Enable));

            var TableLayer =  ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var TablePmtPid = ['-','-','-'];
            var TableEnable = [false,false,false,false,false,false,false,false];
            localStorage.setItem('TableLayer', JSON.stringify(TableLayer));
            localStorage.setItem('TablePmtPid', JSON.stringify(TablePmtPid));
            localStorage.setItem('TableEnable', JSON.stringify(TableEnable));
    }

    else{}

}
}