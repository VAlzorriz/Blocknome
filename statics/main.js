var datasetSocket = new Rete.Socket('Dataset');
var conditionSocket = new Rete.Socket('Condition');
var symbolSocket = new Rete.Socket('Symbol');
var valueSocket = new Rete.Socket('Value');
var outpSocket = new Rete.Socket('Outp');

var node = document.getElementById('query');
var nodeText = "query"
node.textContent = nodeText;

var eventHandlers = {
    list: [],
    remove() {
        this
            .list
            .forEach(h => {
                document.removeEventListener('keydown', h);
            });
        this.list = [];
    },
    add(name, h) {
        document.addEventListener(name, h, false);
        this
            .list
            .push(h);
    }
};

class MessageControl extends Rete.Control {

    constructor(emitter, msg) {
        super();
        this.emitter = emitter;
        this.template = '<input :value="msg" @input="change($event)"/>';

        this.scope = {
            msg,
            change: this.change.bind(this)
        };
    }

    change(e) {
        this.scope.value = e.target.value;
        this.update();
    }

    update() {
        this.putData('msg', this.scope.value)
        this.emitter.trigger('process');
        this._alight.scan();
    }

    mounted() {
        this.scope.value = this.getData('msg') || 0;
        this.update();
    }

    setValue(val) {
        this.scope.value = val;
        this._alight.scan()
    }
}

class DatasetComponent extends Rete.Component {
    constructor() {
      super("Dataset");
      this.task = {
          outputs : {}
      }
    }
  
    builder(node) {
      var out = new Rete.Output("dataset", "Dataset", datasetSocket);
      var con = new MessageControl(this.editor, node.data.msg);
  
      node.addOutput(out).addControl(con);
    }
  
