(function(GB){

    var Input = GB.getMethod('component').createClass({

        render : function() {

            return GB.getMethod('component').createElement(
                'input',
                {
                    type : this.props.type || 'text',
                    placeholder : this.props.placeholder || ''
                }
            );

        }

    });

    GB.addResource('dvoc', 'Input', Input);

})(Gumball);