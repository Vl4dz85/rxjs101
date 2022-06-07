import { add } from "./helpers";

add.li("Line 3");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are complete");
  }, 5000);
});

p.then((message) => add.li(message));

add.li("Line 22");
