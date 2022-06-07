import { add } from "./helpers";

add.li("Line 3");

function callback(message) {
  add.li(message);
}
function greeting(message, cb) {
  let start = Date.now();
  for (let i = 0; i < 10000000000; i++) {
    //do nothing
  }
  add.li(`Took ${Date.now() - start}ms`);
  cb(message);
}

greeting("hello from line 18", callback);

add.li("Line 19");

add.li("Line 21");
