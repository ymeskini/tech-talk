describe("Api client stub", () => {
  const apiClient = jest.fn().mockRejectedValue({
    error: "",
  });
  test("should throw error", () => {});
});

describe("Reducer test", () => {});

describe("Actions...", () => {
  // bunch of actions in here... not so
});

// second approach:

describe("Todo", () => {
  test("Can create a todo", () => {
    // render ui
    // click add button
    // confirm API called with correct details
    // assert against updated dom
  });

  test("Gracefully handles API error", () => {});
});
