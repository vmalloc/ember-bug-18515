import { later } from "@ember/runloop";
import { inject as service } from "@ember/service";
import Route from "@ember/routing/route";

export default Route.extend({
  router: service(),
  actions: {
    error(err, transition) {
      let router = this.get("router");
      if (err.errors && err.errors[0].status === "404") {
        transition.abort();
        return later(function() {
          let transition_name = transition.to.name;
          let url = router.urlFor(transition_name, transition.to.params);
          // Workaround for a bug in ember that causes the router to fail if the url starts with a slash
          if (url.startsWith("/")) {
            url = url.substr(1);
          }
          return router.replaceWith("not_found", url);
        });
      }
    },
  },
});
