(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This Hello World example must run unsandboxed');
    }
  //halve
    class Math {
      getInfo() {
        return {
          id: 'hellowoHalverldunHalvesandboxed',
          name: 'Halve',
          blocks: [
            {
              opcode: 'Halve',
              blockType: Scratch.BlockType.REPORTER,
              text: 'Halve [NUM]'
            }
          ]
        };
      }
      Halve(args) {
        if (typeof args.NUM === 'number'){
            return (args.NUM / 2);
        
        }
        else{
            return 0
        }
      }
    }
    Scratch.extensions.register(new Math());
// double
class Math1 {
    getInfo() {
      return {
        id: 'hellowoHalverldunHalvesandboxed12',
        name: 'double',
        blocks: [
          {
            opcode: 'double',
            blockType: Scratch.BlockType.REPORTER,
            text: 'double [NUM]'
          }
        ]
      };
    }
    double(args) {
      if (typeof args.NUM === 'number'){
          return (args.NUM * 2);
      
      }
      else{
          return 0
      }
    }
  }
    
    Scratch.extensions.register(new Math1());
  })(Scratch);