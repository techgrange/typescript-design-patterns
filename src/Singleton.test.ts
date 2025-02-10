import { Singleton } from "./Singleton";

describe("Singleton", () => {
  it("should always return the same instance", () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toBe(instance2);
  });

  it("should be able to call methods on the singleton instance", () => {
    const instance = Singleton.getInstance();
    const consoleSpy = jest.spyOn(console, "log");

    instance.someMethod();

    expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    consoleSpy.mockRestore();
  });
});
