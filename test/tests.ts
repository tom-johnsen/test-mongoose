import assert from "assert"

describe("Dummy tests I", () => {
    it("should pass", () => {
        console.log("Dummy test Ia")
        assert.equal(true, true)
    })
    it("should fail", () => {
        console.log("Dummy test Ib")
        assert.equal(true, !false)
    })
})

describe("Dummy tests II", () => {
    it("should pass", () => {
        console.log("Dummy test IIa")
        assert.equal(true, true)
    })
    it("should fail", () => {
        console.log("Dummy test IIb")
        assert.equal(true, !false)
    })
})

describe("Dummy tests III", () => {
    it("should pass", () => {
        console.log("Dummy test IIIa")
        assert.equal(true, true)
    })
    it("should fail", () => {
        console.log("Dummy test IIIb")
        assert.equal(true, !false)
    })
})
