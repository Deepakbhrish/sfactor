/*global QUnit*/

sap.ui.define([
	"sfactor/controller/success.controller"
], function (Controller) {
	"use strict";

	QUnit.module("success Controller");

	QUnit.test("I should test the success controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
