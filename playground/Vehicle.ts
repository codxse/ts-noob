class Vehicle {
  private name: String;

  constructor(name: string) {
    this.name = name;
  }

  public hong(): void {
    console.log("Beeep!");
  }

  public getName(): String {
    return this.name;
  }
}

export {};