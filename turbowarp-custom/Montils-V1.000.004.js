
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
            },
            {
                opcode: 'ngb',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'negate boolean [BOOL]'
            },
            {
              opcode: 'pows',
              blockType: Scratch.BlockType.REPORTER,
              text: '[NUM1] to the power of [NUM2]'
          },
              {
                  opcode: 'negate_int',
                  blockType: Scratch.BlockType.REPORTER,
                  text:'negate int [NUM]'
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
      ngb(args) {
        if (typeof args.BOOL === 'boolean'){
            if ((args.BOOL) == true){
                return false

            }
            else{
                return true

            }
        
        }
        else{
            return false
        }
      }
      pows(args) {
        if (typeof args.NUM1 === 'number'){
          if (typeof args.NUM2 === 'number'){
            return Math.pow(args.NUM1,args.NUM2);
        
        }
        else{
            return 0
        }
        
        }
        else{
            return 0
        }
      }
        negate_int(args){
            if (typeof args.NUM === 'number'){
                return 0-(args.NUM)
    }
        }
    Scratch.extensions.register(new MathOperations());
  })(Scratch);
