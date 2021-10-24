import mock, { withDelay } from "@/fake-db/mock.js";

mock.onGet("api").reply(() => {
  const response = {
    data: "get api",
    code: 200,
    msg: "",
  };
  return withDelay(500, [200, response]);
});
