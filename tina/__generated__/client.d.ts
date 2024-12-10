import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2bf194da526000b60263a1b7054a259e5edd6006', queries,  });
export default client;
  