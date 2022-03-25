import translateBetsName from "./translate-bets-name"

test("está traduzindo ?", () => {
expect(translateBetsName(2)).toBe("Casa / Fora")
})