import { add } from "./helpers";

add.li("Line 3");

async function runPromise() {
  add.li("Line 6");
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We are complete");
    }, 5000);
  });
  const message = await p;
  add.li("line 19");
}

runPromise();

add.li("Line 18");
