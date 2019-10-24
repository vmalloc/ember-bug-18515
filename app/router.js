import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route("not_found", { path: "/*:unknown" });
  this.route("item", { path: "/items/:item_id" });
});

export default Router;
