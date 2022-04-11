export default function removedItem(indice, vf, bet, setVf, removeBetsInNote) {

    const newVf = vf
    console.log('vf ', newVf, indice)
    // if (newVf.length > 0) {
    //     const indexElement = newVf.findIndex((element) => {
    //         return element.id === bet.fix.fixture.id
    //     })
    //     if (indexElement >= 0) {
    //         newVf.splice(indexElement, 1)
    //         setVf(newVf)
    //     }
    // }
    removeBetsInNote(indice)
}