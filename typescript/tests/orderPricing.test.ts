import {
  calculatePrice,
  getOrderLabel,
  getOrderPriority,
} from "../src/orderPricing";

describe("calculatePrice", () => {
  it("returns base price for standard orders", () => {
    expect(calculatePrice("standard", 100)).toBe(100);
  });

  it("applies 20% markup for premium orders", () => {
    expect(calculatePrice("premium", 100)).toBe(120);
  });

  it("applies 30% discount for wholesale orders", () => {
    expect(calculatePrice("wholesale", 200)).toBe(140);
  });

  it("applies 30% discount for small wholesale orders", () => {
    expect(calculatePrice("wholesale", 40)).toBe(28);
  });
});

describe("getOrderLabel", () => {
  it("returns correct label for each type", () => {
    expect(getOrderLabel("standard")).toBe("Standard Order");
    expect(getOrderLabel("premium")).toBe("Premium Order");
    expect(getOrderLabel("wholesale")).toBe("Wholesale Order");
  });
});

describe("getOrderPriority", () => {
  it("returns correct priority for each type", () => {
    expect(getOrderPriority("standard")).toBe(1);
    expect(getOrderPriority("premium")).toBe(3);
    expect(getOrderPriority("wholesale")).toBe(2);
  });
});
