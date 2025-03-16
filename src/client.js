import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client =  createClient({
    projectId: 's0yiz53x',
    dataset: "production",
    apiVersion: "2022-12-07",
    useCdn: true,
    token: 'skctHo0pIOjANJMsSooq0rc4ETTUWM3gX9MWZfFxglkSzIbqq5WuOgO5KAPMxQdhVPyIUXdG48ezzEdVCqNJtfVFi3K8OVgkCHpy9Uy7Qmzw2xe8DZKFPluGTWzCPpylNXKXlYXdzi5X2tZvjvJ4aL2iwf9Bt5WFMx9se6jPQPs18MegxY01',
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;