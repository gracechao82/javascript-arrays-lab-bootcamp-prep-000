const app = "I don't do much."
function kittens() {
  var kittens = ["Milo","Otis","Garfield"]
  return kittens
  }
  function destructivelyAppendKitten(newKitten) {
    kittens.push(newKitten)
    return kittens
  }
  function destructivelyPrependKitten(newKitten){
    kittens.shift(newKitten)
    return kittens
  }