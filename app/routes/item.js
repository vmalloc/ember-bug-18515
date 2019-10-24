import Route from "@ember/routing/route";

export default Route.extend({
  model({ item_id }) {
    return this.store.findRecord("item", item_id);
  },
});
