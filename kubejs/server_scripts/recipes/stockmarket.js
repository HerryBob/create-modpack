ServerEvents.recipes(event=>{
    event.remove({output:'stockmarket:trading_software'})
    event.remove({output:'banksystem:software'})
    event.remove({output:'banksystem:banking_software'})
})
