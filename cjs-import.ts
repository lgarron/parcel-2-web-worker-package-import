import { randomScrambleStringForEvent } from "scrambles/dist/cjs/scrambles.js";

(async () => {
  console.log(await randomScrambleStringForEvent("333"));
})();
