const name = "docktor";
(function init() {
  console.log(`init in: ${name}`);
})();

interface IMask {
  name: string;
  dosage: number;
}

async function medicine(p rescription: IMask): Promise<unknown> {
  return Promise.resolve(undefined);
}
