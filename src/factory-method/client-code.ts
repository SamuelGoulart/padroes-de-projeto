import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-number";
import { CarFactory } from "./factories/car-factory";

const customerNames = ['Ana', 'Joana', 'Helena', 'João']
const carFactory = new CarFactory()

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm()
  const name = customerNames[randomNumbers(customerNames.length)]
  vehicle.pickUp(name)
  vehicle.stop()
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`)
  newCar.stop()
  console.log('--')
}