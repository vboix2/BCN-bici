
define(['dojo/_base/declare',
  'jimu/BaseWidget',
  'esri/request',
],
function(declare, BaseWidget, esriRequest) {
  var clazz = declare([BaseWidget], {

    name: 'Bicicleta',

    //Capes
    barcelona: null,
    construccio: null,
    altres: null,
    ronda: null,
    carrer: null,
    zona30: null,
    corredor: null,
    bicing:null,
    punts:null,
    serveis:null,
    aparcament: null,
    
    postCreate: function(){
      
      //Layers
      this.barcelona = this.map.getLayer("Carril_bici_1320");
      this.construccio = this.map.getLayer("Carril_bici__en_construcció__6053");
      this.altres = this.map.getLayer("Carril_bici__altres_municipis__6123");
      this.ronda = this.map.getLayer("Ronda_verda_8084");
      this.carrer = this.map.getLayer("Carrers_bici_4466");
      this.zona30 = this.map.getLayer("Zona_30_793");
      this.corredor = this.map.getLayer("Corredors_bici_8375");
      this.bicing = this.map.getLayer("Bicing_884");
      this.punts = this.map.getLayer("Punts_ancoratge_7778");
      this.serveis = this.map.getLayer("Serveis_1266");
      this.aparcament = this.map.getLayer("Aparcament_per_a_bicicletes_1667");

    },

    // Carrils bici

    BotoBarcelona: function(){
      if (!this.barcelona.visible){
        this.barcelona.show();
      } else {
        this.barcelona.hide();
      } 
    },
    BotoConstruccio: function(){
      if (!this.construccio.visible){
        this.construccio.show();
      } else {
        this.construccio.hide();
      } 
    },
    BotoAltres: function(){
      if (!this.altres.visible){
        this.altres.show();
      } else {
        this.altres.hide();
      } 
    },

    // Vies ciclables

    BotoCarrers: function(){
      if (!this.carrer.visible){
        this.carrer.show();
      } else {
        this.carrer.hide();
      } 
    },

    BotoZona: function(){
      if (!this.zona30.visible){
        this.zona30.show();
      } else {
        this.zona30.hide();
      } 
    },

    BotoCorredors: function(){
      if (!this.corredor.visible){
        this.corredor.show();
      } else {
        this.corredor.hide();
      } 
    },

    // Ronda verda

    BotoRonda: function(){
      if (!this.ronda.visible){
        this.ronda.show();
      } else {
        this.ronda.hide();
      } 
    },

    //Bicing

    BotoBicing: function(){
      if (!this.bicing.visible){
        this.bicing.show();
      } else {
        this.bicing.hide();
      } 
    },
    BotoPunts: function(){
      if (!this.punts.visible){
        this.punts.show();
      } else {
        this.punts.hide();
      } 
    },
    BotoAparcament: function(){
      if (!this.aparcament.visible){
        this.aparcament.show();
      } else {
        this.aparcament.hide();
      } 
    },

    BotoServeis: function(){
      if (!this.serveis.visible){
        this.serveis.show();
      } else {
        this.serveis.hide();
      } 
    }
  });
  return clazz;
});