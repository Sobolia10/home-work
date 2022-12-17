import {showUppercaseFirstLetter} from "./showUppercaseFirstLetter";
import {function10_3} from "./function10_3";
import {function10_4} from "./function10_4";
import {function10_5} from "./function10_5";
import {function10_6} from "./function10_6";
import {function10_7} from "./function10_7";
import {function10_8} from "./function10_8";


function App() {
    let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"]
    let arr = [6, 3, "ten", 1, true, "4"]
    let students = [
        {name: 'Alexey', id: 123, marks: 9},
        {name: 'Vitalik', id: 101, marks: 5},
        {name: 'Tanya', id: 200, marks: 7},
        {name: 'Sasha', id: 115, marks: 10}
    ]
    let drivers = ["Dominic", "Brian", "Letty", "Roman"]
    let antagonists = ["Deckard", "Luke"]
    let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"]


    console.log(showUppercaseFirstLetter('test some text'))
    console.log(function10_3(harryPotterTeam))
    console.log(function10_4(arr))
    console.log(function10_5(students))
    console.log(function10_6(students))
    console.log(function10_7(drivers, antagonists))
    console.log(function10_8(cars, ['Bugatti', 'Ferrari']))

    return (
        <>

        </>
    );
}

export default App;
