setTimeout(async ()=>{
    try {
        const value = await import("./chunk1")
        console.log("Hello from "+ value.default)
    }
    catch(error) {
        console.error(error)
    }
},200
)
