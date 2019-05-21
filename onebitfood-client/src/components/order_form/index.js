import React, { Component } from 'react';
import { Box, Column, Title, Input, Field, Button, Control, Label } from "rbx";
import { connect } from 'react-redux';
import api from "../../services/api";
import history from '../../history';

class OrderForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:  '',
      cpf:   '',
      phone_number: '',
      restaurant_id: this.props.restaurant.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    api.createOrder(this.state, this.props.order, this.props.address).then((response) => {
      let id = response.data.order.id
      history.push(`/orders/${id}`)
    })
  }

  render() {

    return (
      <Column.Group>
        <Column size={10} offset={1}>
          <Title size={5} className="has-text-custom-gray-darker">
            Finalizar Pedido
          </Title>
          <Box>         
            
            <Column.Group>
              <Column size={10} offset={1}>
                <form onSubmit={this.handleSubmit}>
                  <Field>
                    <Label>Nome</Label>
                    <Control>
                      <Input 
                        type="text" 
                        placeholder="Leonardo Scorza..."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                        />
                    </Control>
                  </Field>

                  <Field>
                    <Label>CPF</Label>
                    <Control>
                      <Input 
                        type="text" 
                        placeholder='396.134.567-34'
                        name="cpf"
                        value={this.state.cpf}
                        onChange={this.handleInputChange}
                        required
                        />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Telefone</Label>
                    <Control>
                      <Input 
                        type="text" 
                        placeholder='(19) 997095432'
                        name="phone_number"
                        value={this.state.phone_number}
                        onChange={this.handleInputChange}
                        required
                      />
                    </Control>
                  </Field>
                  
                  <Field>
                    <br/>
                    <Title size={6} className="has-text-custom-gray-darker">
                      Endereço de entrega
                    </Title>
                    <p>
                      {this.props.address.street}, {this.props.address.number}
                    </p>
                    <p>
                    {this.props.address.city}, {this.props.address.state}
                    </p>
                  </Field>

                  <br/>
                  {this.props.order.length > 0 && 
                    <Field kind="group" align="centered">
                      <Control>
                        <Button size="medium" color="custom-orange">
                          <span className="has-text-white">Realizar Pedido</span>
                        </Button>
                      </Control>
                    </Field>
                  }
                </form>
              </Column>
            </Column.Group>
          </Box>
        </Column>
      </Column.Group>
    )
  } 
}

const mapStateToProps = store => ({
  address: store.addressState.address,
  restaurant: store.newOrderState.restaurant,
  order: store.newOrderState.order
});

export default connect(mapStateToProps)(OrderForm);