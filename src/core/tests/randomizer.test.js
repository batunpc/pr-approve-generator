import { expect, it } from "vitest";
import { buildRandomizer } from "../randomizer";

it("should always return unique message", () => {
  const messages = ["1", "2", "3", "4", "5"];
  const randomizer = buildRandomizer(messages);

  const { newMessage, newMessagesState } = randomizer.getRandomMessage();
  expect(newMessagesState).not.toContain(newMessage);
});

it("should return initial array when the array is empty", () => {
  const messages = ["1", "2", "3", "4", "5"];
  const randomizer = buildRandomizer(messages);
  for (let i = 0; i < 6; i++) {
    const { newMessage, newMessagesState } = randomizer.getRandomMessage();
    expect(newMessagesState).not.toContain(newMessage);
  }
  const { newMessage, newMessagesState } = randomizer.getRandomMessage();
  expect(newMessagesState).not.toContain(newMessage);
});
