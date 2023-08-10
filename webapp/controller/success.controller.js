sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sfactor.controller.success", {
            onInit: function () {
                var that = this;
                var oModel = this.getOwnerComponent().getModel();
                var lModel = this.getOwnerComponent().getModel();
                var sPath = "/Picklist('country')";
                var lPath = "/Picklist('language')";
                var count = 0; 
                var top = 100; 
                
                oModel.read(sPath, {
                  async: true,
                  urlParameters: {
                    "$top": top,
                    "$skip": count,
                    "$expand": "picklistOptions/picklistLabels"
                  },
                  
                  success: function(oData) {
                    debugger;
                    var oJsonModel = new sap.ui.model.json.JSONModel();
                    
                  
                    // array for country objects
                    var countryArray = [];
                    
                    // Loop through picklistOptions to fill the array
                    if (oData.picklistOptions && oData.picklistOptions.results) {
                      oData.picklistOptions.results.forEach(function(option) {
                        if (option.picklistLabels && option.picklistLabels.results) {
                          option.picklistLabels.results.forEach(function(label) {
                            // new country object 
                            var countryObject = {
                              CountryCode: option.externalCode, 
                              CountryName: label.label, 
                              Language: label.locale
                            };
                  
                            if(label.locale=='en_US'){
                                countryArray.push(countryObject);


                            }
                          });
                        }
                      });
                    }
                    
                    
                    console.log(countryArray);
                    oJsonModel.setData({country:countryArray});
                    this.getView().setModel(oJsonModel,"countryModel");
                    console.log(oJsonModel.getData());
                  }.bind(this),
                  
                  error: function(oError) {
                    
                  }
                });
                lModel.read(lPath, {
                  async: true,
                  urlParameters: {
                    "$top": top,
                    "$skip": count,
                    "$expand": "picklistOptions/picklistLabels"
                  },
                  
                  success: function(oData) {
                    debugger;
                    var oJsonModel = new sap.ui.model.json.JSONModel();
                    
                  
                    // array for country objects
                    var languageArray = [];
                    
                    // Loop through picklistOptions to fill the array
                    if (oData.picklistOptions && oData.picklistOptions.results) {
                      oData.picklistOptions.results.forEach(function(option) {
                        if (option.picklistLabels && option.picklistLabels.results) {
                          option.picklistLabels.results.forEach(function(label) {
                            // new country object 
                            var countryObject = {
                              // CountryCode: option.externalCode, 
                              languageName: label.label, 
                              Language: label.locale
                            };
                  
                            if(label.locale=='en_US'){
                                languageArray.push(countryObject);


                            }
                          });
                        }
                      });
                    }
                    
                    
                    console.log(languageArray);
                    oJsonModel.setData({language:languageArray});
                    this.getView().setModel(oJsonModel,"languageModel");
                    console.log(oJsonModel.getData());
                  }.bind(this),
                  
                  error: function(oError) {
                    
                  }
                });
  
  
              },
            
            

           
        });
    });
