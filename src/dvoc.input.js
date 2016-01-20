(function(GB){

    var Input = GB.getMethod('component').createClass({

        render : function() {

            return GB.getMethod('component').createElement(
                'input',
                {
                    className : 'form-control',
                    type : this.props.type || 'text',
                    placeholder : this.props.placeholder || '',
                    name : this.props.name || ''
                }
            );

        }

    });

    GB.addResource('dvoc', 'Input', Input);

})(Gumball);