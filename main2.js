setTimeout(async ()=>{
    try {
        const value = await import("./chunk2")
        console.log("Hello from "+ value.default)
    }
    catch(error) {
        console.error(error)
    }
},400
)
