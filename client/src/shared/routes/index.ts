export const ROUTES = {
  home: process.env.PUBLIC_URL + "/",
  postRefix: "post_",
  get post() {
    return process.env.PUBLIC_URL + "/" + this.postRefix;
  },
};
