interface IEmployee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const jaden: IEmployee = {
  name: "Jaden",
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = jaden.id + " - " + jaden.name;
    if (!jaden.isManager) {
      return "emp-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log(jaden.getUniqueId());

const linda: IEmployee = {
  name: "Linda",
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = linda.id + " - " + linda.name;
    if (!linda.isManager) {
      return "emp-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log(linda.getUniqueId());
