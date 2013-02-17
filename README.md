# CAF (Cloud Assistant Framework)

Co-design permanent, active, stateful, reliable cloud proxies with your web app.

See http://www.cafjs.com 

## CAF Library to interact with PiFace using SPI

Port of python library in 

https://github.com/thomasmacpherson/piface

to node.js/JavaScript (using https://github.com/RussTheAerialist/node-spi)

## API

see `lib/main.js` jsdoc

    >  pif = require('caf_piface')
       { PiFace: [Function] }
    >  p = new pif.PiFace()
       { spi: { _spi: {}, device: '/dev/spidev0.0' } }
    > p.init()
      undefined
    > p.write(1,7)
      true
    > p.readOutput(7)
      1
    > p.readOutput()
      128
    > p.read()
      0       // no button pressed
    > p.read()
      8       // pressing fourth button
    > p.shutdown()

      

 
## Configuration Example

### framework.json

None

### ca.json

None
  
    
        
            
 
