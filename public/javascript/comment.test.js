const rewire = require("rewire")
const comment = rewire("./comment")
const commentFormHandler = comment.__get__("commentFormHandler")
// @ponicode
describe("commentFormHandler", () => {
    test("0", async () => {
        await commentFormHandler({ preventDefault: () => false })
    })

    test("1", async () => {
        await commentFormHandler({ preventDefault: () => true })
    })

    test("2", async () => {
        await commentFormHandler(undefined)
    })
})
