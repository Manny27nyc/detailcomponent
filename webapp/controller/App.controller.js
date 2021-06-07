sap.ui.define([
	"be/wl/zcomploaderlib/cl/BaseController",
	"sap/ui/model/json/JSONModel",
	"be/wl/zcomploaderlib/library"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, CompLib) {
		"use strict";

		return Controller.extend("be.wl.detailcomponent1.controller.App", {
			onInit: function () {
				Controller.prototype.onInit.apply(this, arguments);
			},
			onUpdateInput: function (channel, action, input) {
				this.input = input;
				this.setModel(new JSONModel(input.config), "config");
				this.getModel().metadataLoaded().then(() => this.displayItem(input.data.item))
			},
			displayItem: function (item) {
				var path = this.getModel().createKey("/FlightCollection", item);
				this.getView().bindElement({ path: path });
			},
			showMore: function (event) {
				this.getOwnerComponent().fireAction({
					type: CompLib.CentralEntryPointType.Navigate,
					data: "Show More details"
				});
			},
			goBack: function (event) {
				this.getOwnerComponent().fireAction({
					type: CompLib.CentralEntryPointType.Back
				});
			}
		});
	});
