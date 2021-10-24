import mock from "./mock";

import "./data/fakeData";

mock.onAny().passThrough(); // forwards the matched request over network
