 
//http://blog.da2k.com.br/2015/01/18/requirejs-carregando-javacript-sob-demanda/

 requirejs.config({
    baseUrl: './js',
    paths: {
      googleChartTools: ['https://www.gstatic.com/charts/loader'],
      angularJS: '../node_modules/angular/angular',
      chartUtil: 'chartUtil'
    },

    /* É recomendado  utilizar o shim apenas para os arquivos non-AMD
    caso contrario não é ideal utilizar, pq as configurações nao funcionaram direito
    com AMD scripts. em particular, as exportações e as configuração de inicialização 
    não será acionadas, e a configuração de deps vai ser confuso para esses casos.
    */
    shim: {
        chartUtil : {
          //exports : 'chartUtil',
          deps : ['googleChartTools']
        }
    }
  });

//se nao chamar esta função noa irá funcionar e nem chamar porra nenhuma
 requirejs(['googleChartTools','angularJS','chartUtil'], function(){
    console.log('all ok!')
 })
