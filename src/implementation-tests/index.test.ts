describe("Api client stub", () => {
  const apiClient = jest.fn().mockRejectedValue({
    error: "",
  });
  test("should throw error", () => {});
});

describe("Reducer test", () => {

})

describe("Actions...", () => {
  // bunch of actions in here... not so 
})


// second approach:

const customRender = (Component) => {
  <ReduxProvider store={realStore}>
    <Component />
  </ReduxProvider>
}

describe("Todo", () => {
  test("Can create a todo", () => {
    
  })
})