

function workInProgress () {
  _.map(MYLIBRARY, function(value, index, MYLIBRARY) {
    this[value] = value[_.random(0,2)];
  });
}

/*
  This pice of code currently is super close to working!
  Problem:
  1) value is being returned as the contents of the object (i.e. entree).
  2) index presents the name of the object (i.e. entree) but as a string.
    a) I'm wondering if this is the what causes the error???
  Currently I get an error that says the following when I run th code as is:

          Attempt to assign a readonly property.

  If I replace `this[value]` with `this[index]` I get the same.

  If I replace 'this[value]' with `let x` it will store whatever random index
  has been pointed too in `value[]`.

  I did notice when hovering over `this` that it is pointing to the Diner class.
*/