    worker(node, inputs, outputs) {

    }
  }

  class FilterComponent extends Rete.Component {
    constructor() {
      super("Filter");
      this.task = {
          outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("dataset", "Dataset", datasetSocket);
      var out1 = new Rete.Output("condition", "Conditions", conditionSocket);
      var out2 = new Rete.Output("output", "Output", outpSocket);
  
      node.addInput(inp).addOutput(out1).addOutput(out2);
    }
  
    worker(node, inputs, outputs) {

    }
  }

  class FieldComponent extends Rete.Component {
    constructor() {
      super("Field");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("condition", "Condition", conditionSocket);
      var out = new Rete.Output("symbol", "Symbol", symbolSocket);
      var con = new MessageControl(this.editor, node.data.msg);
  
      node.addInput(inp).addOutput(out).addControl(con);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class SymbolEqualComponent extends Rete.Component {
    constructor() {
      super("==");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("symbol", "Symbol", symbolSocket);
      var out = new Rete.Output("value", "Value", valueSocket);
  
      node.addInput(inp).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class SymbolLessThanComponent extends Rete.Component {
    constructor() {
      super("<");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("symbol", "Symbol", symbolSocket);
      var out = new Rete.Output("value", "Value", valueSocket);
  
      node.addInput(inp).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class SymbolGreaterThanComponent extends Rete.Component {
    constructor() {
      super(">");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("symbol", "Symbol", symbolSocket);
      var out = new Rete.Output("value", "Value", valueSocket);
  
      node.addInput(inp).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class ValueComponent extends Rete.Component {
    constructor() {
      super("Value");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("value", "Value", valueSocket);
      var out = new Rete.Output("condition", "Condition", conditionSocket);
      var con = new MessageControl(this.editor, node.data.msg);
  
      node.addInput(inp).addOutput(out).addControl(con);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class OperatorAndComponent extends Rete.Component {
    constructor() {
      super("AND");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("condition1", "Condition 1", conditionSocket);
      var out = new Rete.Output("condition2", "Condition 2", conditionSocket);
  
      node.addInput(inp).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }
  
  class OperatorOrComponent extends Rete.Component {
    constructor() {
      super("OR");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("condition1", "Condition 1", conditionSocket);
      var out = new Rete.Output("condition2", "Condition 2", conditionSocket);
  
      node.addInput(inp).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class CoverComponent extends Rete.Component {
    constructor() {
      super("Cover");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("output1", "Output", outpSocket);
      var out = new Rete.Output("output2", "Output", outpSocket);
      var con = new MessageControl(this.editor, node.data.msg);
  
      node.addInput(inp).addOutput(out).addControl(con);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class MapComponent extends Rete.Component {
    constructor() {
      super("Map");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp1 = new Rete.Input("output1", "Query Output 1", outpSocket);
      var inp2 = new Rete.Input("output2", "Query Output 2", outpSocket);
      var out = new Rete.Output("map", "Map", outpSocket);
  
      node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

  class SaveComponent extends Rete.Component {
    constructor() {
      super("Save");
      this.task = {
        outputs: {}
      }
    }
  
    builder(node) {
      var inp = new Rete.Input("map", "Map", outpSocket);
      var con = new MessageControl(this.editor, node.data.msg);
  
      node.addInput(inp).addControl(con);
    }
  
    worker(node, inputs, outputs) {
  
    }
  }

var components = [
    new DatasetComponent, 
    new FilterComponent, 
    new FieldComponent, 
    new SymbolEqualComponent, 
    new SymbolGreaterThanComponent, 
    new SymbolLessThanComponent, 
    new ValueComponent, 
    new OperatorAndComponent, 
    new OperatorOrComponent, 
    new CoverComponent, 
    new MapComponent, 
    new SaveComponent
];
var container = document.querySelector('#rete');

var editor = new Rete.NodeEditor('tasksample@0.1.0', container, );
editor.use(AlightRenderPlugin);
editor.use(ConnectionPlugin);
editor.use(ContextMenuPlugin);
editor.use(TaskPlugin);

var engine = new Rete.Engine('tasksample@0.1.0');

components.map(c => {
    editor.register(c);
    engine.register(c);
});

editor.on('connectioncreate connectionremove nodecreate noderemove', () => {
    if (editor.silent) return;

    compile();
});

async function compile() {
    await engine.abort();
    await engine.process(editor.toJSON());
}

var data = {
    'id': 'tasksample@0.1.0',
    'nodes': {
        '1': {
            'id': 1,
            'data': {
                'msg': 'Dataset Name'
            },
            'group': null,
            'inputs': {},
            'outputs': {
                'dataset': {
                    'connections': [{
                        'node': 2,
                        'input': 'dataset'
                        }]
                }
            },
            'position': [
                    100, 200
                ],
            'name': 'Dataset'
        },
        '2': {
            'id': 2,
            'data': {},
            'group': null,
            'inputs': {
                'dataset': {
                    'connections': [{
                        'node': 1,
                        'output': 'dataset'
                        }]
                }
            },
            'outputs': {
                'condition': {
                    'connections': [{
                        'node': 3,
                        'input': 'condition'
                        }]
                },
                'output': {
                    'connections': [{
                        'node': 6,
                        'input': 'output1'
                        }]
                }
            },
            'position': [
                    400, 200
                ],
            'name': 'Filter'
        },
        '3' : {
            'id' : 3,
            'data' : {
                'msg': 'Field Name'
            },
            'group' : null,
            'inputs' : {
                'condition': {
                    'connections': [{
                        'node': 2,
                        'output': 'condition'
                        }]
                }
            },
            'outputs' : {
                'symbol': {
                    'connections': [{
                        'node': 4,
                        'input': 'symbol'
                        }]
                }
            },
            'position' : [
                700, 100
            ],
            'name' : 'Field'
        },
        '4' : {
            'id' : 4,
            'data' : {},
            'group' : null,
            'inputs' : {
                'symbol': {
                    'connections': [{
                        'node': 3,
                        'output': 'symbol'
                        }]
                }
            },
            'outputs' : {
                'value': {
                    'connections': [{
                        'node': 5,
                        'input': 'value'
                        }]
                }
            },
            'position' : [
                1000, 100
            ],
            'name' : '=='
        },
        '5' : {
            'id' : 5,
            'data' : {
                'msg': 'Value'
            },
            'group' : null,
            'inputs' : {
                'value': {
                    'connections': [{
                        'node': 4,
                        'output': 'value'
                        }]
                }
            },
            'outputs' : {},
            'position' : [
                1300, 100
            ],
            'name' : 'Value'
        },
        '6' : {
            'id' : 6,
            'data' : {
                'msg': 'Value'
            },
            'group' : null,
            'inputs' : {
                'output1': {
                    'connections': [{
                        'node': 2,
                        'output': 'output'
                        }]
                }
            },
            'outputs' : {
                'output2': {
                    'connections': [{
                        'node': 7,
                        'input': 'output1'
                        }]
                }
            },
            'position' : [
                700, 300
            ],
            'name' : 'Cover'
        },
        '7' : {
            'id' : 7,
            'data' : {},
            'group' : null,
            'inputs' : {
                'output1': {
                    'connections': [{
                        'node': 6,
                        'output': 'output1'
                        }]
                }
            },
            'outputs' : {
                'map': {
                    'connections': [{
                        'node': 8,
                        'input': 'map'
                        }]
                }
            },
            'position' : [
                1000, 500
            ],
            'name' : 'Map'
        },
        '8' : {
            'id' : 8,
            'data' : {
                'msg': 'URL'
            },
            'group' : null,
            'inputs' : {
                'map': {
                    'connections': [{
                        'node': 7,
                        'output': 'map'
                        }]
                }
            },
            'outputs' : {},
            'position' : [
                1300, 500
            ],
            'name' : 'Save'
        },
    },
    'groups': {}
}

editor.fromJSON(data).then(() => {
    editor.view.resize();
    compile();
});

editor.use(DockPlugin, {
    container: document.querySelector('.dock'), // html element to which pseudo nodes will be added
    plugins: [VueRenderPlugin], // list with plugins for rendering
    itemClass: 'item' // by default: dock-item 
});