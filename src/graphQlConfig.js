import Vue from "vue";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone"
  })
});
