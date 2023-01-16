export function genID() {
  let initialId = 0;

  return () =>  initialId++;
}
