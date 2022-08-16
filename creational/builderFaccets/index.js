import { PersonBuilder } from './PersonBuilders.js';

let pb = new PersonBuilder();
let person = pb.lives
  .at('123 London Road')
  .in('London')
  .withPostcode('SW12BC')
  .works.at('Fabrikam')
  .asA('Engineer')
  .earning(123000)
  .build();
console.log(person.toString());
