function bubbleSort(array) {
  sa = Array.from(array);
  let flip;
  do {
    flip = false;
    flip = false;
    for (let i = 1; i < sa.length; ++i) {
      if (sa[i - 1] > sa[i]) {
        [ sa[i], sa[i - 1] ] = [ sa[i - 1], sa[i] ];
        flip = true;
      }
    }
  } while (flip == true)
  return sa;
}
