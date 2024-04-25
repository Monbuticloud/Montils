
(function(Scratch) {


    'use strict';
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This Hello World example must run unsandboxed');
      }
    class MathOperations {
      getInfo() {
        return {
          id: 'hellowoHalverldunHalvesandboxed',
          name: 'Math Shortcuts',
          blocks: [
            {
              opcode: 'Halve',
              blockType: Scratch.BlockType.REPORTER,
              text: 'Halve [NUM]'
            },
            {
              opcode: 'double',
              blockType: Scratch.BlockType.REPORTER,
              text: 'double [NUM]'
            },
            {
                opcode: 'cbrt',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Cube Root of [NUM]'
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
      double(args) {
        if (typeof args.NUM === 'number'){
            return (args.NUM * 2);
        
        }
        else{
            return 0
        }
      }
      cbrt(args) {
        if (typeof args.NUM === 'number'){
            let number = args.NUM
            return Math.pow(number, 1/3);
        
        }
        else{
            return 0
        }
      }
    }
    Scratch.extensions.register(new MathOperations());
  })(Scratch);